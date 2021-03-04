import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./styles/app.css"
import reportWebVitals from "./reportWebVitals"
import "./index.css"
import AuthForm from './components/auth_form'



const target = document.getElementById("root")

ReactDOM.render(
  <Provider>
    <AuthForm />
  </Provider>,
  target
)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
