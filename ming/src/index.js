import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//여기부터

// /*

// =========================================================
// * Now UI Kit React - v1.5.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/now-ui-kit-react
// * Copyright 2022 Creative Tim (http://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

// * Designed by www.invisionapp.com Coded by www.creative-tim.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// // styles for this kit
// import "./assets/css/bootstrap.min.css";
// import "./assets/scss/now-ui-kit.scss?v=1.5.0";
// import "./assets/demo/demo.css?v=1.5.0";
// import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// // pages for this kit
// import Index from "./views/Index";
// import NucleoIcons from "./views/NucleoIcons";
// import LoginPage from "./views/examples/LoginPage";
// import LandingPage from "./views/examples/LandingPage";
// import ProfilePage from "./views/examples/ProfilePage";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Switch>
//       <Switch>
//         <Route path="/index" render={(props) => <Index {...props} />} />
//         <Route
//           path="/nucleo-icons"
//           render={(props) => <NucleoIcons {...props} />}
//         />
//         <Route
//           path="/landing-page"
//           render={(props) => <LandingPage {...props} />}
//         />
//         <Route
//           path="/profile-page"
//           render={(props) => <ProfilePage {...props} />}
//         />
//         <Route
//           path="/login-page"
//           render={(props) => <LoginPage {...props} />}
//         />
//         <Redirect to="/index" />
//         <Redirect from="/" to="/index" />
//       </Switch>
//     </Switch>
//   </BrowserRouter>
// );
