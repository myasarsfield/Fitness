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

- **Dashboard**: choose which sections to show and in what order (strength, cardio, body parts trained, nutrition, each meal, water, sleep, steps, body measurements, mood, notes) for today, 7 days or 30 days.
- **Body**: a section for each body part (chest, back, shoulders, arms, legs, glutes, core, cardio) with your recent log, the most popular exercises and the best exercises for results. Tap **Used** to log one straight into Strength or Cardio; tap again to remove it.
- **Today**: goal meters for calories, protein, water, steps, sleep and active minutes; weight trend, net calories, training days and logging streak; the day's log. Step back through previous days.
- **History** (under More): every entry grouped by day, with search and type filters. Tap any entry to edit or delete it.
- **Progress**: 4 week, 12 week and 1 year views of body weight, calories, strength volume, cardio distance, steps and sleep; estimated one-rep max per lift (Epley); personal bests table.
- **Goals** (under More): daily targets and target weight; export a JSON backup or CSV, import a backup, load or remove sample data.

Strength entries remember your last session for each exercise and pre-fill the sets. A new best estimated 1RM is flagged as you save it.

## Where data is saved

- Opened as a Claude artifact: saved privately to the signed-in user's account and synced across devices.
- Opened as a plain file or hosted page: saved in that browser's local storage. Export backups regularly.

## Files

- `index.html`: the complete app, ready to open or host (for example on GitHub Pages).
- `src/app.html`: the same app as an artifact page body (no `<html>`/`<head>` wrapper). `index.html` is this file wrapped in a standard document skeleton.
