import { drizzleAdapter } from "better-auth/adapters/drizzle"

import { organization } from "better-auth/plugins"

import { db } from "@/db"
import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(url, user) {
      console.log(
        "Sending reset password email to",
        // @ts-ignore
        user.email,
        "with url",
        url
      )
    },
  },
  plugins: [
    organization({
      async sendInvitationEmail(data) {
        console.log("Sending invitation email to", data.email)
      },
      allowUserToCreateOrganization: true,
    }),
  ],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60,
    },
  },
})
