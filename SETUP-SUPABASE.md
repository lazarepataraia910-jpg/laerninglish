# ☁️ ნამდვილი ანგარიშები და მონაცემთა ბაზა (Supabase)

სანამ ამას არ გააკეთებ, საიტი ლოკალურ ანგარიშებს იყენებს (მხოლოდ ამ ბრაუზერში).
Supabase-ის უფასო გეგმა ამ საიტს ბოლომდე ჰყოფნის.

## 1. პროექტის შექმნა
1. გახსენი https://supabase.com → **Start your project** → შედი GitHub ანგარიშით.
2. **New project** → სახელი `laerninglish`, მოიფიქრე ბაზის პაროლი (შეინახე), რეგიონი: ახლოს მდებარე (მაგ. Frankfurt) → **Create**.
3. დაელოდე 1-2 წუთს, სანამ პროექტი მზად იქნება.

## 2. ცხრილის შექმნა
1. მარცხნივ **SQL Editor** → **New query**.
2. ჩასვი ფაილის [`supabase.sql`](supabase.sql) მთელი შიგთავსი → **Run**.
3. უნდა დაწეროს `Success. No rows returned`.

ეს ქმნის `user_data` ცხრილს და დაცვას: თითოეული მომხმარებელი მხოლოდ საკუთარ გაკვეთილებს ხედავს.

## 3. გასაღებების ჩასმა საიტში
1. **Project Settings → API** (ან **Data API**).
2. დააკოპირე **Project URL** და **anon public** key.
3. `index.html`-ში ეს ხაზი:
   ```js
   const SUPABASE_CONFIG = null;
   ```
   შეცვალე ასე:
   ```js
   const SUPABASE_CONFIG = { url: "https://xxxx.supabase.co", anonKey: "eyJhbGciOi..." };
   ```
   (ან უბრალოდ მომწერე ეს ორი მნიშვნელობა და მე ჩავსვამ.)

> `anon` key საიდუმლო არ არის, ის საიტის კოდში უნდა იყოს. მონაცემებს იცავს მე-2 ნაბიჯის წესები.
> **`service_role` key არასდროს ჩასვა საიტში და არავის მისცე.**

## 4. საიტის მისამართი
**Authentication → URL Configuration**:
- **Site URL**: `https://lazarepataraia910-jpg.github.io/laerninglish/`
- **Redirect URLs** → Add: `https://lazarepataraia910-jpg.github.io/laerninglish/**`

ეს საჭიროა, რომ რეგისტრაციის დადასტურების და პაროლის აღდგენის ბმულები საიტზე დაბრუნდეს.

## 5. რეგისტრაცია ელფოსტით
ელფოსტით რეგისტრაცია თავიდანვე ჩართულია. ნაგულისხმევად ახალ მომხმარებელს ელფოსტის დადასტურება სჭირდება.
თუ გინდა, რომ რეგისტრაციისთანავე შევიდეს: **Authentication → Sign In / Providers → Email → Confirm email** გამორთე.

## 6. Google-ით შესვლა (არასავალდებულო)
1. Google Cloud Console-ში შექმენი OAuth Client ID (Web application). **Authorized redirect URI**-ში ჩასვი ის მისამართი, რომელსაც Supabase-ის Google provider-ის გვერდი გიჩვენებს (`https://xxxx.supabase.co/auth/v1/callback`).
2. Supabase-ში **Authentication → Sign In / Providers → Google** → Enable → ჩასვი Client ID და Client Secret → Save.

სანამ ამას არ გააკეთებ, „Google-ით შესვლა“ შეცდომას აჩვენებს. ელფოსტით შესვლა კი იმუშავებს.

## მზადაა
გახსენი საიტი: ჩანს „შესვლა / რეგისტრაცია“ ელფოსტით. პირველი შესვლისას საიტი შემოგთავაზებს ამ ბრაუზერის ძველი გაკვეთილების ანგარიშზე გადატანას.
