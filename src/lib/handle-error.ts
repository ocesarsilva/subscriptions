import { toast } from "sonner"
import * as z from "zod"

import { unknownError } from "@/lib/constants"

export function getErrorMessage(err: unknown) {
  if (err instanceof z.ZodError) {
    return err.errors[0]?.message ?? unknownError
  }

  if (err instanceof Error) {
    return err.message
  }

  return unknownError
}

export function getAuthError(error: unknown) {
  switch (error) {
    case "INVALID_EMAIL_OR_PASSWORD":
      return "As credenciais fornecidas são inválidas."

    default:
      return unknownError
  }
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err)
  console.log({ errorMessage })

  return toast.error(errorMessage)
}
