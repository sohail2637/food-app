import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeliveryBoyPage from "./DeliveryBoyPage";
import "./Seller.css";
import axios from "axios";
import { sellerPost } from "../../redux/sellerReducer";
import swal from "sweetalert";
import SellelrOrder from "./sellerOrders/sellerorder";
import StarIcon from "@material-ui/icons/Star";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const style = {
  bttton: {
    lineHeight: "30px",
    fontSize: "24px",
    backgroundColor: "#fff",
    border: "1px solid #f7f7f7",

    ":hover": {
      backgroundColor: "#f33f3f",
    },
  },
};
const Seller = () => {
  const [sellerdishes, setSellerdishes] = useState([]);
  const [sellerpost, setSellerPost] = useState(false);
  const [sellerOrders, setSellerorder] = useState(true);
  const [newres, setRespons] = useState();
  const [reviews, setReviwes] = useState();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"))._id;

    axios
      .post("/sellerpost", { id })
      .then((res) => {
        console.log("this is dishe post by seller", res.data.seller);
        setSellerdishes(res.data.post);
        setReviwes(res.data.seller[0].reviews);
      })
      .catch((error) => console.log(error));
  }, [newres]);
  const removeproduct = (dishid) => {
    console.log({ dishid });
    axios
      .post("/deletpost", { dishid })
      .then((res) => {
        setRespons(res);
        console.log(res.data.msg);
        swal(res.data.msg);
      })
      .catch((error) => console.log(error));
  };
  const settingmain = {
    // dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
    <>
      <div>
        {/* Banner Starts Here */}
        <div className="banner header-text">
          <div style={{ width: "100%", margin: "auto" }}>
            <Slider {...settingmain}>
              <div>
                <img
                  src="/sliderimg/img2.jpeg"
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
                  src="/sliderimg/img3.jpeg"
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
                  src="/sliderimg/img4.jpeg"
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

        {/* Banner Ends Here */}
        {/* Display Card start */}
        <div className="cardcontainer">
          <div className="latest-products">
            <div className="">
              <div className="col-md-12">
                <div
                  className="section-heading"
                  style={{ width: "90%", margin: "auto" }}
                >
                  <div>
                    <button
                      style={{
                        backgroundColor: "#90D5FC",
                        color: "#fff",
                        border: "none",
                        margin: "0px 10px",
                        fontSize: "28px",
                        borderRadius: "8px",
                        padding: "5px",
                        fontWeight: "300",
                      }}
                      onClick={() => {
                        setSellerorder(true);
                        setSellerPost(false);
                      }}
                    >
                      Your order
                    </button>
                    <button
                      style={{
                        backgroundColor: "#90D5FC",
                        color: "#fff",
                        border: "none",
                        margin: "0px 10px",
                        fontSize: "28px",
                        borderRadius: "8px",
                        padding: "5px",
                        fontWeight: "300",
                      }}
                      onClick={() => {
                        setSellerPost(true);
                        setSellerorder(false);
                      }}
                    >
                      Your Post
                    </button>
                    <span
                      style={{
                        width: "40px",
                        height: "20px",
                        fontSize: "18px",
                        border: "2px solid #90D5FC",
                        padding: "12px",
                        borderRadius: "8px",
                      }}
                    >
                      Reviews:&nbsp;&nbsp;&nbsp;({reviews})
                      <StarIcon
                        style={{ fontSize: "26px", color: "#f33f3f" }}
                      />
                    </span>
                  </div>
                  <Link to="/postproduct">
                    <h3>
                      Add Post <i className="fa fa-angle-right" />
                    </h3>
                  </Link>
                </div>
              </div>
              {sellerOrders ? <SellelrOrder /> : null}

              {sellerpost ? (
                <div
                  className="row mainbox"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {sellerdishes.map((dish, index) => {
                    return (
                      <div className="col-md-4 carditem" key={index}>
                        <div className="product-item">
                          {/* <img src="/images/gallery/01.jpg" alt="iage not found" /> */}
                          <img
                            src={dish.dishImage}
                            alt="iage not found"
                            style={{ width: "90%", height: "250px" }}
                          />
                          <div className="down-content">
                            <div className="cardTitle">
                              <h4>{dish.dishName}</h4>
                              <h6>RS:&nbsp;&nbsp;{dish.dishPrize}</h6>
                            </div>
                            <p>{dish.dishdescription}</p>

                            {/* <ul className="stars">
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                            </ul>
                            <span>Reviews (24)</span> */}
                          </div>
                          <div className="col-lg-12" style={{ padding: "0px" }}>
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="filled-button col-lg-12"
                                name={dish.id}
                                style={style.bttton}
                                onClick={() => removeproduct(dish._id)}
                              >
                                Remove Post
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* Display Card end */}
      </div>
      <DeliveryBoyPage />
    </>
  );
};

export default Seller;
