import React from "react";
import { AppRoutes } from "./router";
import { Header } from "../feautures/Header/Header";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
