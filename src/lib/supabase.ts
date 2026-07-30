import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Public client config — anon/publishable key is safe in the browser (RLS enforced). */
const DEFAULT_SUPABASE_URL = "https://wcrhpqnplrutoooowmjt.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY =
  "sb_publishable_PeX-jxejW12XIEHMbFIsrQ_q6_3ksJ4";

const url =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() ||
  DEFAULT_SUPABASE_URL;
const anonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() ||
  DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null;
