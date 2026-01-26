import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, TextInput, Button, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Modes: 'signin' | 'mfa' | 'forgot_password' | 'reset_password'
  const [mode, setMode] = useState<'signin' | 'mfa' | 'forgot_password' | 'reset_password'>('signin')

  // 1. Handle Standard Sign-In
  const onSignInPress = async () => {
    if (!isLoaded) return
    setLoading(true)
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } 
      // This handles your "Client Trust" error
      else if (signInAttempt.status === 'needs_second_factor') {
        const factor = signInAttempt.supportedSecondFactors?.find(
          (f) => f.strategy === 'email_code'
        )
        if (factor) {
          await signIn.prepareSecondFactor({
            strategy: 'email_code',
            emailAddressId: factor.emailAddressId,
          })
          setMode('mfa') // Switch UI to MFA mode
        } else {
          console.error('No supported secondary factor found')
        }
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      alert(err.errors[0]?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  // 2. Handle 2FA (MFA) Verification
  const onMfaVerifyPress = async () => {
    if (!isLoaded) return
    setLoading(true)
    try {
      const attempt = await signIn.attemptSecondFactor({
        strategy: 'email_code',
        code,
      })

      if (attempt.status === 'complete') {
        await setActive({ session: attempt.createdSessionId })
        router.replace('/')
      } else {
        console.error(attempt)
        alert("Verification failed. Please try again.")
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      alert(err.errors[0]?.message)
    } finally {
      setLoading(false)
    }
  }

  // 3. Handle Forgot Password (Send Code)
  const onForgotPasswordPress = async () => {
    if (!isLoaded) return
    setLoading(true)
    try {
      // Create a sign in attempt strictly for password reset
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      })
      setMode('reset_password') // Move to the input for code + new password
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      alert(err.errors[0]?.message)
    } finally {
      setLoading(false)
    }
  }

  // 4. Handle Reset Password (Verify Code + Set New Password)
  const onResetPasswordPress = async () => {
    if (!isLoaded) return
    setLoading(true)
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password: newPassword, // Set the new password here
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        alert("Password reset successfully!")
        router.replace('/')
      } else {
        console.error(result)
        alert("Reset failed. Please check your code.")
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      alert(err.errors[0]?.message)
    } finally {
      setLoading(false)
    }
  }

  // --- UI RENDERING ---

  // Loading Indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0a7ea4" />
      </View>
    )
  }

  // Render: Forgot Password (Step 1: Enter Email)
  if (mode === 'forgot_password') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>Enter your email to receive a reset code.</Text>
        
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email Address"
          onChangeText={setEmailAddress}
          style={styles.input}
        />
        <Button title="Send Reset Code" onPress={onForgotPasswordPress} />
        <Button title="Back to Sign In" onPress={() => setMode('signin')} color="gray" />
      </View>
    )
  }

  // Render: Reset Password (Step 2: Enter Code + New Password)
  if (mode === 'reset_password') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <TextInput
          value={code}
          placeholder="Enter Verification Code"
          onChangeText={setCode}
          style={styles.input}
        />
        <TextInput
          value={newPassword}
          placeholder="Enter New Password"
          secureTextEntry
          onChangeText={setNewPassword}
          style={styles.input}
        />
        <Button title="Set New Password" onPress={onResetPasswordPress} />
        <Button title="Cancel" onPress={() => setMode('signin')} color="gray" />
      </View>
    )
  }

  // Render: MFA (Second Factor)
  if (mode === 'mfa') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Two-Step Verification</Text>
        <Text style={styles.subtitle}>A code was sent to your email.</Text>
        <TextInput
          value={code}
          placeholder="Enter Code"
          onChangeText={setCode}
          style={styles.input}
        />
        <Button title="Verify" onPress={onMfaVerifyPress} />
      </View>
    )
  }

  // Render: Standard Sign In
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={setEmailAddress}
          style={styles.input}
        />
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.input}
        />
        
        <View style={{ marginBottom: 20 }}>
          <Button title="Sign In" onPress={onSignInPress} />
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity onPress={() => setMode('forgot_password')}>
          <Text style={{ color: '#0a7ea4', textAlign: 'center', marginBottom: 20 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text>Don't have an account? </Text>
          <Link href="/sign-up">
            <Text style={{ color: '#0a7ea4', fontWeight: 'bold' }}>Sign up</Text>
          </Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
})
