import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StoreProvider } from "./app/providers/StoreProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
