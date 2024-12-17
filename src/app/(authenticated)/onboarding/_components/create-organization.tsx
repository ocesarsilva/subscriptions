"use client"

import { motion } from "framer-motion"

import { CreateOrganizationForm } from "./create-organization-form"
import { StepHeader } from "./step-header"

interface CreateStoreProps {
  userId: string
}

export function CreateOrganization({ userId }: CreateStoreProps) {
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
        <StepHeader
          title="Vamos começar criando sua comunidade"
          description="Você pode atualizar o nome e a descrição da sua comunidade mais tarde"
        />
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
          <CreateOrganizationForm userId={userId} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
