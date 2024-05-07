import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { colors } from '@/styles/colors'

interface HeaderProps {
  headerText: string
}

export default function Header({ headerText }: HeaderProps) {
  const navigation = useNavigation()
  const toggleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }
  return (
    <View className="flex flex-row justify-between items-center p-5">
      <MaterialIcons
        name="list"
        color={colors.white}
        size={24}
        onPress={toggleMenu}
      />
      <Text className="text-white">{headerText}</Text>
      <View className="w-6"></View>
    </View>
  )
}
