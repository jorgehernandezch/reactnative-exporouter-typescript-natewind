import AuthScreen from '@/components/AuthScreen'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function DarwerPayments() {
  return (
    <AuthScreen>
      <View>
        <Text>Tabs Payments</Text>
        <Link href={'/'}>Sair</Link>
      </View>
    </AuthScreen>
  )
}
