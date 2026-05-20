import React, { useState } from "react";
import FoodItem from "../components/FoodItem";
import foodimg from "../assets/foodimages/Karekare and Rice.png";

import menuItems from "../TempData";

function DashboardBody(props) {
    return (
        <div id="DashboardBody">
            {menuItems
                .filter(item => item.category === props.category)
                .map((item) => (
                    <FoodItem
                        key={item.key}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        category={item.category}
                        foodimg={item.image}
                    />
            ))}
        </div>
    );
}

export default DashboardBody;