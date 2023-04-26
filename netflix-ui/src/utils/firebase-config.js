// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDXcFrtdtbhrF7dK7pimm55bYGU-k5c0I",
  authDomain: "ott-netflix.firebaseapp.com",
  projectId: "ott-netflix",
  storageBucket: "ott-netflix.appspot.com",
  messagingSenderId: "1022734601369",
  appId: "1:1022734601369:web:9b31a25cc020ac609efc08",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
