import { Hono } from 'hono'
import db from './db'
import { petTable } from './schema'
import { eq } from 'drizzle-orm'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/pets", async (c) => {
  const pets = await db.select().from(petTable);

  return c.json(pets);
})
app.get("pets/:id", async (c) => {
  const { id } = c.req.param();
  const parsedID = Number.parseInt(id);
  if (Number.isNaN(parsedID) || !Number.isFinite(parsedID)) {
    console.log("failed to parse id:", id);

    return c.json({
      status: 404,
      message: "Not Found"
    }, 404)
  }

  console.log(`${parsedID}`);
  const pet = await db.select().from(petTable).where(eq(petTable.id, parsedID)).limit(1);

  if (!pet || !pet[0]) {
    console.log(pet)
    return c.json({
      status: 404,
      message: "Not Found"
    }, 404)
  }

  return c.json(pet)
})

export default app
