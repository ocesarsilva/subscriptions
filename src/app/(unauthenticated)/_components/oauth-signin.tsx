"use client"

import * as React from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const oauthProviders = [
  { name: "Google", provider: "google", icon: "google" },
  { name: "Discord", provider: "github", icon: "gitHub" },
] satisfies {
  name: string
  icon: keyof typeof Icons
  provider: string
}[]

export function OAuthSignIn() {
  const router = useRouter()

  const [loading, setLoading] = React.useState<string | null>(null)

  async function oauthSignIn(provider: string) {
    try {
      setLoading(provider)
      const { data, error } = await authClient.signIn.social({
        provider: "github",
      })

      if (error) {
        toast.error(error.code)
      }

      if (data) {
        router.push("/dashboard")
      }
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]

        return (
          <Button
            key={provider.provider}
            variant="outline"
            className="w-full bg-background"
            onClick={() => void oauthSignIn(provider.provider)}
            disabled={true}
          >
            {loading === provider.provider ? (
              <Loader2
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 size-4" aria-hidden="true" />
            )}
            {provider.name}
            <span className="sr-only">{provider.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
