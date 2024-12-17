import { z } from "zod"
import { unknownError } from "./constants"

export function getErrorMessage(err: unknown) {
  if (err instanceof z.ZodError) {
    return err.errors[0]?.message ?? unknownError
  }

  if (err instanceof Error) {
    return err.message
  }

  return unknownError
}
