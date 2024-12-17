"use client"

import * as React from "react"

import { useRouter, useSearchParams } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { createOrganization } from "@/lib/actions/organization"
import { createOrganizationSchema } from "@/lib/validations/organization"

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
import { Textarea } from "@/components/ui/textarea"

interface CreateOrganizationFormProps {
  userId: string
}

export function CreateOrganizationForm({
  userId,
  ...props
}: CreateOrganizationFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isCreatePending, startCreateTransaction] = React.useTransition()

  const form = useForm<z.infer<typeof createOrganizationSchema>>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
      description: "",
      slug: "",
    },
  })

  function onSubmit(input: z.infer<typeof createOrganizationSchema>) {
    startCreateTransaction(async () => {
      const { data, error } = await createOrganization({ ...input, userId })

      if (error) {
        toast.error(error)
        return
      }

      if (data) {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("step", "connect")
        newSearchParams.set("org", data.id)
        router.push("/dashboard")
      }
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        autoComplete="off"
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome da comunidade aqui."
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <div className="flex rounded-lg shadow-sm shadow-black/5">
                  <span className="-z-10 inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm">
                    subscriptions/
                  </span>
                  <Input
                    className="-ms-px rounded-s-none shadow-none"
                    placeholder="acme-co"
                    type="text"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite a descrição da comunidade aqui."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isCreatePending}>
          {isCreatePending && <Loader2 className="mr-2 size-4 animate-spin" />}
          Continuar
        </Button>
      </form>
    </Form>
  )
}
