import { pgTable, text } from "drizzle-orm/pg-core"
import { users } from "./auth"
import { lifecycleDates } from "./utils"

export const organizations = pgTable("organizations", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  description: text("description"),

  ...lifecycleDates,
})

export type Organization = typeof organizations.$inferSelect
export type NewOrganization = typeof organizations.$inferInsert
