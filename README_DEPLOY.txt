TRANSWISATA ACTIVITY TIMELINE V7 — PUBLIC VIEW + ADMIN LOGIN

1. Firebase Console > Authentication > Sign-in method: enable Email/Password.
2. Authentication > Users > Add user:
   Email: timeline-admin@transwisata-apps.example
   Password: use the admin password you specified in chat (do NOT put it into source files).
3. In Firestore Rules, replace ONLY the existing activity_timeline match with the one in firestore.rules. Keep all other rules intact. Publish.
4. Deploy ALL files to HTTPS hosting (Firebase Hosting / GitHub Pages).
5. Visitors can view, share and print without login. To add/edit/copy/delete, click Login Admin, username admin, and the password configured in Firebase Authentication.
6. No password is embedded in HTML or JavaScript. Existing Firebase accounts and collections are unaffected.
7. If previously deployed, refresh/reinstall PWA and clear service worker cache if old version appears.
IMPORTANT: Email alias is for Firebase Auth identity; do not create a second admin account with another email unless rules and firebase.js are updated accordingly.
