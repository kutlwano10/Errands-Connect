import { useState } from "react";
import Layout from "./components/Layout";
import PickUp from "./components/PickUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Landing-page/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pickup" element={<PickUp />} />
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
