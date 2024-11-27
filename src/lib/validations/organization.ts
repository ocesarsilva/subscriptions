import * as z from "zod"

import { slugify } from "@/lib/utils"

export const createOrganizationSchema = z
  .object({
    name: z.string().min(3).max(50),
    slug: z.string(),
  })
  .refine(data => {
    if (!data.slug) {
      data.slug = slugify(data.name)
    }
    return true
  })
