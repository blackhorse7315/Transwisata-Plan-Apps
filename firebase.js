import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getFirestore,collection,doc,setDoc,deleteDoc,onSnapshot} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
const firebaseConfig={apiKey:'AIzaSyBOvXaTNP2TYCG6fjJ6U9R3MgcyIVvyRWk',authDomain:'transwisata-apps.firebaseapp.com',projectId:'transwisata-apps',storageBucket:'transwisata-apps.firebasestorage.app',messagingSenderId:'99146065058',appId:'1:99146065058:web:2508859fcd32fe78c923fb',measurementId:'G-38N246FBJT'};
const ADMIN_EMAIL='operation@pt-twa.co.id';
const ADMIN_UID='P2I7gE9ox3OQclDrlbxLwc7oym82';
const app=initializeApp(firebaseConfig),db=getFirestore(app),auth=getAuth(app),activities=collection(db,'activity_timeline');
const status=document.getElementById('firebaseStatus');
window.firebaseSave=async e=>{if(!window.isTimelineAdmin)throw Error('Login admin diperlukan');await setDoc(doc(activities,e.id),e);};
window.firebaseDelete=async id=>{if(!window.isTimelineAdmin)throw Error('Login admin diperlukan');await deleteDoc(doc(activities,id));};
window.timelineLogout=()=>signOut(auth);
onAuthStateChanged(auth,user=>{const active=!!user && user.uid===ADMIN_UID;window.setTimelineAdmin(active);if(user && !active){const error=document.getElementById('adminLoginError');if(error)error.textContent='Akun ini tidak memiliki hak Admin Timeline.';}status.textContent='● Firebase realtime • '+(active?'Admin':'Public view');});
const loginForm=document.getElementById('adminLoginForm');
loginForm.addEventListener('submit',async ev=>{
  ev.preventDefault();
  const name=document.getElementById('adminUsername').value.trim().toLowerCase();
  const password=document.getElementById('adminPassword').value;
  const error=document.getElementById('adminLoginError');
  const submit=loginForm.querySelector('button[type="submit"]');
  error.textContent='';
  if(name!=='admin' && name!==ADMIN_EMAIL){error.textContent='Gunakan username admin atau email operation@pt-twa.co.id.';return;}
  submit.disabled=true;submit.textContent='Memverifikasi...';
  try{
    const result=await signInWithEmailAndPassword(auth,ADMIN_EMAIL,password);
    if(result.user.uid!==ADMIN_UID){await signOut(auth);error.textContent='Akun berhasil login, tetapi UID tidak cocok dengan Admin Timeline.';return;}
    window.setTimelineAdmin(true);
    hideLoginPrompt();
  }catch(err){
    const messages={
      'auth/invalid-credential':'Email atau password tidak sesuai dengan akun Firebase Authentication.',
      'auth/wrong-password':'Password tidak sesuai dengan akun Firebase Authentication.',
      'auth/user-not-found':'Akun admin tidak ditemukan di Firebase Authentication.',
      'auth/operation-not-allowed':'Metode Email/Password belum diaktifkan di Firebase Authentication.',
      'auth/too-many-requests':'Terlalu banyak percobaan login. Coba kembali beberapa saat lagi.',
      'auth/network-request-failed':'Koneksi internet atau akses Firebase bermasalah.',
      'auth/unauthorized-domain':'Domain website belum diizinkan di Firebase Authentication.'
    };
    error.textContent=messages[err.code]||('Login gagal ('+(err.code||'unknown')+'). Periksa konfigurasi Firebase.');
    console.error('Firebase admin login:',err);
  }finally{submit.disabled=false;submit.textContent='Login';}
});
onSnapshot(activities,snapshot=>{events=snapshot.docs.map(d=>({...d.data(),id:d.id}));status.textContent='● Firebase realtime • '+(window.isTimelineAdmin?'Admin':'Public view');render();},err=>{status.textContent='Firebase gagal: '+err.message;console.error(err);});
