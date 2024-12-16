import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { OAuthSignIn } from "@/app/(unauthenticated)/_components/oauth-signin"
import { LoginForm } from "@/app/(unauthenticated)/_components/login-form"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bem-vindo de volta</CardTitle>
          <CardDescription>
            Faça login com sua conta Google ou GitHub
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
              <LoginForm />
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <a href="/register" className="underline underline-offset-4">
                  Cadastre-se
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
