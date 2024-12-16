import { env } from "@/env.js"
import type { Metadata } from "next"
import Link from "next/link"

import { OAuthSignIn } from "@/app/(unauthenticated)/_components/oauth-signin"
import { SignUpForm } from "@/app/(unauthenticated)/_components/signup-form"
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
  title: "Cadastrar-se",
  description: "Crie uma conta",
}

export default function SignUpPage() {
  return (
    <div className="max-w-md w-full">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Cadastrar-se</CardTitle>
          <CardDescription>
            Escolha o seu método preferido de cadastro
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
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            Já possui uma conta?{" "}
            <Link
              aria-label="Entrar"
              href="/login"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Entrar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
