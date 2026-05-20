import React, { useState } from "react";
import "../styles/userdashboard.css";

import Header from "../components/Header";
import DashboardBody from "../components/DashboardBody";

function UserDashboard() {
  const [category, setCategory] = useState("Meal");

  function filter(newCategory) {
    setCategory(newCategory);
  }

  return (
    <div>
        <Header
          onSelectFilter={filter}
          category={category}
        />
        <DashboardBody category={category} />
    </div>
  )
}

export default UserDashboard;