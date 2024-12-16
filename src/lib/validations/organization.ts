import { z } from "zod"
import { slugify } from "../utils"

export const createOrganizationSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome deve conter pelo menos 3 caracteres")
      .max(50),
    description: z.string().optional(),
    slug: z
      .string()
      .min(3, "O slug deve conter pelo menos 3 caracteres")
      .optional(),
  })
  .refine((data) => {
    if (!data.slug) {
      data.slug = slugify(data.name)
    }
    return true
  })
