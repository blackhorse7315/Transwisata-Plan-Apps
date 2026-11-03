TRANSWISATA ACTIVITY TIMELINE — FIREBASE PUBLIC PWA

1. Firebase Console > transwisata-apps > Build > Firestore Database > Create database (jika belum ada).
2. Firestore > Rules: gabungkan aturan pada firestore.rules dengan rules lama. JANGAN menimpa rules existing untuk koleksi lain. Publish.
3. Authentication > Sign-in method > Enable Email/Password. Jangan aktifkan self-registration di aplikasi. Authentication > Users > Add user untuk editor.
4. Upload semua file ke hosting HTTPS (Firebase Hosting atau GitHub Pages). Untuk Firebase Hosting: firebase login; firebase use transwisata-apps; firebase deploy --only hosting setelah setup hosting.
5. Semua pengunjung dapat melihat jadwal realtime; editor login untuk tambah/edit/copy/hapus.
6. Jika Anda ingin membatasi editor ke akun tertentu, tambahkan pemeriksaan request.auth.uid pada Firestore rules. Aturan contoh mengizinkan semua akun Email/Password terdaftar pada project untuk mengedit koleksi ini.
7. Catatan: jadwal lama yang ada di localStorage tidak otomatis diimpor ke Firebase. Ekspor/rekap manual sebelum beralih.
8. Data Firebase bersifat online; PWA shell bisa offline tetapi sinkronisasi dan perubahan jadwal membutuhkan koneksi.
9. Konfigurasi Firebase web bukan password rahasia. Perlindungan data bergantung pada Security Rules.
