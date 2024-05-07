import { type DrawerNavigationOptions } from '@react-navigation/drawer'
import { type IconNameProps } from '@/components/DrawerMenu'

interface CustomOptions extends DrawerNavigationOptions {
  iconName?: IconNameProps
}
