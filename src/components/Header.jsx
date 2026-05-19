import React, { useState } from 'react'
import '../styles/components/header.css'
import logoText from '../assets/icons/Logo Text.png'
import home from '../assets/icons/Home.png'
import archive from '../assets/icons/Archive.png'
import cart from '../assets/icons/Cart.png'
import search from '../assets/icons/Search.png'
import user from '../assets/icons/User.png'

function Header() {
  return (
    <header>
        <div id="CenterDiv">
            <div id="SearchDiv">
              <img src= {logoText} alt="Logo" id="LogoText"/>
              <div className="SearchWrapper">
                <input
                    type="text"
                    placeholder="Burgers, Drinks, etc..."
                    id="SearchInput"
                />
                <button className="SearchIconButton">
                    <img src={search} className="SearchIcon" alt="Search" />
                </button>
              </div>
              <button className="NavButton"><img src={home} className="NavIcon" alt="Home"/></button>
              <button className="NavButton"><img src={cart} className="NavIcon" alt="Cart"/></button>
              <button className="NavButton"><img src={user} className="NavIcon" alt="User"/></button>
            </div>
            <div id="FilterDiv">
              <button className="FilterButton">Meals</button>
              <button className="FilterButton">Drinks</button>
              <button className="FilterButton">Snacks</button>
            </div>
        </div>
    </header>
  )
}

export default Header;