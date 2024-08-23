import { type MaterialIcons } from '@expo/vector-icons'
import { Pressable, type PressableProps, Text } from 'react-native'

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

interface DrawerMenuProps extends PressableProps {
  title: string
  isFocused: boolean
}

export default function DrawerMenu({
  title,
  isFocused,
  ...rest
}: DrawerMenuProps) {
  return (
    <Pressable
      className={`w-full  rounded-md p-4 ${isFocused ? 'bg-cyan-300' : 'bg-blue-800'}`}
      {...rest}
    >
      <Text className={`${isFocused ? 'text-primary' : 'text-white'}`}>
        {title}
      </Text>
    </Pressable>
  )
}
