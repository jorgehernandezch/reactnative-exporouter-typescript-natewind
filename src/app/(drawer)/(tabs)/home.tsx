import AuthScreen from '@/components/AuthScreen'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function TabsIndex() {
  return (
    <AuthScreen>
      <View>
        <Text>Tabs Index</Text>
        <Link href={'/'}>Sair</Link>
      </View>
    </AuthScreen>
  )
}
