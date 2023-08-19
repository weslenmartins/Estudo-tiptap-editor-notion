import { ComponentProps } from 'react'

export interface FloatingButtonProps extends ComponentProps<'button'> {
  title: string
  subTitle: string
  icon: string
}

export function FloatingButton(props: FloatingButtonProps) {
  const { title, subTitle, icon, ...rest } = props

  return (
    <button className="flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-zinc-600" {...rest}>
      <img src={icon} alt={`Icon ${title}`} className="w-12 rounded border-zinc-600 bg-white" />
      <div className="flex flex-col text-left">
        <span className="text-sm leading-none">{title}</span>
        <span className="text-xs text-zinc-400">{subTitle}</span>
      </div>
    </button>
  )
}
