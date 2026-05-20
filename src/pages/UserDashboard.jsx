import React, { useState } from "react";
import "../styles/userdashboard.css";

import Header from "../components/Header";
import DashboardBody from "../components/DashboardBody";
import Drawer from "@mui/material/Drawer";
import Cart from "../components/Cart"

function UserDashboard() {
  // State for the selected category filter
  const [category, setCategory] = useState("Meal");

  // State for drawer toggle
  const [open, setOpen] = useState(false);

  function filter(newCategory) {
    setCategory(newCategory);
  }

  const toggleDrawer = (value) => {
    setOpen(value);
  };

  return (
    <div>
        <Header
          onOpenCart={() => toggleDrawer(true)}
          onSelectFilter={filter}
          category={category}
        />
        
        <DashboardBody category={category} />

        <Drawer
          anchor="right"
          open={open}
          onClose={() => toggleDrawer(false)}
        >
          <Cart onClose={() => toggleDrawer(false)} />
        </Drawer>
    </div>
  )
}

export default UserDashboard;