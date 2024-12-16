"use server"

import { nanoid } from "nanoid"
import { unstable_noStore as noStore, revalidateTag } from "next/cache"

import { db } from "@/db"
import { organizations } from "@/db/schema"
import { slugify } from "@/lib/utils"
import type { createOrganizationSchema } from "@/lib/validations/organization"
import type { z } from "zod"

export async function createOrganization(
  input: z.infer<typeof createOrganizationSchema> & { userId: string }
) {
  noStore()
  try {
    const newOrg = await db
      .insert(organizations)
      .values({
        id: nanoid(),
        name: input.name,
        description: input.description,
        userId: input.userId,
        slug: slugify(input.slug!),
      })
      .returning({
        id: organizations.id,
        slug: organizations.slug,
      })
      .then((res) => res[0])

    revalidateTag(`organizations-${input.userId}`)

    return {
      data: newOrg,
      error: null,
    }
  } catch (_) {
    return {
      data: null,
      error: "Erro function: createOrganization",
    }
  }
}
