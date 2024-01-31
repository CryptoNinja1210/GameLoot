import { createSupabaseClient } from "../createSupabase";
import type { CategoryEnum, GameEntity, InsertGameProps } from "../interfaces/custom.types";

export interface QueryFilter {
  category: CategoryEnum;
  gameName?: string;
}

export async function getAllGames() {
  const supabase = createSupabaseClient();
  const { data, error, status } = await supabase
    .from("game")
    .select()
  if (status === 200) {
    return data;
  }
  else {
    console.error(error);
  }
  return [] as GameEntity[];
}

export async function getGames({ category, gameName }: QueryFilter): Promise<GameEntity[]> {
  const supabase = createSupabaseClient();
  const { data, error, status } = await supabase
    .from("game")
    .select()
    .eq("category", category)
    .ilike("gameName", `%${gameName || ""}%`);
  if (status === 200) {
    return data;
  }
  else {
    console.error(error);
  }
  return [] as GameEntity[];
}

export async function getOneGame(gameId: string): Promise<GameEntity> {
  const supabase = createSupabaseClient();
  const { data, error, status } = await supabase
    .from("game")
    .select()
    .eq("id", gameId);
  if (status === 200) {
    return data.at(0);
  }
  else {
    console.error(error);
  }
}

export async function saveGames(_props: InsertGameProps) {
  const supabase = createSupabaseClient();
  const data0: InsertGameProps = {
    ..._props,
    developer: 'developer',
    secret_key: 'secret key'
    // releaseDate: 'date',
  }

  const { data, error } = await supabase
    .from('game')
    .insert(data0)
    .select();
  if (error) {
    console.error('Error saving data:', error);
  } else {
    console.log('Data saved successfully:', data);
  }

  return {data, error}
}

export async function updateGame(id: string, _props: any) {
  const supabase = createSupabaseClient();
  const { data, error, status } = await supabase
    .from('game')
    .update(_props)
    .eq('id', id)
    .select()

  if (status === 200) {
    // return data.at(0);
    console.log('update',data)
  }
  else {
    console.error('update', error);
  }
  return {data, error}
}