import React from 'react'
// import './Navbarcss.css'

import './Home.css'


function Navbar() {
  return (
    <div>
       <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav__logo">SHAPE-UP</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="exercise" class="nav__link">Exercise</a></li>
                        <li class="nav__item"><a href="NutritionCheck" class="nav__link">Nutrition</a></li>
                        <li class="nav__item"><a href="Health" class="nav__link">Health-Metrics</a></li>

                        <li><i class='bx bx-toggle-left change-theme' id="theme-button"></i></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>
            </nav>
        </header>
    {/* <div class="header">
    <a href="#" class="logo">SHAPE UP</a>
    <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#Skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#cv">Resume</a>
    </nav>
    </div> */}
  </div>
  
  );
}

export default Navbar
