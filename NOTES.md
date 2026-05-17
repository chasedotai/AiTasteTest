# AI Detector Game — Project Notes

## What We Built
A static browser game (`index.html` + `style.css` + `data.js` + `app.js`) where users read writing samples and vote whether each was written by AI or a human. No server needed — open `index.html` directly in a browser.

- Min 10 votes to unlock score, max 100 per session
- Three content types: tweets, LinkedIn posts, blog excerpts
- Cards styled to visually mimic each platform
- Results screen shows overall accuracy % and breakdown by type, with a tier label (AI Whisperer → Easily Fooled)
- Scores and per-vote events submitted to Supabase on game completion

---

## Dataset Status (160 samples total)

### Tweets — AI (IDs 1–10)
Generic AI-generated tweets with stereotypical hustle-culture/productivity voice.

### Tweets — Human (IDs 11–20, 51–53)
Real verified pre-2022 tweets from Ezra Klein, Paul Graham, visakanv, Miles Kimball, @michaelcurzi, Garry Tan, @BLUNDERBUSSTED, @Malcolm_Ocean, and others. Source: tweets_export.csv (Dec 31 2019 export) + user-pasted tweets.

### Tweets — AI style-based (IDs 57–96)
AI-generated tweets written in the style of specific people. All `isAI: true`.
- IDs 57–66: patio11 style (SaaS/payments/Japan business observations)
- IDs 67–76: Marc Andreessen style (tech-bullish, contrarian)
- IDs 77–86: Emmett Shear style (product/AI/management)
- IDs 87–96: Nick Cammarata style (lowercase, meditation/psychology/AI)

### LinkedIn posts — AI (IDs 21–34)
- IDs 21–27: Stereotypical AI LinkedIn posts (hustle culture, leadership platitudes)
- IDs 28–34: AI-generated posts written to sound like real human tech workers. All `isAI: true`.

⚠️ **LinkedIn has no verified human samples yet.** IDs 28–34 are labeled AI but were written to sound human — they're a grey area until real human LinkedIn posts are added.

### Blog excerpts — AI generic (IDs 35–41)
Written by Claude to exhibit stereotypical AI patterns (em-dash bullets, "dive deep", "game-changing", rhetorical questions).

### Blog excerpts — AI style-based (IDs 97–108)
AI-generated excerpts written in the style of specific authors. All `isAI: true`.
- IDs 97–99: Neal Stephenson style (dense, technical, historically digressive)
- IDs 100–102: John Grisham style (legal thriller, punchy, Southern)
- IDs 103–105: Jack Kerouac style (stream of consciousness, road, Beat)
- IDs 106–108: David Foster Wallace style (recursive, self-aware, cultural criticism)

### Blog excerpts — Human, manually sourced (IDs 42–50, 54–56)
Real verbatim excerpts from verified sources:
| IDs | Source |
|-----|--------|
| 42, 49 | Venkatesh Rao, Ribbonfarm (2007) |
| 43, 47 | Paul Graham, paulgraham.com |
| 44, 48 | Gizmodo (2019) |
| 45, 46 | Visakan Veerasamy, visakanv.com |
| 50 | Neal Stephenson, WIRED (1996) |
| 54, 55 | David Foster Wallace, Infinite Jest (1996) |
| 56 | James Joyce, Finnegans Wake (1939) |

### Blog excerpts — Human, Project Gutenberg (IDs 109–160)
52 verified public domain passages. All `isAI: false`.
| IDs | Source |
|-----|--------|
| 109–111 | Joseph Conrad, Heart of Darkness (1899) |
| 112–115 | Kate Chopin, The Awakening (1899) |
| 116–118 | Charlotte Perkins Gilman, The Yellow Wallpaper (1892) |
| 119–121 | Herman Melville, Moby-Dick (1851) |
| 122 | Jane Austen, Pride and Prejudice (1813) |
| 123–126 | Mark Twain, Adventures of Huckleberry Finn (1884) |
| 127–130 | W.E.B. Du Bois, The Souls of Black Folk (1903) |
| 131–134 | Fyodor Dostoevsky, Crime and Punishment (1866) |
| 135–138, 154–157 | Frederick Douglass, Narrative of the Life (1845) |
| 139–142 | Henry David Thoreau, Walden (1854) |
| 143–146 | Booker T. Washington, Up From Slavery (1901) |
| 147–148 | Edgar Allan Poe, Tales (~1840s) |
| 149–150 | Henry James, Roderick Hudson (1875) |
| 151–153 | H.G. Wells, The Time Machine (1895) |
| 158–160 | W.E.B. Du Bois, The Souls of Black Folk (1903) — later chapters |

---

## Supabase / Analytics
- `game_results` table: one row per completed session (accuracy, breakdown by type, session_id)
- `vote_events` table: one row per individual vote (session_id, sample_id, sample_type, is_ai, guessed_ai, correct)
- `session_id` UUID links the two tables, generated fresh at game start
- Enables per-sample analytics, e.g. "what % of players mistook Douglass for AI"

---

## Next Steps
1. **Replace human LinkedIn samples (IDs 28–34)** — user will paste real LinkedIn posts directly into chat; update labels to `isAI: false`
2. **Add AI LinkedIn samples to balance** — if real human LinkedIn posts are added, add matching AI ones to keep the category competitive
3. **UI polish** — test on mobile, check card rendering edge cases (very long text, unusual characters)
4. **Consider adding a `source` URL field** to each human sample so the results screen can show a "read the original" link

---

## Changelog

### 2026-05-17 — Major dataset expansion (52 AI + 52 human, 160 total)
- Added 40 AI-generated tweets styled as patio11, Marc Andreessen, Emmett Shear, Nick Cammarata (IDs 57–96)
- Added 12 AI-generated blog excerpts styled as Neal Stephenson, John Grisham, Jack Kerouac, David Foster Wallace (IDs 97–108)
- Added 52 human blog excerpts from Project Gutenberg public domain texts (IDs 109–160), sourced from Conrad, Chopin, Gilman, Melville, Austen, Twain, Du Bois, Dostoevsky, Douglass, Thoreau, Washington, Poe, Henry James, H.G. Wells
- Added 3 human blog excerpts pasted by user: DFW Infinite Jest (IDs 54–55), Joyce Finnegans Wake (ID 56)

### 2026-05-17 — Per-vote analytics
- Added `vote_events` Supabase table (one row per vote: session_id, sample_id, sample_type, is_ai, guessed_ai, correct)
- Added `session_id` UUID column to `game_results`
- `submitScore()` now inserts all votes to `vote_events` after writing the session summary
- Supabase setup: granted INSERT + sequence permissions to anon role on `vote_events`

### 2026-05-17 — UI improvements
- Progress bar now tracks toward the 10-vote minimum (fills to 100% at vote 10, stays full after)
- "See My Score" button is always visible below the voting buttons; grayed/disabled until 10 votes, then activates

### Earlier — Initial build
- Built static game with tweet, LinkedIn, and blog card types
- Dataset of 50 samples: 20 AI tweets, 13 human tweets, 14 AI LinkedIn, 16 blog (7 AI + 9 human)
- Replaced all fake human blog samples with real verbatim excerpts from Ribbonfarm, paulgraham.com, Gizmodo, visakanv.com, WIRED
- Wired Supabase for session-level score submission (`game_results` table)
