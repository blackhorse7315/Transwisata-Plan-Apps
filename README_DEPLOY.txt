TRANSWISATA ACTIVITY TIMELINE V8 - FIXED ADMIN LOGIN

Admin username: admin OR operation@pt-twa.co.id
Firebase Auth email: operation@pt-twa.co.id
Firebase Auth UID: P2I7gE9ox3OQclDrlbxLwc7oym82
Password is NOT embedded in files. It must match the Firebase Authentication account password.

1. Confirm Email/Password sign-in is enabled in Firebase Authentication.
2. Confirm the existing Firebase Authentication user email and UID match the above.
3. Replace ONLY the activity_timeline match in existing Firestore Rules with firestore.rules; publish.
4. Deploy ALL files to HTTPS hosting, replacing the previous version.
5. Hard refresh browser / close and reopen installed PWA if old cached code remains.
6. Public users can view calendar; authenticated admin can edit.

If login reports invalid credentials, reset the account password in Firebase Authentication and retry.
