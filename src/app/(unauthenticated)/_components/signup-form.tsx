"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signUpSchema } from "@/lib/validations/auth"

import { PasswordInput } from "@/components/password-input"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"

type Inputs = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  })

  async function onSubmit(inputs: Inputs) {
    setLoading(true)

    try {
      const { data, error } = await authClient.signUp.email({
        name: `${inputs.firstName} ${inputs.lastName}`,
        email: inputs.email,
        password: inputs.password,
      })

      if (error) {
        toast.error(error.code)
      }

      if (data) {
        router.push("/dashboard")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Rodney" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input placeholder="Mullen" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" disabled={loading}>
          {loading && (
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
          )}
          Continuar
          <span className="sr-only">
            Continuar para a página de verificação de email
          </span>
        </Button>
      </form>
    </Form>
  )
}
