import DrawerContent from '@/components/DrawerContent'
import { Drawer } from 'expo-router/drawer'

export default function Layout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="payments" options={{ title: 'Pagamentos' }} />
      <Drawer.Screen name="settings" options={{ title: 'Configurações' }} />
    </Drawer>
  )
}
