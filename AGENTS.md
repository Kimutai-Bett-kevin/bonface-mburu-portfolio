<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Content
- All portfolio text lives in src/content/profile.ts; pages read from it so the owner can swap placeholders without touching layout. Bracketed [values] render highlighted as placeholders.

- Keep imported static mockup markup in the portfolio content module; exclude scripts and event attributes so the design can render safely inside the existing router.
- Preserve existing public detail URLs when replacing case-study content to avoid breaking published links.
- The language selector translates only source-provided navigation and CTA labels; mark those labels with their language while keeping English body copy identified correctly.
- Mount interactive React visuals into explicit slots in imported markup with portals; this preserves source content while keeping charts outside executable HTML.
- Share the diploma-scroll illustration across education views; decorative graduation imagery must never imply an unearned qualification.
