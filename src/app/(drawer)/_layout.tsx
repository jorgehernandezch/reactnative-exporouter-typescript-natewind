import DrawerContent from '@/components/DrawerContent'
import { Drawer } from 'expo-router/drawer'

export default function Layout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Drawer>
  )
}
