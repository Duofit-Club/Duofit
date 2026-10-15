# DuoFit – Uniform theme changes

## Single source of truth: `src/styles.css`
- **Fonts:** every heading = Cormorant Garamond 600; all other text = Source Sans 3. (Per-page `font-bold / extrabold / italic / uppercase / tracking-*` on headings removed.)
- **Heading scale (same on every page):** h1 36→64px, h2 30→44px, h3 22→28px, h4 18px. Colour = theme terracotta (`--accent`).
- **Compact heading** (`h-compact`): used for form steps, cards, policy sub-sections.
- **Eyebrow labels:** one `eyebrow` style (12px, uppercase, 0.22em) replaces 10/11/12/14px variants.
- **Intro paragraph:** one `lead` style under every page title.
- **Section spacing:** `section-hero`, `section-y`, `section-cta` replace ~20 different padding combinations; adjacent sections no longer double their gaps.
- **Text colour:** muted text darkened from #9D9D9D (hard to read) to #5F5F5F; `text-foreground/75|80` unified to the same muted colour.
- **Off-theme colours removed** from privacy page (amber) and form previews (green/gray/black gradients) – now use theme tokens.

## Intentionally left unchanged
- WhatsApp green (brand colour), red validation-error text.
- Homepage pillar diagram colours (green/orange/purple/blue) and health-check chart colours (data visualisation).
