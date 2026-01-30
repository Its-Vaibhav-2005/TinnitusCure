import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { useUser } from '@clerk/clerk-expo';
import { User } from 'lucide-react-native';

const {width} = Dimensions.get('window')

export default function DashboardScreen(){
  const {user} = useUser()
  const email = user?.primaryEmailAddress?.emailAddress || ""
  const userName = email.split('@')[0] || 'User'
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <User size={42} color="#4f46e5" />
        </View>

        <Text style={styles.welcomeText}>Welcome</Text>
        <Text
          style={styles.userName}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
        >
          {userName}
        </Text>
      </View>

      <View style={styles.footer}>
        <SignOutButton />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  welcomeText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 6,
  },

  userName: {
    fontSize: width > 400 ? 24 : 20, // responsive base size
    fontWeight: '600',
    color: '#111827',
    maxWidth: '100%',
    textAlign: 'center',
  },

  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
  },

  footer: {
    marginTop: 'auto',
    paddingBottom: 20,
    width: '100%',
  },
})
