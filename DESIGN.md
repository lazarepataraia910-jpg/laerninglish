---
name: English Quest
description: Georgian-first English word drill, kept like a student's best study-notes notebook.
colors:
  paper: "#ffffff"
  dot: "#d5dae5"
  card: "#ffffff"
  line: "#e3e6ee"
  field: "#ffffff"
  wash: "color-mix(in srgb, #1c2333 5%, #ffffff)"
  ink: "#1c2333"
  mute: "#5b6476"
  red: "#e0262b"
  on-red: "#ffffff"
  red-ink: "#c81e24"
  green: "#13804f"
  hl: "#ffc6dc"
  hl2: "#fff09a"
  hl3: "#bff0d8"
  hl4: "#cfe3ff"
  hl5: "#e5d8ff"
  mark: "#ff6fa4"
  note: "#fff3a6"
  note-ink: "#3a3110"
  tape: "rgb(255 150 190 / .55)"
  lift: "rgb(28 35 51 / .08)"
typography:
  display:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "clamp(30px, 8vw, 46px)"
    fontWeight: 800
    lineHeight: 1.15
  headline:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  body-public:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  control:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: ".02em"
  cell:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "min(32px, 100cqi / var(--n) * 1.05)"
    fontWeight: 800
    lineHeight: 1
  numeral:
    fontFamily: "Noto Sans Georgian, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    fontFeature: "'tnum'"
rounded:
  cell: "9px"
  control-sm: "10px"
  control: "12px"
  face: "14px"
  bar: "16px"
  card: "18px"
  page: "20px"
  pill: "999px"
  circle: "50%"
spacing:
  hair: "4px"
  xs: "6px"
  sm: "8px"
  md: "12px"
  gutter: "14px"
  card: "18px"
  dot-grid: "22px"
components:
  button:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  button-go:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.bar}"
    height: "58px"
    width: "100%"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.card}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-sm:
    rounded: "{rounded.control-sm}"
    padding: "5px 12px"
    height: "38px"
  choice-active:
    backgroundColor: "{colors.hl}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  chip:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 11px"
    height: "36px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px"
  sticky-note:
    backgroundColor: "{colors.note}"
    textColor: "{colors.note-ink}"
    padding: "16px 14px"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 13px"
  letter-cell:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.cell}"
    rounded: "{rounded.cell}"
  letter-cell-right:
    backgroundColor: "{colors.hl3}"
    textColor: "{colors.green}"
  letter-cell-wrong:
    textColor: "{colors.red-ink}"
  lesson-icon:
    backgroundColor: "{colors.hl}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "46px"
  count:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.pill}"
    height: "32px"
  tab:
    textColor: "{colors.mute}"
    rounded: "{rounded.control}"
    height: "46px"
  tab-active:
    textColor: "{colors.red-ink}"
---

# Design System: English Quest

## Overview

**Creative North Star: "The Best Notebook in Class"**

The app is a student's neatest notebook. The page is white dot-grid paper; everything that holds content is a white sheet with a thin rule and a soft lift; text is written in a blue-black gel pen; colour arrives only the way a good student adds it, with pastel highlighters, one yellow sticky note and a strip of washi tape. The logo red is the teacher's red: it marks the one thing to do next and it marks mistakes. Green pen marks letters written right.

Density is calm and single-column: one 760px column, the same on phone and desktop, with the navigation moving from a top tab strip (desktop) to a bottom tab bar (phone). Headings are heavy and short, each with a highlighter swipe that sweeps in behind it on arrival. Icons are one line-icon set drawn at the same 1.8 stroke everywhere; free-form emojis survive only as "stickers" (avatars, user-typed lesson names), never as interface icons.

Eight styles exist, and all eight are the same notebook in different paper: they swap the page, highlighter and sticky-note colours, never the structure, the type or the component shapes.

**Key Characteristics:**
- White dot-grid ground (22px grid), white cards with a 1px rule and a soft two-layer lift.
- Gel-pen ink for text, logo red for the single main action and for mistakes, green pen for right answers.
- Five pastel highlighters plus one saturated marker, used as swipes, fills and icon circles, never as text colour.
- Sticky note for the next word; washi tape on the day's card.
- Noto Sans Georgian at normal width, 400 to 800; headings 800.
- One line-icon set (24-unit grid, 1.8 stroke, 1.2em) that scales with its text.

## Colors

Paper, pen and highlighter: a near-white neutral field, one ink, one red, one green, and a box of pastel markers.

### Primary
- **Logo Red** (`red`): the logo's red, carried into the interface as the one main action per view (the full-width continue button, red buttons) and as the red pen: wrong-answer borders, wavy underlines, the text caret. Hover darkens it 14% toward black.
- **Red Pen Ink** (`red-ink`): the deeper red used when red is text (wrong letters, wrong choices, the active tab label, the small English line of the logo) so it stays legible on paper.

### Secondary
- **Green Pen** (`green`): right letters, right counts, `.ok` text. Always on a mint highlighter or on paper, never as a fill.

### Tertiary
- **Pink Highlighter** (`hl`): headings' marker swipe, text selection, the active choice pill, the first lesson-icon circle, chart bars.
- **Yellow Highlighter** (`hl2`): the paused lesson row, badge circles, the partner tag.
- **Mint Highlighter** (`hl3`): right answers (letter-cell swipe, right choice), finished-lesson counts.
- **Sky Highlighter** (`hl4`): input focus ring, flashcard ruling, stat icon circles, public-page h2 marks.
- **Lilac Highlighter** (`hl5`): fifth step of the level-code cycle.
- **Marker Pink** (`mark`): the one saturated highlighter: focus outline, link underline, progress strokes and bars, the active-tab dot, today's chart bar.
- **Sticky Note** (`note` / `note-ink`): the yellow note holding the next word and the back of a flashcard, with its own dark-olive ink.
- **Washi Tape** (`tape`): translucent tape strip on the day's card only.

### Neutral
- **Paper** (`paper`) and **Dot** (`dot`): the page ground and its 22px dot grid.
- **Card** (`card`) and **Field** (`field`): sheets and writing fields.
- **Rule** (`line`): every border and divider.
- **Wash** (`wash`): ink at 5% over card, for chips, counts, hover rows, timers, code blocks.
- **Gel-Pen Ink** (`ink`) and **Pencil** (`mute`): body text and secondary text.
- **Lift** (`lift`): the shadow colour.

### Style variants
Stored ids, set as `data-theme` on `<html>` (only `auto` removes it):
- **paper** (default): the values above.
- **auto**: paper by day; follows the system dark mode into the dark notebook.
- **light**: "clean sheet": no dots, sky highlighter, blue marker and tape.
- **dark**: black notebook with pastel gel pens: dark paper and cards, light ink, brighter red/green, deep-toned highlighters, dark-olive sticky note.
- **terminal** (shown as "kraft"; id kept for stored settings): brown kraft paper with cream cards, brown ink, warm highlighters, orange marker, white tape.
- **ocean**, **forest**, **rose**: tinted paper and dots (blue, green, pink) with matching highlighter, marker, sticky note and tape.

### Named Rules
**The Teacher's Red Rule.** Red appears in exactly two roles: the one main action of a view, and the red pen on a mistake. It is never decoration, never a heading colour, never a second button in the same group.

**The Highlighter Not Ink Rule.** Pastels sit behind or around text (swipes, fills, circles, pills); they are never the text colour. Text stays `ink`, `mute`, `green` or `red-ink`.

**The Same Notebook Rule.** A style variant may only change colour tokens. Shapes, type, icons and layout are identical across all eight.

## Typography

**Display Font:** Noto Sans Georgian (self-hosted woff2, with system-ui, sans-serif)
**Body Font:** Noto Sans Georgian
**Label/Mono Font:** ui-monospace, Consolas for code blocks only

**Character:** One family at normal width carries Georgian and Latin together; hierarchy comes from weight (400 body, 600-700 labels and names, 800 headings, words and numbers), not from a second face.

### Hierarchy
- **Display** (800, clamp(30px, 8vw, 46px), 1.15): the English word being studied. On the sticky note it grows to min(44px) phone / min(58px) desktop.
- **Headline** (800, 21px, 19px under 520px, 1.2): section headings with the marker swipe. Public pages: h1 30px, h2 22px.
- **Title** (700, 17px, 1.3): lesson names, logo name, partner title.
- **Body** (400, 16px, 1.55) in the app; (400, 17px, 1.65, max 68ch) on public pages.
- **Control** (700, 16px, 1.2): buttons and tabs (tabs 15px desktop, 11px phone).
- **Label** (700, 13px, .02em, sentence case): captions and table heads in pencil grey.
- **Numeral** (800, tabular): streak/XP chips, counts, stats (22px), timer.

### Named Rules
**The Weight Not Width Rule.** The face stays at normal width; emphasis is weight 700-800. No condensed or stretched settings.

## Layout

A single centred column (max 760px) with a 14px gutter. On desktop the white top bar sits over a tab strip card, then content cards stacked with 14px between them. Under 640px the tab strip becomes a fixed bottom bar with safe-area padding, and the app gains bottom padding so content clears it. Under 520px the logo text and chip labels hide, two-column grids (choices, stats) collapse to one, cards tighten to 16px/14px padding and lesson-row icons shrink to 40px.

Rhythm runs on 4/6/8/12/14/18px; the page dot grid is 22px and cards inside the notebook (`.sheet`) repeat it offset by 11px. Lists are ruled, not boxed: lesson rows, stats, badges and settings are separated by 1px rules with the last rule dropped. Public pages put all content on one white sheet (20px radius) under the same top bar and tab strip.

## Elevation & Depth

Paper on a desk: sheets lift a little off the dotted ground with a tight contact shadow plus a long soft one, both in `lift` (8% ink on paper, 35% black in dark). Nothing else floats except the sticky note, the go button and transient toasts.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 1px 2px var(--lift), 0 8px 24px -12px var(--lift)`): every card.
- **Sticky note** (`box-shadow: 0 6px 14px -8px var(--lift), 0 1px 2px var(--lift)`), with a -0.6deg tilt.
- **Red glow** (`box-shadow: 0 8px 18px -10px var(--red)`): the full-width continue button only.
- **Flashcard** (`box-shadow: 0 10px 24px -14px var(--lift)`).
- **Bottom bar** (`box-shadow: 0 -6px 18px -12px var(--lift)`): phone tab bar.
- **Toast** (`box-shadow: 0 10px 24px -10px rgb(0 0 0 / .4)`).

### Named Rules
**The Soft Lift Rule.** Shadows are soft and tinted by `lift`; no hard offset shadows, no thick borders. Depth beyond a sheet comes from paper objects (note, tape), not stacked shadows.

## Shapes

Soft notebook corners: 9px letter cells, 10-12px controls and fields, 14px flashcard faces and toasts, 16px tab strip, level tiles and go button, 18px cards, 20px public sheet; pills (999px) for chips, counts, timers and tags; circles for icon wells, avatars and choice keys. Borders are 1px for sheets and rules, 1.5px for controls and fields. Hand-made marks are deliberately uneven: highlighter swipes use radii `.35em .6em .45em .25em` with a -14deg skew; the progress stroke uses `4px 7px 5px 3px` with the same skew; the sticky note has one bigger corner (`4px 4px 14px 4px`); the tape is a striped strip rotated -3deg.

## Components

### Buttons
- **Shape:** gently rounded (12px; small 10px), 1.5px rule border, min height 44px (small 38px).
- **Default:** white card fill, ink text, weight 700; hover turns the border ink; active nudges down 1px; disabled at 55% opacity.
- **Red:** the one main action: red fill, white text; hover darkens 14%.
- **Go:** full-width, 58px, 19px text, 16px radius, red glow; its play icon is filled.
- **Ink:** ink fill with card-coloured text for strong secondary actions.
- **Highlighter:** sky fill (`hl4`) for soft secondary actions.

### Chips
- **Style:** 36px pills on `wash` with a rule border, 15px weight 800 tabular numbers and a leading icon: streak icon in red, XP in amber, level in marker pink.
- **State:** button chips get an ink border on hover.

### Choices (mode switcher, segmented settings)
- **Style:** a row of default buttons; the active one becomes a pink highlighter pill (`hl` fill, slightly darker `hl` border, ink text).

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** `card`, optionally with the 22px dot grid (`.sheet`).
- **Shadow Strategy:** sheet lift.
- **Border:** 1px `line`.
- **Internal Padding:** 18px (16px/14px on phones).
- **Taped board:** the day's card gets a 92x22px washi-tape strip across its top edge, rotated -3deg, and holds the caption, the next word on a sticky note, Georgian below (20px/600) and the daily-goal line.

### Inputs / Fields
- **Style:** `field` fill, 1.5px rule border, 12px radius, 17px text, red caret.
- **Focus:** ink border plus a 4px sky (`hl4`) ring.
- **Right / Wrong:** green border on a mint wash; red border on a 9% red wash.
- **Writing area:** textareas are ruled like a notebook (28px lines in `line`).

### Navigation
- **Desktop:** a 4-column tab strip card (16px radius, 4px inset), tabs 46px with icon and 15px/700 label in pencil grey; hover gives ink text on `wash`.
- **Active:** red-ink icon and label plus a 7px marker-pink dot.
- **Phone:** fixed bottom bar, icon above 11px label; the active icon sits in a pill of 60% pink highlighter and the dot moves to its top-right.
- **Public pages:** same strip of links; the current page is a pink highlighter fill with ink text.

### Letter Cells (signature)
Grid-paper cells (4:5, max 50px, 60px on desktop) for typing a word letter by letter. Not-yet-written cells are dashed ghosts in faded pencil; the current cell gets a 2px ink border; a right letter gets a mint highlighter swipe in from the left (`.25s`) and turns green; a wrong letter gets the red pen: red border, faint red wash, red-ink text and a 2px red wavy underline. Typed letters ink in with a 30ms stagger.

### Highlighter Marker (signature)
Headings carry a pastel band over their lower half: in the app a skewed pseudo-element that sweeps in left to right with scaleX (`.6s`, `.1s` delay); on public pages an inline span with `box-decoration-break: clone` so each wrapped line gets its own band (h1 pink, h2 sky).

### Lesson Rows
Ruled list entries: a 46px pastel icon circle cycling pink, sky, mint, yellow; name (17px/700) with a pencil meta line and a skewed marker-pink progress stroke (7px, max 220px, no track); a pill count on `wash` (mint when every word is passed). The paused lesson is washed yellow; a "more" button reveals secondary actions under the row.

### Flashcard
Index card: white with a red top margin line and sky ruling; flips (`.55s`) to a sticky-note back.

### Icons
One line set in an SVG sprite (`#i-*`), 24-unit viewBox, stroke `currentColor` at 1.8, round caps and joins, sized 1.2em so it follows its text: small in buttons, about 26px in lesson circles. Interface emoji are mapped to these icons automatically; unmapped emoji render as stickers in the colour emoji font.

## Do's and Don'ts

### Do:
- **Do** keep one red action per view; mark mistakes with the red pen (`red` border, wavy underline, `red-ink` text).
- **Do** use mint swipe plus green ink for right, and keep highlighters behind text.
- **Do** put new section headings on the marker swipe (app h2) or `.mk` span (public h1/h2).
- **Do** draw any new icon on the 24-unit grid at 1.8 stroke and add it to the sprite and the emoji map.
- **Do** cycle pastel circles through `hl`, `hl4`, `hl3`, `hl2` (and `hl5` for six-step sets).
- **Do** use colour tokens only, so all eight styles keep working; test new UI in paper and dark.
- **Do** let `prefers-reduced-motion` drop every animation and transition: swipes, ink-in and flips show their end state at once.

### Don't:
- **Don't** use emoji as interface icons; emoji are stickers for avatars and user-typed names only.
- **Don't** use hard offset shadows, thick black borders or dark board panels.
- **Don't** condense or stretch the type, or add a second display face.
- **Don't** add mascots, chunky gamified cards or 3D badges.
- **Don't** let a style variant change shapes, layout or icons.
