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

export const signUpSchema = signInSchema.extend({
  firstName: z
    .string()
    .min(3, {
      message: "O nome deve ter pelo menos 3 caracteres",
    })
    .max(100, {
      message: "O nome deve ter no máximo 20 caracteres",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "A sobrenome deve ter pelo menos 3 caracteres",
    })
    .max(100, {
      message: "A sobrenome deve ter no máximo 20 caracteres",
    }),
})
