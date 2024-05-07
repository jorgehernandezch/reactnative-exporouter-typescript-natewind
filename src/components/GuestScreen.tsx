import { View } from 'react-native'
import Constants from 'expo-constants'

interface GuestPageProps {
  children: JSX.Element
}

export default function GuestScreen({ children }: GuestPageProps) {
  return (
    <View
      className="bg-primary flex-1"
      style={{ paddingTop: 10 + Constants.statusBarHeight }}
    >
      {children}
    </View>
  )
}
