import * as DialogPrimitive from '@radix-ui/react-dialog'

import { DialogContent } from './content'
import { DialogHeader } from './header'
import { DialogFooter } from './footer'
import { DialogTitle } from './title'
import { DialogDescription } from './description'

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
}
