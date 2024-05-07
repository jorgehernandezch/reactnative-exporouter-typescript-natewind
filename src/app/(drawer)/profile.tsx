import { View, Text } from 'react-native'

import AuthScreen from '@/components/AuthScreen'

export default function Dashboard() {
  return (
    <AuthScreen>
      <View className="bg-white flex-1 p-4">
        <Text className="font-openBold">Profiile</Text>
      </View>
    </AuthScreen>
  )
}
