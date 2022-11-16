import React, { Component } from "react";
import Bot from "../components/Bot";
import DynamicNavbar from "../components/DynamicNavbar";
import "./messaging_init_in_sw";
// export default class testpage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   // componentDidMount() {
//   //   const messaging = firebase.messaging();
//   //   messaging
//   //     .requestPermission()
//   //     .then(() => {
//   //       return messaging.getToken();
//   //     })
//   //     .then((token) => {
//   //       console.warn("Token : ", token);
//   //     })
//   //     .catch(() => {
//   //       console.log("Error");
//   //     });
//   // }
//   render() {
//     return (
//       <div className="flex flex-col h-screen justify-between ">
//         <header>
//           <DynamicNavbar />
//         </header>

//         <div className="flex-grow">testpage</div>

//         <footer>
//           <Bot />
//         </footer>
//       </div>
//     );
//   }
// }

export default function Testpage() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <DynamicNavbar />
      </header>

      <div className="flex-grow">testpage</div>

      <footer>
        <Bot />
      </footer>
    </div>
  );
}
