import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.jsx";
import "./assets/scss/main.scss";
import { StoreContext, store } from "./stores/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>

    </React.StrictMode>
);
