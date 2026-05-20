import React, { useState } from "react";
import "../styles/userdashboard.css";

import Header from "../components/Header";
import DashboardBody from "../components/DashboardBody";

function UserDashboard() {
  return (
    <div>
        <Header />
        <DashboardBody />
    </div>
  )
}

export default UserDashboard;