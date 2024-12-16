"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { createOrganization } from "@/lib/actions/organization"
import { createOrganizationSchema } from "@/lib/validations/organization"
import { Loader2 } from "lucide-react"
import type { z } from "zod"
import { CreateOrganizationForm } from "./create-organization-form"
import { StepHeader } from "./step-header"

interface CreateStoreProps {
  userId: string
}

export function CreateOrganization({ userId }: CreateStoreProps) {
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
    <motion.div
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-4 rounded-xl bg-background/60 p-8"
      >
        <StepHeader title="Vamos começar criando sua comunidade" />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, type: "spring" },
            },
          }}
        >
          <CreateOrganizationForm form={form} onSubmit={onSubmit}>
            <Button type="submit" disabled={isCreatePending}>
              {isCreatePending && (
                <Loader2 className="mr-2 size-4 animate-spin" />
              )}
              Continuar
            </Button>
          </CreateOrganizationForm>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
