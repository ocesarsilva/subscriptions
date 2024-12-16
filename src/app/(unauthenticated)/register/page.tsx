import { env } from "@/env.js"
import type { Metadata } from "next"

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
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Cadastrar-se</CardTitle>
          <CardDescription>
            Faça cadastro com sua conta Google ou GitHub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="grid gap-6">
              <OAuthSignIn />
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
              <SignUpForm />
              <div className="text-center text-sm">
                Já possui uma conta?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Entrar
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        Ao clicar em continuar, você concorda com nossos{" "}
        <a href="/#">Termos de Serviço</a> e{" "}
        <a href="/#">Política de Privacidade</a>.
      </div>
    </div>
  )
}
