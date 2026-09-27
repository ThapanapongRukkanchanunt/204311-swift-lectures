# Week 13 practice

New SwiftUI App/App playground, provisional iOS/iPadOS 16+. Add both Swift files. Fake works immediately. For live practice, use your own authorized Firebase project and a Firestore default database. Before exposing anything, deploy the narrow firestore.rules provided. Create only courseStatus/demo with message (string) and version (integer) using the Firebase console. Enter the project ID at runtime, then Load live demo. Change the document in the console and reload. Test denied path must fail. This is intentionally public SYNTHETIC read-only data; do not use private information. No service-account key, user token, paid upgrade or external account creation is performed by these files. Check current Firebase quotas/pricing and clean up training data when finished. The app has no cloud-write feature; this is a genuine remote-read integration exercise.

Original CS 311 teaching example, not a lab solution. Do not overwrite existing student work. Swift compilation and runtime behavior remain pending verification on the course Macs and iPads.

Sources (2026-09-27):
- [Firebase REST access](https://firebase.google.com/docs/firestore/use-rest-api) — accessed 2026-09-27.
- [Firebase security rules](https://firebase.google.com/docs/firestore/security/get-started) — accessed 2026-09-27.
- [Firebase API keys](https://firebase.google.com/docs/projects/api-keys) — accessed 2026-09-27.
