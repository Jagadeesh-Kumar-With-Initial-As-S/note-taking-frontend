import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
    <div className="ad1">
      This is coded by Jagadeesh Kumar with initial as S or myself, you may send
      mail to my email address which is equal to jagadeesh_2k17@proton.me and
      you may contribute some money to my Indian Unified Payment Interface (UPI)
      which is equal to jagadeesh-kumar@ybl .
    </div>
  </>
);
