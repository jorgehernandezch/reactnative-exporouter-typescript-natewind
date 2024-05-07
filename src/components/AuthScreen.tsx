import { View } from 'react-native'
import Constants from 'expo-constants'
import Header from './Header'

interface AuthPageProps {
  children: JSX.Element
}

export default function AuthScreen({ children }: AuthPageProps) {
  return (
    <View
      className="bg-primary flex-1"
      style={{ paddingTop: 10 + Constants.statusBarHeight }}
    >
      <Header headerText="Dashboard" />
      {children}
    </View>
  )
}
