import { signIn, signOut, useSession } from 'next-auth/react'
import { useState, useCallback, FormEvent } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { CircleNotch, PaperPlaneRight } from 'phosphor-react'

import { styled } from '@theme'
import { Box } from '@components/Atoms/Box'
import fetcher from '@lib/fetcher'
import { Heading } from '@components/Atoms/Heading'
import { Text } from '@components/Atoms/Text'
import { Button } from '@components/Atoms/Button'
import { TextInput } from '@components/Atoms/TextInput'

const FormWrapper = styled(Box, {
  background: '$slate3',
  padding: '$4',
  borderRadius: '$2',
})

const GuestbookForm = styled('form', {
  my: '$4',
})

enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

interface FormState {
  state: Form
  message?: string
}

interface GuestbookProps {
  fallbackData: any
}

export function Guestbook({ fallbackData }: GuestbookProps) {
  const { data: session } = useSession()

  const { mutate } = useSWRConfig()

  const [form, setForm] = useState<FormState>({ state: Form.Initial })

  const {
    data: { entries },
  } = useSWR('/api/guestbook', fetcher, {
    fallbackData,
  })

  const handleLoginButton = useCallback(() => {
    signIn('github')
  }, [])

  const handleFormSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      console.log('🚀 ~ file: Guestbook.tsx ~ line 59 ~ event', event)

      event.preventDefault()

      setForm({
        state: Form.Loading,
      })

      console.log('🚀 ~ file: Guestbook.tsx ~ line 59 ~ event', event.currentTarget)

      const res = await fetch('/api/guestbook', {
        method: 'POST',
        body: JSON.stringify({
          message: event.currentTarget.message.value as string,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { error } = await res.json()

      if (error) {
        setForm({
          state: Form.Error,
          message: error,
        })

        return
      }

      event.currentTarget.message.value = ''
      mutate('/api/guestbook')

      setForm({
        state: Form.Success,
        message: `Hooray! Thanks for signing my Guestbook.`,
      })
    },
    [mutate],
  )

  return (
    <>
      <FormWrapper block>
        <Heading as="h5" size={'sm'} css={{ marginBottom: '$2' }}>
          Sign the Guestbook
        </Heading>

        <Text>Share a message for a future visitor of my site.</Text>

        {!session && (
          <Button onClick={handleLoginButton} css={{ my: '$2' }}>
            Login
          </Button>
        )}

        {session?.user && (
          <GuestbookForm onSubmit={handleFormSubmit}>
            <TextInput.Root>
              <TextInput.Input
                id="message"
                name="message"
                placeholder="Your message"
                aria-label="Your message"
                required
              />

              <TextInput.Icon>
                <Button
                  type="submit"
                  color="inherit"
                  background={'transparent'}
                  css={{ padding: '$2' }}
                  disabled={form.state !== Form.Loading}
                >
                  {form.state === Form.Loading ? (
                    <CircleNotch size={16} weight="duotone" />
                  ) : (
                    <PaperPlaneRight size={16} weight="duotone" />
                  )}
                </Button>
              </TextInput.Icon>
            </TextInput.Root>
          </GuestbookForm>
        )}

        <button onClick={() => signOut()}>Sign out</button>
      </FormWrapper>

      {/* <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Your information is only used to display your name and reply by email.
          </p>
        )}
      </div> */}

      <div className="mt-4 space-y-8">
        {/* <Suspense fallback={null}>
          {entries?.map((entry: any) => (
            <GuestbookEntry key={entry.id} entry={entry} />
          ))}
        </Suspense> */}
      </div>
    </>
  )
}
