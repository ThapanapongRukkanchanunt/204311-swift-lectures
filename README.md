# 204311 Swift Lectures

## Complete semester review draft

All 15 teaching weeks are available at `/2027/week-NN/`, each with a reading view, Thai lab sheet, practice-source ZIP and offline ZIP. Weeks 03–15 were added on 2026-09-27. Their catalog is `src/generated-catalog.json`; `scripts/lessons.mjs` loads every lesson for generation, packaging and checks. Resource links use the same labels and order throughout.

These are review drafts, not a claim of Apple-device, timed beginner-pilot or Canvas validation. Week 03 preserves the approved in-class requirements/pitch workshop; Week 15 preserves the full deployment lecture and the 25 + 90 + 5 minute release/presentation lab. No extra class meetings are required. Instructor media links remain placeholders.

## Thai lab sheets

The lab index is `/2027/labs/`, with sheets at `/2027/week-NN/lab/` for 01–15. Each has a Canvas HTML-fragment download. Public fragment sources are in `content/labs/`; `scripts/labs.mjs` wraps them as standalone pages. Canonical course fragments and private instructor verification records remain outside this repository. When a canonical sheet changes, sync only its student-facing fragment (without HTML comments) into `content/labs/`, then rebuild. All current lab sheets are included in the shared offline package. Do not copy lab solutions or instructor notes into this repository.

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

The build generates `downloads/week-NN-practice.zip` and `downloads/week-NN-offline.zip` for all weeks, plus catch-up starter ZIPs where supplied. Extract the offline package and follow START-HERE.txt. Core reading works from a local file; interactive slides need a local HTTP server. External references and the intentionally live networking/cloud exercises need internet; core lecture content does not.

## Lecture images

Selected slides use locally stored, licensed internet images. Creator, source and license links appear beside each image; click an image for the full-size file. [Complete image credits](public/images/lectures/credits.html) and [provenance record](public/images/lectures/CREDITS.md) document individual reuse terms and modifications. Keep these credits in redistributed offline packages. Image licenses are separate from course-authored content. `src/visuals.json` and `scripts/visuals.mjs` apply the image layer without changing slide IDs or session timing.

Additional conceptual sequences and comparisons are defined in `src/illustrations.json` and rendered by `scripts/illustrations.mjs`. They use original editable HTML labels and unmodified OpenMoji artwork, not actual application screenshots. [Illustration credits](public/images/openmoji/credits.html) record the pinned release, individual artists, sources and license. The same symbol deliberately represents the same concept across lessons. All artwork ships in offline downloads. Normal navigation reveals illustration points progressively; Read and no-JavaScript modes show everything.

## Verification limits

Swift compilation and target-device validation require macOS/Xcode and the laboratory iPads. Follow the practice README's exact clean-build and behavior checks. Windows browser checks do not establish Safari compatibility on the course devices. Do not publish private instructor notes, assessment keys, student data or lab solutions here.
