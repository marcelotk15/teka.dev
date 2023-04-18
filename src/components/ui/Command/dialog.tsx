import { DialogProps } from '@radix-ui/react-dialog'

import { Dialog } from '@/components/ui/Dialog'

import { CommandRoot } from './root'

export function CommandDialog({ children, ...props }: DialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="overflow-hidden p-0 pb-1 shadow-2xl">
        <CommandRoot className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog.Root>
  )
}
