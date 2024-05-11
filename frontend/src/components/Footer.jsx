import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <hr style={{color:"#66fcf1"}}></hr>
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4 style={{fontFamily:"Montserrat",color:"#45a29e"}}>Find us</h4>
                  <span style={{fontFamily:"Montserrat"}}>Infront of BMC, Gautam Nagar, Kalpana | Bhubaneswar | Odisha | India</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4 style={{fontFamily:"Montserrat",color:"#45a29e"}}>Call us</h4>
                  <span style={{fontFamily:"Montserrat"}}>0674-3177093  (24*7 Support)</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4 style={{fontFamily:"Montserrat",color:"#45a29e"}}>Mail us</h4>
                  <span style={{fontFamily:"Montserrat"}}>support@rideus.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5" style={{marginLeft:"10px"}}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src="/images/logo.jpg" className="img-fluid" alt="logo" style={{width:"200px", marginTop:"30px"}}/></a>
                </div>
                <div className="footer-text">
                  <p style={{fontFamily:"Montserrat"}}>Rideus offers an unparalleled range of Self-Drive Vehicles in Odisha with a widerange of Cars to choose from.</p>
                </div>
                <div className="footer-social-icon" style={{marginTop:"25px"}}>
                  <span style={{fontFamily:"Montserrat",color:"#45a29e"}}>Follow us</span>
                  <Facebook style={{ color: 'silver' }} />
                  <Twitter style={{ color: 'silver' }} />
                  <Instagram style={{ color: 'silver' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area" style={{backgroundColor:"black"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left" >
              <div className="copyright-text">
                <p style={{fontFamily:"Montserrat", textAlign:"center"}}>Copyright &copy; 2024, All Right Reserved <a href="#">RideUs</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu" style={{backgroundColor:"black"}}>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
