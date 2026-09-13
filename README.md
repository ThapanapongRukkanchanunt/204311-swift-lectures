# 204311 Swift Lectures

Week 02 is available in source at `/2027/week-02/` with a linear reading view, CampusQueue practice project and offline package. Its content lives in `src/week02.mjs`. The shared generator builds both lessons. Week 02 private English and Thai instructor notes stay outside this public repository. Pushing source runs the build workflow; Pages publication requires the explicit release workflow.

Public interactive lecture slides and student-facing downloads for CS 311 (204311), Mobile Application Development Frameworks.

The lecture site will use Reveal.js with Vite and deploy to GitHub Pages. Restricted material—including solutions, assessment answers, credentials, student data, and private instructor notes—must remain outside this repository.

## Local development

Use Node.js 22.12 or later (Node 22 LTS is used in CI). Dependencies are pinned in package-lock.json.

```text
npm ci
npm run dev
npm run build
npm run check
npm run preview
```

Week 01 lives at `/2027/week-01/`. `src/week01.mjs` is the student-facing content source. `npm run generate` produces static HTML so core content remains readable without JavaScript. Vite packages local assets using relative paths suitable for both a GitHub project site and an offline local server.

Use the Previous/Next buttons or Left/Right keys. Overview opens a keyboard-accessible section chooser. Read opens the linear reading view. Native disclosure controls reveal formative explanations. All response state is local and resets on reload; no response collection or analytics is installed.

## Enable GitHub Pages when ready

1. Open repository Settings > Pages.
2. Set Build and deployment > Source to **GitHub Actions**.
3. Open Actions > **Publish lecture site** > Run workflow, choosing `main`.
4. Wait for the deployment job to succeed.

The expected lesson URL is https://thapanapongrukkanchanunt.github.io/204311-swift-lectures/2027/week-01/ . It is available only after Pages is enabled and a release succeeds. Ordinary pushes build and upload an artifact; they do not publish automatically.

## Downloads and offline use

The build generates `downloads/week-01-practice.zip` and `downloads/week-01-offline.zip`. Extract the offline package and follow START-HERE.txt. Core reading works from a local file; interactive slides need a local HTTP server. External references need internet.

## Verification limits

Swift compilation and target-device validation require macOS/Xcode and the laboratory iPads. Follow the practice README's exact clean-build and behavior checks. Windows browser checks do not establish Safari compatibility on the course devices. Do not publish private instructor notes, assessment keys, student data or lab solutions here.
