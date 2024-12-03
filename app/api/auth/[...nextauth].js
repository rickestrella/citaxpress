import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        documento: { label: "Documento de identidad", type: "text", placeholder: "Cédula, RUC, Pasaporte" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await FaRocketchat("/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {"Content-Type": "application/json"}
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)