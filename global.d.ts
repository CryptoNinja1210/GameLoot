import type { Database as DB } from "./lib/interfaces/database.types";

declare global {
  type Database = DB
}