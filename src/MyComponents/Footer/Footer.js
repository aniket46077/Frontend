//import './style.css';
import React from 'react'

export default function Footer() {
  return (
    <div class="footer-dark">
    <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Internships</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Online Trainings </a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>InternshipYaari</h3>
                        <p>InternshipYaari is an internship and online training platform.The website helps students find internships with organisations in India</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">© Copyrights 2022 APNI YAARI EDUCATION PRIVATE LIMITED All rights reserved</p>
            </div>
    </footer>
</div>
  )
}
