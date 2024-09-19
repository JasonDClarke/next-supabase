import { eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectTodo, todoTable} from '../schema';

export async function getUserById(id: SelectTodo['id']) {
  const entry = await db.select().from(todoTable).where(eq(todoTable.id, id));
  return entry
}