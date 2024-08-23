import GuestScreen from '@/components/GuestScreen'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function StackIndex() {
  return (
    <GuestScreen>
      <View>
        <Text>Index Stack</Text>
        <Link href={'/(drawer)/(tabs)/home'}>Go Tabs</Link>
      </View>
    </GuestScreen>
  )
}
