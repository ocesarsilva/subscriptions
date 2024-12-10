import { env } from "@/env.js"
import type { Metadata } from "next"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// import { OAuthSignIn } from "@/app/(auth)/_components/oauth-signin"
import { SignInForm } from "@/app/(auth)/_components/signin-form"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Entrar",
  description: "Faça login na sua conta",
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Escolha seu método preferido de login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Não tem uma conta?
            </span>
            <Link
              aria-label="Cadastrar"
              href="/register"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Cadastre-se
            </Link>
          </div>
          <Link
            aria-label="Redefinir senha"
            href="/signin/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Redefinir senha
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
