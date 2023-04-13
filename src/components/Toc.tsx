import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { BlogPost } from 'contentlayer/generated'

export type TOC = { value: string; url: string; depth: number }

type TocProps = {
  toc: BlogPost['toc']
}

const depthToMargin = {
  2: 10,
  3: 20,
  4: 30,
}

export function Toc({ toc }: TocProps) {
  const { t } = useTranslation()

  return (
    <div className="prose sticky top-28 hidden h-full max-w-full self-start dark:prose-invert md:sticky md:block md:w-1/5">
      <h2>{t('blog:content')}</h2>

      <nav>
        <ol>
          {(toc as TOC[]).map((data, index) => (
            <li
              key={index}
              className="mt-2"
              style={{ marginLeft: depthToMargin[data.depth as keyof typeof depthToMargin] }}
            >
              <Link href={data.url}>{data.value}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
