# Fix blank page on Lovable (paste into Lovable chat)

The live app crashes with `supabaseUrl is required` because the Supabase client is created with `undefined` URL/key.

## Do this exactly

1. Open `src/lib/supabase.ts` and replace the entire file with hardcoded public client values (anon key is browser-safe):

```ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = "https://wcrhpqnplrutoooowmjt.supabase.co";
const anonKey = "sb_publishable_PeX-jxejW12XIEHMbFIsrQ_q6_3ksJ4";

export const isSupabaseConfigured = true;
export const supabase: SupabaseClient = createClient(url, anonKey);
```

2. If any other file calls `createClient(...)`, change it to import `{ supabase }` from `@/lib/supabase` or `./lib/supabase` — never call `createClient(import.meta.env...)` with empty env.

3. Sync from GitHub repo `devpardeepkumar/ShelfScan` (main) if connected, then **Publish** again.

4. Hard refresh https://little-shelf-helper.lovable.app/ — the UI must load (no blank page), then **Scrape now** should work against the existing Supabase project.
