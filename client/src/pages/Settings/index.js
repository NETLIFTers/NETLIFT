import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Title, LogOut } from "../../components";
import BackSettings from "../../components/BackSettings";
import SettingsDelete from "./SettingsDelete";
import SettingsHome from "./SettingsHome";
import SettingsLogout from "./SettingsLogout";
import SettingsPassword from "./SettingsPassword";
import SettingsUnit from "./SettingsUnit";
import SettingsUser from "./SettingsUsername";

const Settings = () => {
  const nav = useNavigate();
  useEffect(() => {
    const lsToken = localStorage.getItem("token");
    if (lsToken == null) {
      nav("/login", { replace: true });
    }
  });

  let { pathname } = useLocation();
  return (
    <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8 flex flex-col">
      <Title text="Settings" />
      {pathname === "/settings" ? null : <BackSettings />}
      <Routes>
        <Route path="/" element={<SettingsHome />} />
        <Route path="/username" element={<SettingsUser />} />
        <Route path="/password" element={<SettingsPassword />} />
        <Route path="/unit" element={<SettingsUnit />} />
        <Route path="/log-out" element={<SettingsLogout />} />
        <Route path="/delete-account" element={<SettingsDelete />} />
      </Routes>
    </div>
  );
};
export default Settings;
