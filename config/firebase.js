import { initializeApp } from 'firebase/app'

import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCSzF57QPC350ID-nZ2mngU94YQnNSLFNw",
  authDomain: "questionnaire-319e6.firebaseapp.com",
  projectId: "questionnaire-319e6",
  storageBucket: "questionnaire-319e6.appspot.com",
  messagingSenderId: "49226245556",
  appId: "1:49226245556:web:89d7c8e2e61f4d7237fee1"
}

const app = initializeApp(firebaseConfig)

export default app;