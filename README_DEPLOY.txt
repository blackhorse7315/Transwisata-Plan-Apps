TRANSWISATA ACTIVITY TIMELINE — PUBLIC FIREBASE PWA

1. Upload semua file dalam folder ini ke hosting HTTPS (Firebase Hosting atau GitHub Pages).
2. Firebase Console > Firestore Database > Rules: gabungkan rule khusus match /activity_timeline/{eventId} dari firestore.rules dengan rules yang sudah ada. Jangan mengganti rules koleksi lain.
3. Publish Firestore Rules.
4. Buka URL HTTPS. Semua pengunjung bisa melihat, menambah, mengubah, copy, dan menghapus kegiatan tanpa login.
5. Install PWA via Chrome/Edge atau Add to Home Screen di Safari iPhone.

PERINGATAN: Mode publik tanpa login memberi SEMUA pengunjung hak mengubah/menghapus SEMUA kegiatan. Jangan gunakan untuk data sensitif atau data operasional penting tanpa pengamanan tambahan. Firebase config di frontend bukan mekanisme keamanan.
