import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { Root } from './Root'
import { Viewport } from './Viewport'
import { List } from './List'
import { Trigger } from './Trigger'

export { navigationMenuTriggerStyle } from './Trigger'

export const NavigationMenu = {
  Root,
  Viewport,
  List,
  Item: NavigationMenuPrimitive.Item,
  Trigger,
  Link: NavigationMenuPrimitive.Link,
}
