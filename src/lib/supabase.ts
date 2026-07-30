import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Hardcoded public client config for ShelfScan.
 * The anon/publishable key is safe in the browser (RLS enforced).
 * Env vars can override when present; empty Lovable placeholders must not win.
 */
const FALLBACK_URL = "https://wcrhpqnplrutoooowmjt.supabase.co";
const FALLBACK_ANON_KEY =
  "sb_publishable_PeX-jxejW12XIEHMbFIsrQ_q6_3ksJ4";

function resolveConfig(): { url: string; anonKey: string } {
  const fromEnvUrl = [
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
  ]
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .find((v) => v.startsWith("http"));

  const fromEnvKey = [
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  ]
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .find((v) => v.length > 20);

  return {
    url: fromEnvUrl || FALLBACK_URL,
    anonKey: fromEnvKey || FALLBACK_ANON_KEY,
  };
}

const { url, anonKey } = resolveConfig();

export const isSupabaseConfigured = true;

export const supabase: SupabaseClient = createClient(url, anonKey);
