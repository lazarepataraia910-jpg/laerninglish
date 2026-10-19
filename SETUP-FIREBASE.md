# ☁️ ნამდვილი ანგარიშების ჩართვა (Firebase)

სანამ ამას არ გააკეთებ, საიტი ლოკალურ პროფილებს იყენებს (მხოლოდ ამ ბრაუზერში).
Firebase უფასოა ამ ზომის საიტისთვის.

## 1. პროექტის შექმნა
1. გახსენი https://console.firebase.google.com და შედი Google ანგარიშით.
2. **Add project** → სახელი, მაგ. `laerninglish` → Google Analytics შეგიძლია გამორთო → **Create**.

## 2. ვებ აპის დამატება და config
1. პროექტის მთავარ გვერდზე დააჭირე **</>** (Web) ხატულას.
2. სახელი: `laerninglish` → **Register app**.
3. გამოჩნდება `const firebaseConfig = { apiKey: ..., authDomain: ..., projectId: ..., ... }`.
4. დააკოპირე `{ ... }` ნაწილი და ჩასვი `index.html`-ში ამ ხაზის ნაცვლად:
   ```js
   const FIREBASE_CONFIG = null;
   ```
   ასე უნდა გამოვიდეს:
   ```js
   const FIREBASE_CONFIG = { apiKey: "AIza...", authDomain: "laerninglish.firebaseapp.com", projectId: "laerninglish", appId: "1:..." };
   ```
   (ან უბრალოდ მომწერე config და მე ჩავსვამ.)

> `apiKey` საიდუმლო არ არის: ის საიტის კოდშია და ყველას ხედავს. მონაცემებს იცავს მე-5 ნაბიჯის წესები.

## 3. შესვლის ხერხების ჩართვა
**Build → Authentication → Get started → Sign-in method**:
- **Email/Password** → Enable → Save
- **Google** → Enable → აირჩიე support email → Save

## 4. საიტის მისამართის დაშვება
**Authentication → Settings → Authorized domains → Add domain**:
```
lazarepataraia910-jpg.github.io
```
(`localhost` უკვე დაშვებულია. Google-ით შესვლა `file://`-დან გახსნილ ფაილზე არ იმუშავებს, მხოლოდ საიტზე.)

## 5. მონაცემთა ბაზა და დაცვა
1. **Build → Firestore Database → Create database** → ახლოს მდებარე რეგიონი (მაგ. `europe-west`) → **Start in production mode**.
2. გახსენი **Rules** ჩანართი, წაშალე იქ რაც წერია, ჩასვი ფაილის [`firestore.rules`](firestore.rules) შიგთავსი → **Publish**.

ამ წესებით თითოეული მომხმარებელი მხოლოდ საკუთარ გაკვეთილებს ხედავს და ცვლის.

## მზადაა
გახსენი საიტი: ჩანს „შესვლა / რეგისტრაცია“. გაკვეთილები შენახდება ანგარიშზე და ყველა მოწყობილობაზე გამოჩნდება.
პირველი შესვლისას საიტი შემოგთავაზებს ამ ბრაუზერის ძველი გაკვეთილების ანგარიშზე გადატანას.
