import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '@/styles/global.css'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  )
}
