# Fitness Logbook

A single-page fitness app and tracker. No build step, no dependencies: open `index.html` in a browser.

## What it logs

| Type | Fields |
| --- | --- |
| Strength | Exercise, sets (reps × kg), session length, notes |
| Cardio | Activity, duration, distance, calories burned, heart rate, notes (pace worked out for you) |
| Food | Meal, food, calories, protein, carbs, fat |
| Water | Millilitres (one-tap +250 / +500 ml) |
| Body | Weight, body fat %, waist, chest, hips, arm |
| Sleep | Hours, quality 1 to 5 |
| Steps | Daily count |
| Mood | Mood and energy 1 to 5, note |
| Note | Free text |

## Screens

- **Dashboard** (opens first): a full-screen green page with up to 6 tiles you choose (calories, protein, water, steps, sleep, active minutes, goals hit, streak, days trained, sessions, kg lifted, cardio distance, weight, mood).
- **Breakdown**: every section as a drop-down (strength, cardio, body parts trained, nutrition, each meal, water, sleep, steps, body measurements, mood, notes) for today, 7 days or 30 days; choose and order them with Customise.
- **Body**: a section for each body part (chest, back, shoulders, arms, legs, glutes, core, cardio) with your recent log, the most popular exercises and the best exercises for results. Tap **Used** to log one straight into Strength or Cardio; tap again to remove it.
- **Today**: goal meters for calories, protein, water, steps, sleep and active minutes; weight trend, net calories, training days and logging streak; the day's log. Step back through previous days.
- **History** (under More): every entry grouped by day, with search and type filters. Tap any entry to edit or delete it.
- **Progress** (under More): 4 week, 12 week and 1 year views of body weight, calories, strength volume, cardio distance, steps and sleep; estimated one-rep max per lift (Epley); personal bests table.
- **Goals** (under More): daily targets and target weight; export a JSON backup or CSV, import a backup, load or remove sample data.

**Food logging**: search a built-in list of common UK foods, describe a meal in your own words or snap a photo of your plate or a nutrition label (Claude estimates the numbers; needs the Claude app or claude.ai), re-log favourites and saved meals in one tap, or type it in manually. Add several items and log them together.

Sections fold into drop-downs to keep things compact, and goal rings celebrate when you hit a target.

Strength entries remember your last session for each exercise and pre-fill the sets. A new best estimated 1RM is flagged as you save it.

## Where data is saved

- **In Claude** (the artifact): saved privately to the signed-in Claude account and synced across devices.
- **Hosted with Supabase** (GitHub Pages + `config.js` filled in): invite-only email sign-in (link or 6-digit code), each person's log private to them and synced across devices.
- **Hosted without Supabase** (empty `config.js`): saved in that browser only. Export backups regularly.

Describe and Photo food logging use Claude, so they only appear inside Claude.

## Apple Health (via Shortcuts)

An iPhone Shortcut can read today's steps, sleep, exercise minutes, active energy and weight from Apple Health and open the hosted app with them:

`https://myasarsfield.github.io/Fitness/?health=1&steps=8000&sleep=7.5&exercise=35&energy=450&weight=81.2`

Optional `date=YYYY-MM-DD` (defaults to today) and `sleep_min` (minutes instead of hours). Each run replaces that day's Health entries, so it can run more than once. If you are signed out, the numbers are applied after you sign in.

## Hosting with sign-in (Supabase)

1. Create a free Supabase project and run `supabase.sql` in its SQL Editor.
2. Authentication: keep Email on, switch off new sign-ups, set the Site URL and a Redirect URL to the GitHub Pages address.
3. Optional but recommended: edit the Magic Link email template to include `{{ .Token }}` so emails show a 6-digit code (needed for iPhone home-screen apps).
4. Invite people from Authentication, Users.
5. Put the Project URL and anon public key in `config.js` (never the service_role key).
6. Turn on GitHub Pages for `main` and the root folder.

## Files

- `index.html`: the hosted app, built by `python3 build.py`.
- `config.js`: Supabase settings for the hosted app.
- `supabase.sql`: database table and privacy rules.
- `manifest.json`, `icons/`: home-screen app name and icons.
- `src/app.html`: the same app as an artifact page body (no `<html>`/`<head>` wrapper). Edit this file, then run `python3 build.py`.
