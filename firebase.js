import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getFirestore,collection,doc,setDoc,deleteDoc,onSnapshot} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const firebaseConfig={apiKey:'AIzaSyBOvXaTNP2TYCG6fjJ6U9R3MgcyIVvyRWk',authDomain:'transwisata-apps.firebaseapp.com',projectId:'transwisata-apps',storageBucket:'transwisata-apps.firebasestorage.app',messagingSenderId:'99146065058',appId:'1:99146065058:web:2508859fcd32fe78c923fb',measurementId:'G-38N246FBJT'};
const app=initializeApp(firebaseConfig),db=getFirestore(app),activities=collection(db,'activity_timeline');
const status=document.getElementById('firebaseStatus');
window.firebaseSave=async e=>{await setDoc(doc(activities,e.id),e);};
window.firebaseDelete=async id=>{await deleteDoc(doc(activities,id));};
onSnapshot(activities,snapshot=>{events=snapshot.docs.map(d=>({...d.data(),id:d.id}));status.textContent='● Firebase realtime • Public';render();},err=>{status.textContent='Firebase gagal: '+err.message;console.error(err);});
