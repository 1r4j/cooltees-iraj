import React from 'react'
import logo2 from '../../assets/img/logo2.png';
import cr from '../../assets/img/cr.png';

export default function Footer() {
    return (
        <div><footer class="footer">
            <div class="footer-logo">
                <img src={logo2} alt="logo" />
            </div>

            <div class="about-us">
                <p class="info">
                    Premium Quality soft drinks, hot drinks, soda & energy drinks at the
                    best and most affordable price. we have a new offer every day for 365
                    days
                </p>
                <h2>Contact Us</h2>
                <p>E-maildrink@cooltees.com|hotline 1-800-007-7777</p>
            </div>
            <div class="copyright">
                <img src={cr} alt="copyright" />
            </div>
        </footer></div>
    )
};
