import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import KitchenSharpIcon from "@material-ui/icons/KitchenSharp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function BecomeSeller() {
  const [sellerdata, setSellerdata] = useState([]);
  useEffect(() => {
    // const id = JSON.parse(localStorage.getItem("user"))._id;

    axios
      .post("/showsellers")
      .then((res) => {
        console.log("this is seller list ", res.data);
        setSellerdata(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const settingmain = {
    // dots: true,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="banner header-text">
        <div style={{ width: "100%", margin: "auto" }}>
          <Slider {...settingmain}>
            <div>
              <img
                src="/sliderimg/img6.jpeg"
                alt="image not foud"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "90vh",
                }}
              />
            </div>
            <div>
              <img
                src="/sliderimg/img7.jpeg"
                alt="image not foud"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "90vh",
                }}
              />
            </div>
            <div>
              <img
                src="/sliderimg/img8.jpeg"
                alt="image not foud"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "90vh",
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* carosl.... end .... */}
      {/* our Team .......... */}
      <div className="team-members">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan">
            <h2>Our Best Seller</h2>
          </div>
        </div>
        <div className="container maincotan">
          <div className="row innercotan flex">
            {/* become seller start */}
            <div className="col-md-4 carditem" style={{ marginTop: "0px" }}>
              <div
                className="team-member"
                style={{
                  backgroundColor: "#f7f7f7",
                  height: "450px",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <div className="down-content">
                    <h1>
                      {" "}
                      <KitchenSharpIcon
                        style={{ fontSize: "75px", color: "#243028" }}
                      />
                    </h1>
                    <h1>Start onlie selling</h1>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <Link to="/signup">
                        <button
                          id="form-submit"
                          className="filled-button"
                          style={{
                            fontSize: "28px",
                            padding: "10px",
                            borderRadius: "10px",
                            backgroundColor: "#1a6692",
                            color: "#fff",
                          }}
                        >
                          Become a seller/buyer
                        </button>
                      </Link>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            {/* become seller end */}
            {sellerdata.map((seller, index) => {
              return (
                <>
                  <div className="col-md-4 carditem">
                    <div className="team-member">
                      <div className="thumb-container">
                        <img src={seller.sellerimage} style={{height:'280px'}} alt='image not found' />
                        <div className="hover-effect">
                          {/* <div className="hover-content">
                            <ul className="social-icons">
                              <li>
                                <a href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-behance" />
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                      <div className="down-content">
                        <h4>{seller.fname}</h4>
                        <span>{seller.contact}</span>
                        <span style={{ color: "#000" }}>{seller.email}</span>
                        {/* <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          itaque corporis nulla.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_03.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Michael Soft</h4>
                  <span>Chief Marketing</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_04.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Mary Cool</h4>
                  <span>Product Specialist</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeSeller;
