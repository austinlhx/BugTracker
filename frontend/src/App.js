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
import SidebarWithHeader from './components/sidebar';
import TicketsPage from './pages/tickets';
import ProjectsPage from './pages/projects';

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
            <SidebarWithHeader>
              <DashboardPage />
            </SidebarWithHeader>
          } />
          <Route path="/tickets" element={
            <SidebarWithHeader>
              <TicketsPage />
            </SidebarWithHeader>
          } />
          <Route path="/projects" element={
            <SidebarWithHeader>
              <ProjectsPage />
            </SidebarWithHeader>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
