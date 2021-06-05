import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  {/* <nav className="bg-blue-200 py-4 sticky top-0">
//           <ul className="flex overflow-auto font-bold">
//             <li className="mx-2">
//               <Link
//                 to="/"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="mx-2">
//               <Link
//                 to="/sports"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Sports
//               </Link>
//             </li>
//             <li className="mx-2">
//               <Link
//                 to="/business"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Business
//               </Link>
//             </li>
//             <li className="mx-2">
//               <Link
//                 to="/technology"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Technology
//               </Link>
//             </li>
//             <li className="mx-2">
//               <Link
//                 to="/entertaiment"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Entertaiment
//               </Link>
//             </li>
//             <li className="mx-2">
//               <Link
//                 to="/health"
//                 className="bg-white px-4 py-2 text-blue-400 rounded-lg"
//               >
//                 Health
//               </Link>
//             </li>
//           </ul>
//         </nav> */}
