import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import users from "./reducer/users";
import projects from "./reducer/projects";
import tickets from "./reducer/tickets";
import TicketsPage from './pages/tickets';
import ProjectsPage from './pages/projects';
import RedirectPage from './pages/redirect';
import ManageUserPage from './pages/manage';
import ProfilePage from './pages/profile';

const reducer = combineReducers({ users, projects, tickets });
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={
            <DashboardPage />
          } />
          <Route path="/tickets" element={
            <TicketsPage />
          } />
          <Route path="/projects" element={
            <ProjectsPage />
          } />
          {/* <Route path="/redirect" element={
            <RedirectPage />
          } /> */}
          <Route path="/manage" element={
            <ManageUserPage />
          } />
          <Route path="/profile" element={
            <ProfilePage />
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
