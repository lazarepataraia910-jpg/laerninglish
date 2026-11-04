---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["site.css","build-pages.mjs"]
---

Scope: the whole English Quest app (index.html: login, lessons, study modes, course, levels, profile, stats, settings) plus the generated public pages (course, levels, words, about, privacy, terms via build-pages.mjs and site.css). Visitor mode: Operate for the app, Read for the public pages. Audience: Georgian school students on phones, also on home/school computers. Job: drill their own English word lists (copy -> write -> submit) daily. Constraints: logo and name stay; red stays as the main accent with a new palette around it; one line-icon set replaces the emojis (small in buttons, large on cards); all 8 styles stay as variants; saved data stays compatible; fast load stays. Chosen: the user pinned "pretty study notes, like the notebooks students decorate" over the dealt hand (sticker album, phone widgets, monochrome, canon).

## Direction contract

THESIS: The app is a student's best notebook: dot-grid paper, gel-pen ink, pastel highlighter swipes and sticky notes, kept neat. It refuses both the old dark departure board and the category default of chunky gamified cards with mascots.

OWN-WORLD: White dot-grid page ground, blue-black gel-pen ink, the logo red as the one main action and the teacher's red pen for mistakes, green pen for right. Pastel highlighters (pink, yellow, mint, sky, lilac) swipe behind headings and fill icon circles. White paper cards with a soft lift and a strip of translucent washi tape; the next word sits on a sticky note. Noto Sans Georgian at normal width, heavy headings. One line-icon set at 1.8 stroke: 20px in buttons and tabs, 28-32px inside highlighter circles on cards. Free-form emojis survive only as "stickers" (avatars, user-typed names), never as UI icons.

STORY: The student opens the notebook to today's page: the next word on a sticky note, a red "continue" button, their lessons as neat list entries with a highlighter progress stroke. Typing fills grid-paper cells; right letters turn green, wrong ones get the red pen. Submitting shows the list marked like a corrected page.

FIRST VIEWPORT: Phone 390: white top bar with logo, streak and XP pills with icons. A taped paper card: lesson caption, the English word large on a yellow sticky note, Georgian below, daily goal stroke. Full-width red continue. Heading "my lessons" with a pink marker swipe, lesson rows with icon in a pastel circle, name, progress stroke, count. Bottom tab bar with line icons, the active one in red with a highlighter dot. Desktop: same column centred, tabs on top.

FORM: Study-notes notebook, pinned by the user (not in the dealt hand). seed:d9401ee7309ea271. Signature interaction: the highlighter swipe, a marker stroke that sweeps left to right behind a word when it is answered right and behind headings on arrival; reduced motion shows it at once.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
