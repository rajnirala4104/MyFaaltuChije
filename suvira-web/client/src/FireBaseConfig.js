import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAE53cH4CaCBkg7coJfBy3v9Y3PU45SoVY",
//   authDomain: "suvira-energy.firebaseapp.com",
//   projectId: "suvira-energy",
//   storageBucket: "suvira-energy.appspot.com",
//   messagingSenderId: "157934294285",
//   appId: "1:157934294285:web:f0aed8b8700a8028370c44",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDkVuIY5R2X8ELfnfTVTc20YuU41p80sXE",
  authDomain: "suviraenergy-8a505.firebaseapp.com",
  projectId: "suviraenergy-8a505",
  storageBucket: "suviraenergy-8a505.firebasestorage.app",
  messagingSenderId: "961505236423",
  appId: "1:961505236423:web:54e187fd277ddc86aaf5e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
