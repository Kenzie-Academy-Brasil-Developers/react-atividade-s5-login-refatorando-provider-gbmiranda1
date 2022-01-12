import React from 'react';
import './App.css';
import {AuthProvider} from "./Providers/Auth"
import Routes from './Routes';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
