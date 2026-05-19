import React, { useState } from 'react'
import '../styles/components/header.css'
import logoText from '../assets/icons/Logo Text.png'

function Header() {
  return (
    <header>
        <div id="CenterDiv">
            <div id="SearchDiv">
                <img src= {logoText} alt="Logo" id="LogoText"/>
                <input type="text" placeholder="Burgers, Drinks, etc..." id="SearchInput"/>
            </div>
        </div>
    </header>
  )
}

export default Header;