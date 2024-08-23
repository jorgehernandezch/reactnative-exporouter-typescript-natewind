import AuthScreen from '@/components/AuthScreen'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function TabsHome() {
  return (
    <AuthScreen>
      <View className="bg-white flex-1">
        <Text>Tabs Index</Text>
        <Link href={'/'}>Sair</Link>
      </View>
    </AuthScreen>
  )
}
