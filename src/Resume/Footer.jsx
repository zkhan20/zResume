import React from 'react';
import './Footer.css'
function Footer () {
  return (
    <footer className="footer">
    <div>
        <h1>GET IN TOUCH</h1>
        <h4>khanzahed47@gmail.com</h4>
        <h4>+919175407986</h4>
    </div>
    <div id="btn-div">
        <button className="footer-btn">Movie Website</button>
        <button className="footer-btn">Ecom Website</button>
        <button className="footer-btn">Vediocalling Website</button>
        <button className="footer-btn">contact Website</button>
        <button className="footer-btn">Weather Website</button>
        <button className="footer-btn">Piano Website</button>
        <button className="footer-btn">Piano Website</button>
        <button className="footer-btn">Piano Website</button>
    </div>
    <div>
        <div>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
        <div id="copy">
            <p>@Copywrite Swaraj Chimurkar</p>
        </div>
    </div>


</footer>
  );
}

export default Footer;
