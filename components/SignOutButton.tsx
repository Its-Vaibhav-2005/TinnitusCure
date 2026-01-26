import { useClerk } from "@clerk/clerk-expo";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const SignOutButton = () => {
  const {signOut} = useClerk()
  
  const handleSignOut = async () => {
    try{
      await signOut()
      console.log('SignOut Complete')
    }catch(error){
      console.error('Sign Out error: ', error)
    }
  }
  return (
    <TouchableOpacity onPress={handleSignOut} style={styles.button}>
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
})
