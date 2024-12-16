import { env } from "@/env.js"
import type { Metadata } from "next"
import Link from "next/link"

import { OAuthSignIn } from "@/app/(unauthenticated)/_components/oauth-signin"
import { SignInForm } from "@/app/(unauthenticated)/_components/signin-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Entrar",
  description: "Acesse sua conta",
}

export default function SignInPage() {
  return (
    <div className="max-w-md w-full">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Escolha seu método preferido para entrar
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Não tem uma conta?
            </span>
            <Link
              aria-label="Cadastrar-se"
              href="/register"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Cadastre-se
            </Link>
          </div>
          <Link
            aria-label="Redefinir senha"
            href="/login/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Redefinir senha
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
