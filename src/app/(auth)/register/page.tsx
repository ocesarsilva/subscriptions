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
import { SignUpForm } from "../_components/signup-form"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Cadastrar",
  description: "Crie uma conta",
}

export default function SignUpPage() {
  return (
    <div className="w-full max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Cadastrar</CardTitle>
          <CardDescription>
            Escolha seu método preferido para criar a conta
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
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
