import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import { type DrawerContentComponentProps } from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'

export default function DrawerContent(
  drawerProps: DrawerContentComponentProps,
) {
  const router = useRouter()
  return (
    <View className="bg-primary flex-1 px-6 pt-24">
      <View className="my-4">
        <Text>Logo</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-2 mb-2">
          <TouchableOpacity
            className={`w-full rounded-md p-4 bg-blue-800`}
            onPress={() => {
              router.push('/(drawer)/(tabs)/home')
            }}
          >
            <Text className="text-white">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`w-full rounded-md p-4 bg-blue-800`}
            onPress={() => {
              router.push('/(drawer)/(tabs)/notifications')
            }}
          >
            <Text>Notifications</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 gap-2 mb-10">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key].options

            if (options.title === undefined) return <View key={index}></View>

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
                  key={index}
                  title={options.title}
                  onPress={onPress}
                  isFocused={isFocused}
                />
              </View>
            )
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            router.replace('/')
          }}
        >
          <Text>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
