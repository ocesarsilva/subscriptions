import { env } from "@/env.js"
import type { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ForgotPasswordForm } from "../_components/forgot-password-form"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Esqueci a Senha",
  description: "Insira seu e-mail para redefinir sua senha",
}

export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Esqueci a senha</CardTitle>
        <CardDescription>
          Insira seu endereço de e-mail e enviaremos um link para redefinição de
          senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  )
}
