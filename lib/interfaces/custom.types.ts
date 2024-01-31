import type { Database } from "./database.types";

// Game Types
export type GameEntity = Database["public"]["Tables"]["game"]["Row"];
export type InsertGameProps = Database["public"]["Tables"]["game"]["Insert"];

// Achievement Types
export type AchievementEntity = Database["public"]["Tables"]["achievement"]["Insert"];

export type CategoryEnum = Database["public"]["Enums"]["category"];