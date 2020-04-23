import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { SignIn, SignUp } from "./Authentication";
import { BrowserRouter, Route} from "react-router-dom"

ReactDOM.render(

<App />, 

document.getElementById("root"));

serviceWorker.unregister();
