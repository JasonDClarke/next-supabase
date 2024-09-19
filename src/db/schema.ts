import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todoTable = pgTable('todolist', {
  id: serial('id').primaryKey(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  description: text('description').notNull(),
});


export type InsertTodo = typeof todoTable.$inferInsert;
export type SelectTodo = typeof todoTable.$inferSelect;