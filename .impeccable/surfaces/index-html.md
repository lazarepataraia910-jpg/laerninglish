---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["site.css","build-pages.mjs"]
---

Scope: the whole English Quest app (index.html: login, lessons, study modes, course, levels, profile, stats, settings) plus the generated public pages (course, levels, words, about, privacy, terms via build-pages.mjs and site.css). Visitor mode: Operate for the app, Read for the public pages. Audience: Georgian school students on phones, also on home/school computers. Job: drill their own English word lists (copy → write → ჩაბარება) daily. Constraints: logo, red/black/white main colours, all 8 styles and the red/black/white-tinted emojis stay; saved data stays compatible; faster load, better on phones, simpler. Chosen: the departure-board world (user picked it over the assigned direction).

## Direction contract

THESIS: The drill is a departure board: every word is a row of flaps that turn letter by letter, right letters settle white and wrong ones flip red. It refuses the category default, the bright gamified lesson path of rounded cards, mascots and confetti.

OWN-WORLD: Brushed-steel graphite ground, matte black flap cells split by a hairline across the middle, white letter paint, one condensed family (Noto Sans Georgian at narrow widths) in caps with wide tracking for flaps and labels, normal width for reading text. Red means wrong or cancelled; an inverted white flap marks the active row or tab; dimmed letters mean done. Rows are divided by 1px steel rules, numbers are tabular. No rounded cards, no offset shadows. Emojis sit in their own cells, tinted red/black/white.

STORY: The student opens the app and sees today's board: the next word already on the flaps, their lessons listed as departures. One tap continues the lesson; typing turns each flap white or red; „ჩაბარება“ shows the whole list as a board of right and wrong rows.

FIRST VIEWPORT: Phone 390: top bar with logo, streak, XP and level as small flap cells. A board panel: lesson and step caption, the next English word in letter flaps, its Georgian below, the daily-goal rule. Full-width red „▶ გაგრძელება“. Below, a departures table of lessons (name, words). Bottom tab bar with four tabs, the active one inverted. Desktop: the same column centred, tabs as a top bar.

FORM: Split-flap concourse board, the dealt challenger the user chose (third card shown). seed:8fd5cc7da87a9d0d. Signature interaction: letters cascade into their flaps (about 30 ms per cell) when a word appears and as the student types; reduced motion shows them at once.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
