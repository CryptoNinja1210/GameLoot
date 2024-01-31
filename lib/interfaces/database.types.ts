export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      achievement: {
        Row: {
          achievementName: string
          created_at: string
          description: string | null
          gameId: string | null
          iconUrl: string | null
          id: string
          unlockCondition: string | null
        }
        Insert: {
          achievementName: string
          created_at?: string
          description?: string | null
          gameId?: string | null
          iconUrl?: string | null
          id?: string
          unlockCondition?: string | null
        }
        Update: {
          achievementName?: string
          created_at?: string
          description?: string | null
          gameId?: string | null
          iconUrl?: string | null
          id?: string
          unlockCondition?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "achievement_gameId_fkey"
            columns: ["gameId"]
            isOneToOne: false
            referencedRelation: "game"
            referencedColumns: ["id"]
          }
        ]
      }
      game: {
        Row: {
          age_content_rating: string | null
          category: Database["public"]["Enums"]["category"]
          contents_enabled: boolean | null
          cover_art: string | null
          created_at: string
          description: string | null
          developer: string | null
          external_site: string | null
          gameName: string
          id: string
          mobile_support: boolean | null
          project_files: string | null
          releaseDate: string | null
          secret_key: string | null
          summary: string | null
          tags: string | null
          thumbnailUrl: string | null
        }
        Insert: {
          age_content_rating?: string | null
          category?: Database["public"]["Enums"]["category"] | string
          contents_enabled?: boolean | null
          cover_art?: string | null
          created_at?: string
          description?: string | null
          developer?: string | null
          external_site?: string | null
          gameName: string
          id?: string
          mobile_support?: boolean | null
          project_files?: string | null
          releaseDate?: string | null
          secret_key?: string | null
          summary?: string | null
          tags?: string | null
          thumbnailUrl?: string | null
        }
        Update: {
          age_content_rating?: string | null
          category?: Database["public"]["Enums"]["category"]
          contents_enabled?: boolean | null
          cover_art?: string | null
          created_at?: string
          description?: string | null
          developer?: string | null
          external_site?: string | null
          gameName?: string
          id?: string
          mobile_support?: boolean | null
          project_files?: string | null
          releaseDate?: string | null
          secret_key?: string | null
          summary?: string | null
          tags?: string | null
          thumbnailUrl?: string | null
        }
        Relationships: []
      }
      leaderboard: {
        Row: {
          created_at: string
          gameId: string | null
          id: string
          leaderboardName: string
        }
        Insert: {
          created_at?: string
          gameId?: string | null
          id?: string
          leaderboardName: string
        }
        Update: {
          created_at?: string
          gameId?: string | null
          id?: string
          leaderboardName?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_gameId_fkey"
            columns: ["gameId"]
            isOneToOne: false
            referencedRelation: "game"
            referencedColumns: ["id"]
          }
        ]
      }
      user_achievement: {
        Row: {
          achievement_id: string | null
          created_at: string
          id: string
          unlocked_at: string | null
          user_id: string | null
        }
        Insert: {
          achievement_id?: string | null
          created_at?: string
          id?: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Update: {
          achievement_id?: string | null
          created_at?: string
          id?: string
          unlocked_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_achievement_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievement"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievement_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      category: "Action" | "Adventure" | "Beauty" | "Bike" | "Card"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
