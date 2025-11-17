import { integer, pgTable, text } from "drizzle-orm/pg-core"

export const petTable = pgTable("pets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  gender: text().$type<"male" | "female" | null>(),
  breed: text(),
  location: text(),
  summery: text(),
  description: text(),
  image: text()
});
