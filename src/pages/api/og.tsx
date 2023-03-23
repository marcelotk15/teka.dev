import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

const font = fetch(
  new URL('../../../public/fonts/dystopian/dystopian-bold.woff', import.meta.url),
).then((res) => res.arrayBuffer())

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const title = searchParams.get('title')

  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(http://localhost:3000/og-bg.jpg)', //TODO: change to teka.dev
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Dystopian',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Dystopian',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
