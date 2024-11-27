import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { SignUpForm } from "../_components/signup-form"

export default function Page() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Inscrever-se</CardTitle>
        <CardDescription>
          Escolha seu método de inscrição preferido
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
  )
}
