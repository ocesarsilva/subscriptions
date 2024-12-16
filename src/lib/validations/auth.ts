import * as z from "zod"

export const loginSchema = z.object({
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

export const registerSchema = loginSchema.extend({
  fullName: z
    .string()
    .min(4, { message: "O nome é obrigatório" })
    .refine((value) => value.trim().includes(" "), {
      message: "Por favor, insira seu nome completo",
    }),
})

export const checkEmailSchema = z.object({
  email: loginSchema.shape.email,
})

export const resetPasswordSchema = z
  .object({
    password: loginSchema.shape.password,
    confirmPassword: loginSchema.shape.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
