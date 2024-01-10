import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from 'app/db';
import { authConfig } from 'app/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
        let passwordsMatch = await compare(password, user[0].password!);
        if (passwordsMatch) return user[0] as any;
      },
    }),
  ],
});


// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         const authResponse = await fetch("/users/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         })

//         if (!authResponse.ok) {
//           return null
//         }

//         const user = await authResponse.json()

//         return user
//       },
//     }),
//   ],
// })
