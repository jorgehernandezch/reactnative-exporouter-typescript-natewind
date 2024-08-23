import GuestScreen from '@/components/GuestScreen'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function StackIndex() {
  return (
    <GuestScreen>
      <View className="flex justify-center items-center flex-1">
        <Text className="text-white">Index Stack</Text>
        <Link href={'/(drawer)/(tabs)/home'} className="text-white">
          Go Tabs
        </Link>
      </View>
    </GuestScreen>
  )
}
