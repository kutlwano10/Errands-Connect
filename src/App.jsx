import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout";
import PickUp from './components/PickUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Runner from "./components/Runner";

function App() {

  const [clientId, setClientId] = useState(null);
  const [receivedData, setReceivedData] = useState(null);
  const [targetClientId, setTargetClientId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      // Send the client ID to the server
      ws.send(JSON.stringify({ id: `client-kitso@2024` }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.clientId) {
        // Store the assigned client ID
        setClientId(data.clientId);
        console.log(`Assigned Client ID: ${data.clientId}`);
      } else {
        // Handle received data
        setReceivedData(data);
        alert(`PickUp request from ${data.name}.`)
        console.log('Received data:', data);
       }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // return () => {
    //   ws.close();
    // };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
        <Route path="/pickup" element={<PickUp/>}/>
        <Route path="/runner" element={<Runner receivedData={receivedData}/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
