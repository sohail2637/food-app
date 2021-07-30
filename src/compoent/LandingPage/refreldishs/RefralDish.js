import React, { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
// import { useDispatch } from "react-redux";
// import { incrementCart } from "../../../redux/action";
// import FetchCartData from "../../../assets/data-file";
// import LocalForAge from "localforage";

const useStyles = makeStyles((theme) => ({
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
const Reaqumended = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: false,
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
    <div style={{ width: "80%", margin: "auto" }}>
      <h1> DEAL OF THE DAY</h1>
      <Slider {...settings}>
        {/* {FetchCartData.map((item) => { */}
        {/* return ( */}
        <div>
           </div>
      </Slider>
    </div>
  );
};

export default Reaqumended;
