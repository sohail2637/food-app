import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Landingpage.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Typography, Button, Input } from "@material-ui/core";
// import { sellerPost } from "../../redux/reducers/action";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sellerPost } from "../../redux/sellerReducer";
import OnlineSeller from "../Seller/OnlineSeller/OnlineSeller";
import Swal from "sweetalert";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  roottable: {
    maxWidth: "100%",
    margin: " 2% auto 2% auto",
    fontFamily: "sans-serif",
    color: "#fff",
  },
  employtitle: {
    width: "80%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchfield: {
    // maxWidth: "30%",
    margin: "15px 0px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ED4237",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "#f0665d",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    marginLeft: "-5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    maxWidth: "85%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  card1: {
    border: "1px solid #d0d0d0",
    heigth: "500px",
    backgroundColor: "#fff",
  },
  imagebox: {
    width: "100%",
    height: "250px",
    backgroundColor: "#f2fcff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hoverbtn: {
    display: "none",
    width: "150px",
    border: "1px solid 94a196",
    borderRadius: "25px",
    backgroundColor: "#c1edc0",
    color: "black",
    "&:hover": {
      backgroundColor: "#359c33",
      color: "#fff",
    },
  },
  desbox: {
    backgroundColor: "#f2fcff",
    display: "flex",
    marginTop: "15px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewbox: {
    display: "flex",
    // margin:"10px 0px",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff703",
  },
  buttonbox: {
    margin: "15px 0px",
    display: "flex",
    alignItems: "center",
  },
  cards: {
    minHeight: "150px",
    backgroundImage: "url(/images/img1.jpeg)",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  },
}));
const LandingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [dishname, setDishname] = useState([]);

  const [dishesdata, setDishesdata] = useState([]);
  const [refralsdish, setRefraldish] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [wrongsearch, setWrong] = useState(false);

  useEffect(() => {
    axios
      .post("/refraldish")
      .then((res) => {
        console.log("this is refral dishes", res.data);
        setRefraldish(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .post("/dishes")
      .then((res) => {
        console.log("this is dishes respons", res.data);
        setDishesdata(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const searchpro = (e) => {
    console.log(e.target.value);
    setDishname(e.target.value);
  };
  const getsearchitem = () => {
    console.log(searchData[0]);
    setWrong(true);
    axios
      .post("/searchdishes", { dishname })
      .then((res) => {
        console.log("search dish output", res.data);
        setSearchData(res.data);
        if (res.data.length == 0) {
          Swal("you search wrong item ");
        }
      })
      .catch((error) => console.log(error));
  };

  const settingmain = {
    // dots: true,
    infinite: true,
    swipeToSlide: true,
    arrows: false,
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

  const settingrefral = {
    // dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const settings = {
    // dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <div>
        {/* <Reaqumended/> */}

        {/* Display Card start */}
        <div className={classes.roottable}>
          <div
            // clasName={classes.employtitle}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              margin: "auto",
            }}
          >
            <div>
              <Typography
                variant="h5"
                style={{ color: "#232323", textTransform: "uppercase" }}
              >
                Search Product
              </Typography>
            </div>

            <div className={classes.searchfield}>
              <InputBase
                placeholder="Search…"
                value={dishname}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => searchpro(e)}
                inputProps={{ "aria-label": "search" }}
              />
              <div onClick={() => getsearchitem()}>
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
        {searchData[0] ? (
          <div className="searchdishcotainer">
            {searchData.map((dish, index) => {
              console.log("this is search map fun", dish);
              return (
                <div
                  className="product-item"
                  style={{ width: "320px" }}
                  key={index}
                >
                  <img
                    src={dish.dishImage}
                    alt="iage not found"
                    style={{ height: "250px" }}
                  />
                  <div className="down-content">
                    <div className="cardTitle">
                      <h4>{dish.dishName}</h4>
                      <h6>RS:&nbsp;&nbsp;{dish.dishPrize}</h6>
                    </div>
                    <p>{dish.dishdescription}</p>

                    <div
                      className="flex"
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ borderRadius: "50px", width: "30px" }}>
                        <FavoriteIcon
                          style={{ color: "#eb2636", fontSize: "50px" }}
                        />
                      </div>
                      <button
                        style={{
                          fontSize: "18px",
                          backgroundColor: "#6896c4",
                          color: "#fff",
                          borderRadius: "3px",
                          border: "none",
                        }}
                      >
                        <Link
                          to={`/viewproduct/${dish._id}`}
                          style={{ color: "#fff" }}
                        >
                          Detail View
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <h4 style={{ color: "#ddd" }}>Search Result</h4>
          </>
        )}

        <div className="cardcontainer">
          <div className="latest-products">
            <div className="container">
              <div className="col-md-12">
                {/* <div className="section-heading felxbox"> */}
                {/* <h2>Latest Meal</h2> */}
                {/* <Link href="products.html"> */}
                {/* view all products <i className="fa fa-angle-right" /> */}
                {/* </Link> */}
                {/* </div> */}
              </div>
              <div style={{ width: "100%", margin: "auto" }}>
                <h1 style={{ margin: "1rem 0 3rem 0" }}> Recommended Dishes</h1>
                <Slider {...settingrefral}>
                  {refralsdish.map((dish, index) => {
                    return (
                      <div
                        className="product-item"
                        style={{ width: "320px" }}
                        key={index}
                      >
                        <img
                          src={dish.dishImage}
                          alt="iage not found"
                          style={{ height: "250px" }}
                        />
                        <div className="down-content">
                          <div className="cardTitle">
                            <h4>{dish.dishName}</h4>
                            <h6>RS:&nbsp;&nbsp;{dish.dishPrize}</h6>
                          </div>
                          <p>{dish.dishdescription}</p>

                          <div
                            className="flex"
                            style={{
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ borderRadius: "50px", width: "30px" }}
                            >
                              <FavoriteIcon
                                style={{ color: "#eb2636", fontSize: "50px" }}
                              />
                            </div>
                            <button
                              style={{
                                fontSize: "18px",
                                backgroundColor: "#6896c4",
                                color: "#fff",
                                borderRadius: "3px",
                                border: "none",
                              }}
                            >
                              <Link
                                to={`/viewproduct/${dish._id}`}
                                style={{ color: "#fff" }}
                              >
                                Detail View
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#f7f7f7",
            marginTop: "40px",
            padding: "10px 0px",
          }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <div style={{ width: "100%", margin: "auto" }}>
              {/* <h1 style={{ margin: "3rem" }}> Our Manue's</h1> */}
              <Slider {...settings}>
                {dishesdata.map((dish, index) => {
                  return (
                    <div
                      className="product-item"
                      style={{ width: "320px" }}
                      key={index}
                    >
                      <img
                        src={dish.dishImage}
                        alt="iage not found"
                        style={{ height: "250px" }}
                      />
                      <div className="down-content">
                        <div className="cardTitle">
                          <h4>{dish.dishName}</h4>
                          <h6>RS:&nbsp;&nbsp;{dish.dishPrize}</h6>
                        </div>
                        <p>{dish.dishdescription}</p>

                        <div
                          className="flex"
                          style={{
                            width: "100%",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ borderRadius: "50px", width: "30px" }}>
                            <FavoriteIcon
                              style={{ color: "#eb2636", fontSize: "50px" }}
                            />
                          </div>
                          <button
                            style={{
                              fontSize: "18px",
                              backgroundColor: "#6896c4",
                              color: "#fff",
                              borderRadius: "3px",
                              border: "none",
                            }}
                          >
                            <Link
                              to={`/viewproduct/${dish._id}`}
                              style={{ color: "#fff" }}
                            >
                              Detail View
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    // </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        {/* <RefrelsDish /> */}
        {/* online sellers */}
        <OnlineSeller />
        {/* About Food Start */}
        <div className="aboutcontainer">
          <div className="best-features">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Our Discounted Deals</h2>
                  </div>
                </div>
                <div className="BestProductContainer">
                  <div className="leftcontainer">
                    <div className="left-content ">
                      <h4>Looking for the best products?</h4>
                      <p>
                        If you are looking for home made food then you are on
                        the right place . Contact us for more info.
                      </p>
                      <ul className="featured-list">
                        <li>
                          <a href="#">Recommended Deals</a>
                        </li>
                        <li>
                          <a href="#">Discounted Deals</a>
                        </li>
                        <li>
                          <a href="#">Pure Homemade Food</a>
                        </li>
                        <li>
                          <a href="#">At your Door Step</a>
                        </li>
                        <li>
                          <a href="#">Custom Order of your Chioce</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rightcotainer">
                    <div className="right-image">
                      <img src="/images/gallery/07.jpg" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Food end */}
        <div className="doseworkcotain">
          <div className="doseinercotain flexcolum">
            <div>
              <h1>How does it work?</h1>
              <h6 style={{ color: "#6A6666" }}>
                Delicious home made meals delivered to you in three easy steps
              </h6>
            </div>
            <div className="doseworkitemcontain flex">
              <div className="doseworkitem flexcolum">
                <img src="/workimg/search.png" style={{ width: "100px" }} />
                <h1>Discover</h1>
                <h6 style={{ color: "#6A6666" }}>
                  Discover delicious foods by HomeChefs across Karachi
                </h6>
              </div>
              <div className="doseworkitem flexcolum">
                <img src="/workimg/cart.svg" />
                <h1>Order</h1>
                <h6 style={{ color: "#6A6666" }}>
                  Select and order your favorite dishes
                </h6>
              </div>
              <div className="doseworkitem flexcolum">
                <img src="/workimg/plate.svg" />
                <h1>Enjoy</h1>
                <h6 style={{ color: "#6A6666" }}>
                  Enjoy a delicious homemade meal delivered right to your
                  doorstep
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="uniquecontent inner-content">
        <div className="uniqueinercontent">
          <div className="uniqueleftcontainer">
            <h4>
              Creative &amp; Unique <em>Sixteen</em> Products
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis amet elite author nulla.
            </p>
          </div>
          <div className="uniquerightcontainer">
            <a href="#" className="filled-button">
              Purchase Now
            </a>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default LandingPage;
