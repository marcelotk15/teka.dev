import FadeIn from 'react-fade-in'

type Props = {
  title: string
  description?: string
}

export function PageMainSectionTitle({ title, description }: Props) {
  return (
    <FadeIn className="mt-2 mb-8">
      <h1 className="relative inline-block text-5xl font-extrabold">
        {title}
        <div className="absolute left-2 bottom-1 -z-10 h-2 w-3/4 bg-gradient-to-r from-[#ff3dbc] via-[#ff6c6a] to-[#faa24b]"></div>
      </h1>

      {!!description && <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>}
    </FadeIn>
  )
}
