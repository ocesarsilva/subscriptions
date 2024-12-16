import * as z from "zod"
import { auth } from "../auth"

export const authSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido",
  }),
  password: z
    .string()
    .min(8, {
      message: "A senha deve ter no mínimo 8 caracteres",
    })
    .max(100, {
      message: "A senha deve ter no máximo 100 caracteres",
    }),
})

export const signUpSchema = authSchema.extend({
  firstName: z.string().min(4, { message: "O nome é obrigatório" }),
  lastName: z.string().min(4, { message: "O sobrenome é obrigatório" }),
})
