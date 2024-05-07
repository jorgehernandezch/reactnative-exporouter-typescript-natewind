import { Button, View, Text } from 'react-native'
import { Link } from 'expo-router'
import AuthScreen from '@/components/AuthScreen'

export default function Dashboard() {
  return (
    <AuthScreen>
      <View className="bg-white flex-1 p-4">
        <Text className="font-openBold">Dashboard</Text>
        <Link href={'/'} asChild>
          <Button title="Logout" />
        </Link>
      </View>
    </AuthScreen>
  )
}
