import { useState } from "react";
import Layout from "./components/Layout";
import PickUp from './components/PickUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
        <Route path="/pickup" element={<PickUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
