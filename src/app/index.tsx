import GuestScreen from '@/components/GuestScreen'
import { Link } from 'expo-router'
import { Button, View } from 'react-native'

export default function Index() {
  return (
    <GuestScreen>
      <View>
        <Link href={'/(drawer)'} asChild>
          <Button title="Dashboard" />
        </Link>
      </View>
    </GuestScreen>
  )
}
