import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { SignInForm } from "../_components/signin-form"

export default function Page() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Entrar</CardTitle>
        <CardDescription>Escolha seu método de login preferido</CardDescription>
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
            aria-label="Inscrever-se"
            href="/register"
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            Inscrever-se
          </Link>
        </div>
        <Link
          aria-label="Redefinir senha"
          href="/reset-password"
          className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
        >
          Redefinir senha
        </Link>
      </CardFooter>
    </Card>
  )
}
