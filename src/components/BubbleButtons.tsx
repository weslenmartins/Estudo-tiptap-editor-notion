import { ComponentProps, ReactNode } from 'react'

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="flex items-center gap-1.5 p-2 text-sm font-medium leading-none text-zinc-200 hover:bg-zinc-400 hover:text-zinc-50 data-[active=true]:text-violet-400"
      {...props}
    />
  )
}
