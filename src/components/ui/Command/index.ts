import { CommandRoot } from './root'
import { CommandDialog } from './dialog'
import { CommandInput } from './input'
import { CommandList } from './list'
import { CommandEmpty } from './empty'
import { CommandGroup } from './group'
import { CommandItem } from './item'
import { CommandShortcut } from './shortcut'
import { CommandSeparator } from './separator'

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
}
