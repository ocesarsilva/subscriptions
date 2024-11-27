import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CreateOrganizationForm } from "./_components/create-organization-form"

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Bem vindo</CardTitle>
          <CardDescription>
            Vamos começar criando sua comunidade
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <CreateOrganizationForm />
        </CardContent>
      </Card>
    </div>
  )
}
