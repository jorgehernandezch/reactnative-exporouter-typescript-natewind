import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, Link } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { colors } from '@/constants/colors'

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
      <View className="w-6">
        <Link href="/">
          <MaterialIcons name="logout" color={colors.white} size={24} />
        </Link>
      </View>
    </View>
  )
}
