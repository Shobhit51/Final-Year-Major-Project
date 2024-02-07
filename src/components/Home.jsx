import React from 'react'
import banner from "../assets/banner.png";
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/imag2.jpg";
import './Home.css'
function Home() {
  return (
    <div>
   
            <div class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__img">
                        <img src={banner} alt=""></img>
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">SHAPE-UP</h1>
                        <p class="home__description">We are here to help you to achieve your fitness dreams.</p>
                        <a href="#" class="button">Get Started</a>
                    </div>   
                </div>
            </div>

            <div class="share section bd-container" id="share">
                <div class="share__container bd-grid">
                    <div class="share__data">
                        <h2 class="section-title-center">Why Choose us </h2>
                        <p class="share__description">Our goal is to guide you to success while giving you the tools that will allow you to thrive! </p>
                        <a href="#" class="button">Create Account</a>
                    </div>

                    <div class="share__img">
                        <img src={logo3} alt=""></img>
                    </div>
                </div>
            </div>

            <section class="decoration section bd-container" id="decoration">
                <h2 class="section-title">Tools <br></br> For Your Goals</h2>
                <div class="decoration__container bd-grid">
                    <div class="decoration__data">
                        <img src={logo} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Exercise DataBase</h3>
                        <a href="#" class="button button-link">Check More</a>
                    </div>

                    <div class="decoration__data">
                    <img src={logo2} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Meal Planner</h3>
                        <a href="#" class="button button-link">Check More</a>
                    </div>

                    <div class="decoration__data">
                    <img src={logo} alt="" class="decoration__img"></img>
                        <h3 class="decoration__title">Nutrition</h3>
                        <a href="#" class="button button-link">Check More</a>
                    </div>
                    
                </div>
            </section>


            <footer class="footer section">
            <div class="footer__container bd-container bd-grid">
                {/* <div class="footer__content">
                    <h3 class="footer__title">
                        <a href="#" class="footer__logo">Shape up</a>
                    </h3>
                    <p class="footer__description">I sent a gift and it gives <br></br> happiness</p>
                </div> */}

                <div class="footer__content">
                    <h3 class="footer__title">Our Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Exercise log</a></li>
                        <li><a href="#" class="footer__link">Nutrition chart</a></li>
                        <li><a href="#" class="footer__link">BMR index metrics</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Our Company</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Blog</a></li>
                        <li><a href="#" class="footer__link">About us</a></li>
                        <li><a href="#" class="footer__link">Our mision</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Social</h3>
                    <ul>
                    <li><a href="#" class="footer__social"><i class='bx bxl-facebook-circle '></i>Facebook</a></li>
                    <li><a href="#" class="footer__social"><i class='bx bxl-twitter'></i>Instagram</a></li>
                    <li><a href="#" class="footer__social"><i class='bx bxl-instagram-alt'></i>Twitter</a></li>
                    </ul>
                </div>
            </div>

            <p class="footer__copy">&#169; 2023 Major Prooject . All right reserved</p>
            <p class="footer__copy">&#169;Developers:Shobhit Shrivastva & Rishabh Shrivastava</p>
        </footer>


     </div>
     )
}

export default Home
