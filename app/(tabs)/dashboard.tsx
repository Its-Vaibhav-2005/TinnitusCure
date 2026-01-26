import { StyleSheet, Text, View } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { useUser } from '@clerk/clerk-expo';

export default function DashboardScreen(){
  const {user} = useUser()
  const email = user?.primaryEmailAddress?.emailAddress || ""
  const userName = email.split('@')[0] || 'User'
  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome, {user?.firstName || userName}!</Text>

      <View style={style.footer}>
        <SignOutButton />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  footer: {
    marginTop: 'auto', 
    marginBottom: 20,
    width: '100%',
  }
})
