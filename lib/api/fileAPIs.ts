import { createSupabaseClient } from "../createSupabase";

export async function upload(file: any, name: string) {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase.storage
    .from('assets')
    .upload(`${name}/${file.name}`, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (error) {
    console.error('Error uploading image:', error);
  } else {
    console.log('Image uploaded successfully:', data);
    return '/storage/v1/object/public/assets/' + data.path
  }
}
