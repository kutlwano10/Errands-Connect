import { useState } from "react";
import Layout from "./components/Layout";
import PickUp from './components/PickUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Runner from "./components/Runner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
        <Route path="/pickup" element={<PickUp/>}/>
        <Route path="/runner" element={<Runner/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
