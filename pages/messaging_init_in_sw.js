import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAqi3pH3d_U1sSnbCAfcO-aqVMDQmlapgA",
  authDomain: "next-fire-message.firebaseapp.com",
  projectId: "next-fire-message",
  storageBucket: "next-fire-message.appspot.com",
  messagingSenderId: "476249002731",
  appId: "1:476249002731:web:745f55e1e6d38dfc8da4ae"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BGFfZGcsnLylqD4Iza1Nn69Ia7uQ-2ujOsyciV7iOBTIgDiVnNz1RoClYmat4zGE2lMJJBB_FMBWuGIwlfGdO1I",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();


// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// const firebaseConfig = {
  // apiKey: "AIzaSyAqi3pH3d_U1sSnbCAfcO-aqVMDQmlapgA",
  // authDomain: "next-fire-message.firebaseapp.com",
  // projectId: "next-fire-message",
  // storageBucket: "next-fire-message.appspot.com",
  // messagingSenderId: "476249002731",
  // appId: "1:476249002731:web:745f55e1e6d38dfc8da4ae"
// };

// const app = initializeApp(firebaseConfig);
// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BGFfZGcsnLylqD4Iza1Nn69Ia7uQ-2ujOsyciV7iOBTIgDiVnNz1RoClYmat4zGE2lMJJBB_FMBWuGIwlfGdO1I",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken: ", currentToken);
//         } else {
//           console.log("Can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission!");
//     }
//   });
// }

// requestPermission();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging=getMessaging(app);
// getToken(messaging, {
//   vapidKey:
//     "BGFfZGcsnLylqD4Iza1Nn69Ia7uQ-2ujOsyciV7iOBTIgDiVnNz1RoClYmat4zGE2lMJJBB_FMBWuGIwlfGdO1I",
// }).then((currentToken) => {
//   if (currentToken) {
//     console.log("currentToken: ", currentToken);
//   } else {
//     console.log("Can not get token");
//   }
// });
