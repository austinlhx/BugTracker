import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { createStore } from "redux";
import { Provider } from "react-redux";
import users from "./reducer/data/users.json";
import projects from "./reducer/data/projects.json";
import tickets from "./reducer/data/tickets.json";

function App() {
  return (
    // <LoginPage />
    // <RegisterPage />
    // <DashboardPage />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
