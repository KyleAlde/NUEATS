import { useState } from "react";

import AdminHeader from "../components/AdminHeader";
import AdminDashboardBody from "../components/AdminDashboardBody";
import Drawer from "@mui/material/Drawer";
import Profile from "../components/Profile";

function AdminDashboard() {
  // State for the selected tab ("Users" or "Menu")
  const [currentTab, setCurrentTab] = useState("Users");

  // State for profile drawer toggle
  const [openProfile, setProfileToOpen] = useState(false);

  const toggleProfileDrawer = (value) => {
    setProfileToOpen(value);
  };

  return (
    <div>
      <AdminHeader
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenProfile={() => toggleProfileDrawer(true)}
      />

      <AdminDashboardBody currentTab={currentTab} />

      <Drawer
        anchor="right"
        open={openProfile}
        onClose={() => toggleProfileDrawer(false)}
      >
        <Profile onClose={() => toggleProfileDrawer(false)} name="Admin User" />
      </Drawer>
    </div>
  );
}

export default AdminDashboard;
