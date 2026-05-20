import React, { useState } from "react";
import "../styles/userdashboard.css";

import Header from "../components/Header";
import DashboardBody from "../components/DashboardBody";
import Drawer from "@mui/material/Drawer";
import Cart from "../components/Cart"
import Profile from "../components/Profile";

function UserDashboard() {
  // State for the selected category filter
  const [category, setCategory] = useState("Meal");

  // State for cart drawer toggle
  const [openCart, setCartToOpen] = useState(false);

  // State for profile drawer toggle
  const [openProfile, setProfileToOpen] = useState(false);

  function filter(newCategory) {
    setCategory(newCategory);
  }

  const toggleCartDrawer = (value) => {
    setCartToOpen(value);
  };

  const toggleProfileDrawer = (value) => {
    setProfileToOpen(value);
  };

  return (
    <div>
        <Header
          onOpenCart={() => toggleCartDrawer(true)}
          onOpenProfile={() => toggleProfileDrawer(true)}
          onSelectFilter={filter}
          category={category}
        />
        
        <DashboardBody category={category} />

        <Drawer
          anchor="right"
          open={openCart}
          onClose={() => toggleCartDrawer(false)}
        >
          <Cart onClose={() => toggleCartDrawer(false)} />
        </Drawer>

        <Drawer
          anchor="right"
          open={openProfile}
          onClose={() => toggleProfileDrawer(false)}
        >
          <Profile onClose={() => toggleProfileDrawer(false)} name="John Doe" />
        </Drawer>
    </div>
  )
}

export default UserDashboard;