import { createSupabaseClient } from "../createSupabase";

export async function saveAchis(achis: { name: string; desc: string; url: string; }[], id: string) {
  const supabase = createSupabaseClient();
  const data0 = achis.reduce((tot, val) => {
    const newAchievement = {
      achievementName: val.name,
      description: val.desc,
      iconUrl: val.url,
      gameId: id
    };
    return [...tot, newAchievement];
  }, []);

  console.log('achi', data0)
  const { data, error } = await supabase
    .from('achievement')
    .insert(data0)
    .select();
  if (error) {
    console.error('Error saving data:', error);
  } else {
    console.log('Data saved successfully:', data);
  }
  return {data, error}
}

export function updateAchievements(newData: {id: string; iconUrl: string}[]) {
  const supabase = createSupabaseClient();
  newData.map(async (item) => {
    const { data, error, status } = await supabase
      .from('achievement')
      .update(item)
      .eq('id', item.id)
      .select()
    console.log(data[0].id, status)
  })
  return true
}