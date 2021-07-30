import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="Footerseccontainer">
              <div className="footercarditem flex">
                <div>
                  <Link to="/">
                    <img src="/webicon.jpeg" className="footerlogo" />
                  </Link>
                  <h4></h4>
                </div>
              </div>
              <div className="footercarditem ">
                <div className="flexcolum linkcontainer">
                  <div className="quicklink">
                    <h2>QUICK LINKS</h2>
                  </div>
                  <Link to="/">
                    <h4 className="footerlink">Home</h4>
                  </Link>
                  <Link to="/about">
                    <h4 className="footerlink">About</h4>
                  </Link>
                  <Link to="/contactus">
                    <h4 className="footerlink">Contact Us</h4>
                  </Link>
                </div>
              </div>
              <div className="footercarditem ">
                <div className="flexcolum linkcontainer">
                  <div className="quicklink">
                    <h2>Customer Support</h2>
                  </div>
                  <h4 className="footerlink">+92&nbsp;336&nbsp;4517676</h4>

                  <h4 className="footerlink">homefood00@gmail.com</h4>
                  <div className="quicklink">
                    <h2>Follow us on</h2>
                  </div>
                  <div className="flex footericonsbox">
                    <FacebookIcon style={{ fontSize: "2.5rem" }} />
                    <InstagramIcon style={{ fontSize: "2.5rem" }} />
                    <TwitterIcon style={{ fontSize: "2.5rem" }} />
                    <WhatsAppIcon style={{ fontSize: "2.5rem" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="footerdivide"></div>
            <div className="col-md-12">
              <div className="inner-content" style={{ padding: '15px 0px' }}>
                <p>
                  Copyright © 2020 Home Made Food Co., Ltd. - Design:{" "}
                  <a
                    rel="nofollow noopener"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
