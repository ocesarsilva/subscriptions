"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { PasswordInput } from "@/components/password-input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { authClient } from "@/lib/auth-client"
import { resetPasswordSchema } from "@/lib/validations/auth"
import { Loader2 } from "lucide-react"

type Inputs = z.infer<typeof resetPasswordSchema>

export function ResetPasswordForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(inputs: Inputs) {
    setLoading(true)

    try {
      const { data, error } = await authClient.resetPassword({
        newPassword: inputs.password,
      })
      if (error) {
        toast.error(error.code)
      }

      if (data) {
        toast.success("Senha redefinida com sucesso.")
        router.push("/login")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-2 flex flex-col-reverse gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => router.push("/login")}
          >
            Voltar
          </Button>
          <Button className="w-full" disabled={loading}>
            {loading && (
              <Loader2
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Redefinir senha
            <span className="sr-only">Redefinir senha</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
