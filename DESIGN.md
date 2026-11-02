---
name: English Quest
description: Georgian-first English word drill, built as a split-flap departure board.
colors:
  ground: "#25262a"
  panel: "#111113"
  raise: "#1d1e21"
  rule: "#323439"
  edge: "#6a6c73"
  field: "#0b0b0c"
  ink: "#f2f2ef"
  mute: "#a3a4a8"
  hi: "#f2f2ef"
  on-hi: "#111113"
  red: "#d62828"
  on-red: "#ffffff"
  red-ink: "#ff6b5e"
  flap: "#1a1a1d"
  flap-ink: "#f4f4f1"
  flap-ghost: "#8c8d91"
typography:
  flap:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "min(36px, 100cqi / var(--n) * 1.1)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "normal"
    fontVariation: "'wdth' 62.5"
  display:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "clamp(30px, 8vw, 46px)"
    fontWeight: 800
    lineHeight: 1.15
    fontVariation: "'wdth' 75"
  headline:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.15
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.3
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 85"
  numeral:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 62.5"
  label:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 75"
rounded:
  none: "0"
  control: "2px"
  flap: "3px"
spacing:
  hair: "4px"
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  flap-cell:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.flap-ink}"
    typography: "{typography.flap}"
    rounded: "{rounded.flap}"
  flap-cell-pending:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.flap-ghost}"
  flap-cell-wrong:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
  flap-cell-active:
    backgroundColor: "{colors.flap-ink}"
    textColor: "{colors.flap}"
  stat-chip:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.flap-ink}"
    rounded: "{rounded.flap}"
    height: "34px"
    padding: "0 9px"
  count-cell:
    backgroundColor: "{colors.flap}"
    textColor: "{colors.flap-ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.flap}"
    height: "36px"
    width: "44px"
  button:
    backgroundColor: "{colors.raise}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  button-small:
    padding: "5px 11px"
    height: "36px"
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#b62222"
  button-continue:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.control}"
    height: "56px"
    width: "100%"
  button-inverted:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.on-hi}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 12px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  tab:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.mute}"
    height: "48px"
  tab-active:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.on-hi}"
---

# Design System: English Quest

## Overview

**Creative North Star: "The Departure Board"**

Every word is a row of matte black flaps on a graphite concourse wall. Letters cascade into their cells; correct letters settle white, wrong ones flip red, letters still to type sit dimmed, and the cell or row you are on is inverted to a white flap. Lessons are listed as departures: a flap-cell icon, a name, a count in a flap, separated by 1px steel rules. The board is the drill, so the system is built from very few parts used everywhere: flap cells, square panels, hairline rules, one condensed family.

Density is moderate and phone-first: a single centred column (760px max) that keeps its shape on desktop, with the tab bar moving from a fixed bottom bar on phones to a top strip above 640px. Colour is red, black and white across all eight styles; the styles are re-tintings of the same board, never different layouts. Emojis remain the icon set, but every one is pushed through a red/black/white tone map so it reads as board paint, not a sticker.

The board rejects the bright gamified lesson path: no rounded cards, no mascots, no confetti, no offset shadows. Feedback is the flap itself turning.

**Key Characteristics:**
- Split-flap cells (3px corners, a dark 1px split across the middle, top half 7% lighter) carry letters, numbers, stats, icons, timers and the flashcard.
- Square panels (0 radius, 1px rule border) on a flat graphite ground.
- Red is a signal: wrong, cancelled, and the one primary action.
- White inversion marks "you are here": active tab, active lesson row, current letter, correct option.
- One variable family, Noto Sans Georgian; the width axis, not a second face, separates flaps, headings, controls and reading text.
- 30 ms per-cell cascade on change; nothing moves under reduced motion.

## Colors

A graphite-and-black board with white letter paint and a single red signal; the values below are the default style (`paper`, labelled 🚉 დაფა), and the other seven styles override the same tokens.

### Primary
- **Signal Red** (`red`): wrong letters, wrong answers, invalid inputs (22% tint into the field), the full-width continue button and other primary buttons, text selection, caret, checkbox and range accents. Hover darkens it 15% toward black.
- **Red Ink** (`red-ink`): red used as text on dark grounds, where Signal Red would be too dim: the `ENGLISH QUEST` line of the logo lockup and `.bad` text. Light styles darken it (#c11f1f light, #b01a33 rose).

### Neutral
- **Graphite Ground** (`ground`): the page wall behind everything; also written to `theme-color` at runtime so the installed app's title bar matches.
- **Panel Black** (`panel`): boards, the top bar, the tab bar, public-page `main`.
- **Raised Steel** (`raise`): default button fill and row hover.
- **Steel Rule** (`rule`): 1px row dividers, panel borders, tab separators, the empty track of progress bars.
- **Steel Edge** (`edge`): stronger 1px lines (table-head underline, button and input borders, toast border) and the unlit segments of the chart.
- **Field Black** (`field`): input and code-block fill, darker than the panel so wells read as recessed.
- **Letter White** (`ink`): body text. **Inversion White** (`hi`) with **On-Inversion** (`on-hi`) is the same white used as a fill for active states; keep the two roles separate even where values match.
- **Mute** (`mute`): secondary text, labels, inactive tabs, metadata, done lessons.
- **Flap Black / Flap Paint / Ghost Paint** (`flap`, `flap-ink`, `flap-ghost`): the cell fill, settled letters, and letters still to be typed.

### Styles
Eight styles, stored in `data-theme`: `paper` (default board), `auto` (no attribute; dark board, or the light board under `prefers-color-scheme: light`), `light`, `dark`, `terminal` (phosphor green ink, red kept as #c8321f), `ocean`, `forest`, `rose` (light ground, wine flaps, red #c41f3a). Each style only reassigns the tokens above plus `--emo-edge` / `--emo-edge-a`; components never branch on the theme. The stored id `paper` must stay for saved data.

### Named Rules
**The Red Means Wrong Rule.** Red marks a mistake, a cancellation, or the single primary action on a view. It never decorates.

**The Inversion Is Here Rule.** A white flap on black (`hi` / `on-hi`) means "current": the active tab, the paused lesson row, the cursor letter, the correct quiz option. Do not use inversion for emphasis.

**The Tinted Emoji Rule.** Emojis are the icons, and every one is wrapped in `.emo` (by `softenEmoji()`) and filtered through SVG `#rbw`: greyscale, contrast lift, then a black → dark red → red → light red → white tone map, with a hairline edge in `--emo-edge` at `--emo-edge-a` (white at .35 on dark styles, near-black at .45 on light). `EMO_RE` skips ▶ so it renders as plain text, not a tinted emoji. No untinted colour emoji ships.

## Typography

**Display Font:** Noto Sans Georgian, variable, condensed (with system-ui, sans-serif)
**Body Font:** Noto Sans Georgian at normal width
**Label/Mono Font:** Noto Sans Georgian condensed for labels; ui-monospace / Consolas only inside code blocks

**Character:** One self-hosted variable file does everything; the width axis is the hierarchy. Flaps and big numerals run at 62.5% width and weight 800 like painted board letters; headings and labels at 75%; buttons and tabs at 80–85%; reading text at full width.

The font is a single 54 KB file, `fonts/noto-sans-georgian-1.woff2`, built from Noto Sans Georgian (github.com/google/fonts, SIL OFL) with fonttools: `fonttools varLib.instancer NotoSansGeorgian[wdth,wght].ttf wght=400:800 wdth=62.5:100`, then `pyftsubset --unicodes="U+0020-007E,U+00A0,U+00AB,U+00B7,U+00BB,U+00D7,U+10D0-10FF,U+1C90-1CBA,U+1CBD-1CBF,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2190-2193,U+2212" --layout-features='*' --flavor=woff2`. It is declared with `font-weight: 400 800; font-stretch: 62.5% 100%; font-display: swap` and preloaded in the app.

### Hierarchy
- **Flap** (800, 62.5% width, up to 36px on phones and 46px above 640px, sized by container width and letter count, line-height 1, uppercase): letters in board flaps, the score row.
- **Display** (800, 75%, clamp(30px, 8vw, 46px), 1.15): the word under study in cards, write and dictation modes.
- **Headline** (800, 75%, 22px, 20px under 520px, 1.15, balanced wrap): panel headings; public pages use 30px h1 and 22px h2.
- **Title** (800, 80%, 17px): lesson names in the departures list; the logo name.
- **Body** (400, 100%, 16px/1.5 in the app, 17px/1.65 on public pages with 68ch measure): reading text, Georgian translations (20px, 600 on the board).
- **Control** (700, 85%, 16px; 14px small): buttons. Tabs use 700 at 80%, 15px, 11px in the phone bar.
- **Numeral** (800, 62.5%, 20–26px, tabular): counts, level codes, module numbers, stats (22px at 70%).
- **Label** (700, 75%, 12px, 0.1em tracking, uppercase): board caption line, table and column heads. The logo's English line and the footer credit use 11px at 0.18–0.2em.

### Named Rules
**The One Family Rule.** No second display face. A new role gets a new width/weight on the same file, not a new font. Monospace is allowed only for code.

**The Mkhedruli Caps Rule.** Chromium does not map `text-transform: uppercase` to Georgian Mtavruli, so Georgian labels stay Mkhedruli under the label style; only Latin letters capitalise. Rank Georgian labels with width, weight, tracking and colour, never by relying on case.

**The New Name Rule.** `/fonts/` is served `immutable` for a year (vercel.json). A rebuilt font must ship under a new file name (`-2`, `-3`) and every `@font-face` and preload updated.

**The Tabular Rule.** All numbers that change or line up (chips, counts, timers, tables, stats) use tabular figures.

## Layout

A single centred column, `max-width: 760px`, 12px side padding in the app (12px body + 24px main padding on public pages, 16px under 560px). Panels stack with 12px gaps; panel padding is 16px (14px on the board). Rhythm runs on 4 / 6 / 8 / 12 / 16 / 24px: 4px between flap cells and chips, 6px between segmented buttons, 8px in button rows and grids, 12px between panels and list columns, 24px between figure columns.

Flap rows are container-query sized: each cell takes `(100% - gaps) / n` with a 5:7 aspect ratio, capped at 50px (64px above 640px). Lists are grids: departures are `40px icon | name and meta | count` with a 40px `⋯` actions button beside each row; actions expand inline underneath, indented 56px.

Breakpoints: at 640px and below, the four tabs become a fixed bottom bar (60px tall, icon over 11px label, safe-area padded) and toasts lift above it; at 520px and below, the logo name and chip labels hide, two-column grids collapse to one, and test rows stack. Touch targets are at least 44px (buttons), 48px (tabs), 56px (continue and quiz options).

## Elevation & Depth

Flat. Nothing floats on drop shadows; depth comes from tonal steps (ground → panel → flap → field) and from the flap itself, whose top half is mixed 7% toward white and split from the bottom by a 1px band of 55% black. The ground is currently a flat #25262a fill.

### Shadow Vocabulary
- **Focus ring** (`box-shadow: 0 0 0 1px var(--hi)` with border in `hi`): focused and correct inputs.
- **Keyboard focus** (`outline: 2px solid var(--hi); outline-offset: 2px`): every focusable element.
- **Tab separator** (`box-shadow: -1px 0 0 var(--rule)`): public-page tabs only.

### Named Rules
**The Hairline Split Rule.** Every flap surface carries the split: `linear-gradient(color-mix(in srgb, var(--c) 93%, #fff) calc(50% - .5px), rgb(0 0 0 / .55) 0 calc(50% + .5px), var(--c) 0)`. State changes swap `--c`, never the gradient.

**The Steel Rule Rule.** Rows are separated by 1px `rule` lines; headers sit on a 1px `edge` line. No zebra striping, no row cards.

## Shapes

Square by default. Panels, tab bars, the top bar and table rows have no radius. Interactive controls (buttons, inputs, avatar letter, partner tag) round to 2px; flap surfaces round to 3px. Nothing is pill-shaped or circular. Progress bars are 6px (4px thin) flat strips; the stats chart draws segmented LED meters (8px lit, 2px gap) with today's column in `hi`.

## Components

### Buttons
Matte, rectangular and firm.
- **Shape:** near-square (2px), min-height 44px, 8px 16px padding; small 36px, 5px 11px.
- **Default:** `raise` fill, 1px `edge` border, `ink` text. Hover brightens the border to `ink`; active nudges down 1px; disabled is 50% opacity.
- **Primary (red):** `red` fill and border, `on-red` text, hover 15% darker.
- **Continue:** the primary at full width, 56px tall, 19px at 75% width, 0.02em tracking, `▶ გაგრძელება`.
- **Inverted:** `hi` fill, `on-hi` text, for the confirmed / current choice.
- **Ghost:** transparent fill with the default border.
- **Transitions:** background, border and colour at .15s.

### Chips
- **Style:** top-bar stats (streak, XP, level, profile) are flap cells 34px tall, 15px bold 75% tabular, emoji plus number; button chips lighten the flap 18% toward its ink on hover.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** `panel` on `ground`.
- **Shadow Strategy:** none; see Elevation.
- **Border:** 1px `rule`.
- **Internal Padding:** 16px (14px board, 12px public top bar).

### Inputs / Fields
- **Style:** `field` fill, 1px `edge` border, 2px radius, 11px 12px padding, 17px text, red caret, `mute` placeholders.
- **Focus:** border and 1px ring in `hi`, outline removed.
- **Correct / Wrong:** correct gets the `hi` ring; wrong gets a `red` border and the field mixed 22% toward red.

### Navigation
- **Top bar:** `panel` strip with bottom `rule`, logo lockup left (38px mark, red-ink English line over the Georgian name), stat chips right.
- **Tabs:** four equal cells divided by 1px `rule`, 15px bold 80% in `mute`; hover to `ink`; active inverted. Under 640px they dock to the bottom as icon-over-label cells.
- **Public pages:** the same top bar and an auto-fit tab grid with `aria-current` inverted; a table of contents of small flap tiles.

### Flap Row (signature)
Letters in individual 5:7 flap cells. Pending letters are `flap-ghost`; typed correct letters `flap-ink`; wrong letters flip to a `red` cell; the cursor cell inverts while the hidden input has focus; spaces are cells without a face. Wrong spaces show `_`.

Motion: each changed cell replays `flap` (from `rotateX(-80deg)` and 1.8 brightness, .34s, `cubic-bezier(.16, 1, .3, 1)`) delayed `--i × 30ms`. `flaps()` cascades a whole new word; the copy mode's `draw()` re-flips only the cells whose letter or state changed (the first draw cascades all), and a completed word cascades once more. Toasts enter with the same flap. The flashcard is one large flap that turns on `rotateX(-180deg)` in .55s. Under `prefers-reduced-motion: reduce` every animation and transition is off and letters appear at once.

### Departures List (signature)
Rows of `flap icon | lesson name (17px 800 80%) over meta (13px mute) | count flap`, a `⋯` button at the right edge, 1px `rule` between rows, `raise` on hover. The paused lesson row is inverted; fully passed lessons dim to `mute`.

### Test Rows and Score
Test („ჩაბარება“) rows: number, prompt, input, with the correction in bold under the input. The score is a flap row inside rule-bounded space (cells up to 56px).

## Do's and Don'ts

### Do:
- **Do** build new indicators (counts, codes, timers, badges, avatars) as flap cells using the Hairline Split gradient and change state by swapping `--c`.
- **Do** keep every style a token override of the same board; add a style by setting `ground` through `flap-ghost` plus `--emo-edge` / `--emo-edge-a`.
- **Do** use the width axis for hierarchy: 62.5% flaps and numerals, 75% headings and labels, 80–85% controls, 100% reading text.
- **Do** separate rows with 1px `rule` and headings with 1px `edge`.
- **Do** wrap every emoji in `.emo` so it gets the `#rbw` tint.
- **Do** cascade cells at 30 ms and re-flip only changed cells; turn all motion off under reduced motion.
- **Do** keep touch targets at 44px or more and numbers tabular.

### Don't:
- **Don't** use rounded cards, pills or radii above 3px.
- **Don't** add drop or offset shadows; depth is tonal plus the flap split.
- **Don't** use red for decoration, headings or "new" badges; red means wrong, cancelled, or the primary action.
- **Don't** add a second typeface outside code blocks.
- **Don't** rely on `text-transform: uppercase` to emphasise Georgian text.
- **Don't** ship a rebuilt font under the old file name.
- **Don't** use partner or third-party brand colours (CodeQuest #3d5afe hover, the white Google sign-in button) outside those two elements.
