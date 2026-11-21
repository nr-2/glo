# Glo

**Your habits, routine and progress in one place.**

Glo is a personal glow-up planner. It brings your daily schedule, water, workouts, skincare, classes and progress
into one calm app, and it has an AI assistant you can simply ask to change your plan for you.
It works in Arabic and English, on your phone or your computer.

**Try it:** [glo.nr-2.space](https://glo.nr-2.space)

![Glo sign-in and onboarding](https://glo.nr-2.space/mockups/onboarding.png)

![Glo home, water and AI assistant](https://glo.nr-2.space/mockups/app.png)

<sub>Mockups use demo data.</sub>

## Features

### Today
- A ring that fills up as you finish the day's tasks, colored by category: routine, gym, dance, care, study and university.
- A timeline of the day. Tap a task to tick it off.
- An assistant card that always shows what's next, with a one-tap "Done".
- Browse any day of the week, and edit tasks, times and icons whenever you want.
- A daily streak that grows when you finish most of your tasks and hit your water goal.

### AI assistant
- Just say what you want: *"Add gym on Sunday at 5 PM"*, *"Set my water goal to 3 liters"*, *"Make me a daily routine"*.
- It reads your schedule and makes the change for you: tasks, workouts, routines, classes, deadlines or water goal.
- Every change can be undone with one tap.
- It replies in the language you write in, Arabic or English.

### Water
- Tap the drop every time you drink, and watch it fill.
- Set your own glass size and daily goal.

### Workouts
- A plan for each day of the week: exercises, sets and reps, or a rest day.
- Log the weight you lift. Glo shows what you used last time and tells you when it's time to go heavier.

### Hair and body care
- A care routine for each day: wash, cream and treatment days.
- A built-in 2-hour hair oil timer that tells you when it's time to wash it out.

### University
- Your weekly classes, color-coded by course.
- Exams, homework and project deadlines with a countdown, so nothing sneaks up on you.

### Progress
- Weekly charts for tasks completed and water drunk.
- A glow-up tracker for weight and body measurements, with a chart that shows your change over time.

### Made for you
- Arabic and English, with full right-to-left support.
- Light and dark mode, plus seven color themes.
- A short onboarding to pick your language, theme and water goal.
- Your account keeps everything in sync, so your data follows you to any device.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

1. Get the code:

   ```bash
   git clone https://github.com/nr-2/glo-.git
   cd glo-
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000), create an account, and you're in.

Your local copy uses the same online accounts and AI as the live site, so you can sign in with the same account.

To build the production version, run `npm run build`. The finished site is written to the `out/` folder.
