import * as z from "zod"

export const signInSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido",
  }),
  password: z
    .string()
    .min(8, {
      message: "A senha deve ter pelo menos 8 caracteres",
    })
    .max(100, {
      message: "A senha deve ter no máximo 100 caracteres",
    }),
})

export const signUpSchema = z.object({
  firstName: z.string().min(4, "O nome deve ter pelo menos 4 caracteres"),
  lastName: z.string().min(4, "O sobrenome deve ter pelo menos 4 caracteres"),
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido",
  }),
  password: z
    .string()
    .min(8, {
      message: "A senha deve ter pelo menos 8 caracteres",
    })
    .max(100, {
      message: "A senha deve ter no máximo 100 caracteres",
    }),
})
