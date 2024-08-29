import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/DashboardPages/Setting";
import CardUpdate from "./pages/DashboardPages/CardUpdate";
import CardCreate from "./pages/DashboardPages/CardCreate";
import Theme1 from "./components/Theme";
import NotFound from "./components/NotFound";
import Admin from "./admin/Admin";
import UserCreate from "./admin/UserCreate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Theme1 />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="setting" element={<Setting />} />
          <Route path="digital-business-card-update" element={<CardUpdate />} />
          <Route path="digital-business-card-create" element={<CardCreate />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="user-create" element={<UserCreate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
