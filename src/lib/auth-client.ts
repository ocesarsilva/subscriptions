import { organizationClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { toast } from "sonner"

export const authClient = createAuthClient({
  plugins: [organizationClient()],
  fetchOptions: {
    onError: ctx => {
      toast.error(ctx.error.message)
    },
  },
})
