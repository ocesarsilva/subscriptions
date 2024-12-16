import { env } from "@/env.js"
import type { Metadata } from "next"

import { ResetPasswordForm } from "@/app/(unauthenticated)/_components/reset-password-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Esqueci a Senha",
  description: "Insira seu e-mail para redefinir sua senha",
}

export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Redefinir senha</CardTitle>
        <CardDescription>
          Digite a nova senha e confirme-a para redefinir sua senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  )
}
