import { ScrollView, Text, View, Button } from 'react-native'
import { Link } from 'expo-router'
import { type DrawerContentComponentProps } from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'

export default function DrawerContent(
  drawerProps: DrawerContentComponentProps,
) {
  return (
    <View className="bg-primary flex-1 px-6 pt-24">
      <View className="my-4">
        <Text>Logo</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key].options

            if (options.title === undefined) return <></>

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: 'drawerItemPress',
                canPreventDefault: true,
                target: route.key,
              })

              if (!event?.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params)
              }
            }

            return (
              <View key={index}>
                <DrawerMenu
                  title={options.title}
                  onPress={onPress}
                  isFocused={isFocused}
                />
              </View>
            )
          })}
        </View>
        <Link href={'/'} asChild>
          <Button title="Logout" />
        </Link>
      </ScrollView>
    </View>
  )
}
