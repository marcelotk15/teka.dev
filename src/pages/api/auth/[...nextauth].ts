import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const { NEXT_AUTH_SECRET, OAUTH_CLIENT_KEY, OAUTH_CLIENT_SECRET } = process.env

export default NextAuth({
  secret: NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: OAUTH_CLIENT_KEY as string,
      clientSecret: OAUTH_CLIENT_SECRET as string,
    }),
  ],
})
