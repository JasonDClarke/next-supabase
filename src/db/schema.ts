import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todoTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  description: text('name').notNull(),
});


export type InsertTodo = typeof todoTable.$inferInsert;
export type SelectTodo = typeof todoTable.$inferSelect;