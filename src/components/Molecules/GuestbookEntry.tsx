import { useSWRConfig } from 'swr'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import { MouseEvent } from 'react'

interface GuestbookEntryProps {
  entry: any
}

export function GuestbookEntry({ entry }: GuestbookEntryProps) {
  const { data: session } = useSession()

  const { mutate } = useSWRConfig()

  const deleteEntry = async (event: any) => {
    event.preventDefault()

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    })

    mutate('/api/guestbook')
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full break-words">{entry.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {session?.user && entry.created_by === session.user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>

            <button className="text-sm text-red-600 dark:text-red-400" onClick={deleteEntry}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}
