import FadeIn from 'react-fade-in'

type Props = {
  title: string
  description?: string
}

export function PageMainSectionTitle({ title, description }: Props) {
  return (
    <FadeIn className="mt-2 mb-8">
      <h1 className="block font-serif text-5xl font-extrabold">{title}</h1>

      {!!description && <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>}
    </FadeIn>
  )
}
