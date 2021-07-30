import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Grid, Box, Divider, Icon, Button, Input } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, useParams, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
// .......redux.....//
import { useDispatch, useSelector } from "react-redux";
// import { addtocart } from "../../redux/reducers/action";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Label } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainGrid2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  desBox: {
    textAlign: "left",
    margin: "10px 10px",
  },

  reviewBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    margin: "10px 0px",
  },
  reltedSlider: {
    // backgroundColor: "#edf5f2",
    maxWidth: "100%",
    minHeight: "160px",
    display: "flex",
    marginTop: "25px",
    overflow: "scroll",
  },
  relateinerbox: {
    width: "200px",
    hetght: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-Start",
  },
  backbtnbox: {
    width: "100px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DetailViewProduct(props) {
  const classes = useStyles();
  const history = useHistory();
  const { _id } = useParams();
  const [quantiety, setQuantiety] = useState(1);
  const [expanded, setExpanded] = React.useState(false);
  const [dishesdata, setDishesdata] = useState([]);
  const [refralsdish, setRefraldish] = useState([]);

  // const disheslist = useSelector((state) => state.cartItem.postitem
  // console.log("selector dishes list", state.cartItem.postitem);

  // );
  // const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const changquality = (e) => {
    if (e.target.value > 0) {
      setQuantiety(e.target.value);
    } else {
      setQuantiety(1);
    }
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 600,
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
  useEffect(() => {
    console.log("detail paroduct id", _id);
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
        // dispatch(sellerPost(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  const proid = dishesdata.filter((itme) => itme._id === _id);
  // console.log()
  // console.log("filtered id dish", proid);
  //   proid.map((dish) =>
  // }
  //   const viewItem = FetchCartData.filter((item) => item.id === +productId);
  return (
    <div style={{ overflow: "hidden", marginTop: "10%" }}>
      {dishesdata
        .filter((itme) => itme._id === _id)
        .map((dish) => {
          return (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} className={classes.mainGrid}>
                  <Box mt={2}>
                    <Card className={classes.root}>
                      {/* <CardHeader /> */}
                      <img src={`/${dish.dishImage}`} alt="iage not found" style={{height:'300px' }} />
                      {/* <CardMedia
                className={classes.media}
                title="Paella dish"
              ></CardMedia> */}
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {dish.dishName}{" "}
                        </Typography>
                      </CardContent>
                      <CardActions
                        disableSpacing
                        style={{ justifyContent: "space-between" }}
                      >
                        <IconButton
                          aria-label="add to favorites"
                          style={{
                            border: "1px solid #94a196",
                            backgroundColor: "#fff",
                          }}
                        >
                          <FavoriteIcon style={{ color: "#eb2636" }} />
                        </IconButton>
                        <Button
                          variant="outlined"
                          aria-expanded={expanded}
                          style={{
                            backgroundColor: "#232323",
                            color: "#fff",
                            borderRadius: "25px",
                          }}
                          className={classes.button}
                          // onClick={() => dispatch(addtocart(quantiety))}
                        >
                          <Link
                            to={`/shippingaddres/${dish.referenceId}/${dish._id}`}
                            style={{ color: "#fff" }}
                          >
                            Add to Cart
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>

                <Grid item md={6} sm={6} xs={12} className={classes.mainGrid2}>
                  <Box className={classes.desBox}>
                    <Box
                      className={classes.backbtnbox}
                      onClick={history.goBack}
                    >
                      <ArrowBackIosIcon />{" "}
                      <Typography variant="h5"> Back</Typography>
                    </Box>
                    <Typography variant="h4">{dish.dishName}</Typography>
                    <Divider
                      style={{ backgroundColor: "#ddd", margin: "10px 0px" }}
                    />
                    {/* <Box className={classes.reviewBox}>
              <StarBorderIcon style={{ color: "#f33f3f" }} />
              <StarBorderIcon style={{ color: "#f33f3f" }} />
              <StarBorderIcon style={{ color: "#f33f3f" }} />
              <StarBorderIcon style={{ color: "#f33f3f" }} />
              <StarBorderIcon style={{ color: "#f33f3f" }} />
              <Typography variant="h6">reviews</Typography>
            </Box> */}
                    <span>Quantitey&nbsp;&nbsp;</span>
                    {dish.dishQuantity}
                    {/* <Input
              variant="outlined"
              type="number"
              value={quantiety}
              onChange={(e) => changquality(e)}
            /> */}
                    <Typography variant="h5" className={classes.reviewBox}>
                      {" "}
                      Price Rs:&nbsp;&nbsp;{dish.dishPrize}
                    </Typography>
                    <Divider
                      style={{
                        backgroundColor: "#f33f3f",
                        height: "3px",
                        margin: "10px 0px",
                      }}
                    />
                    {/* <Typography variant="h6">Brand:Orgaic</Typography> */}
                    <Typography variant="h6">Avalibel</Typography>
                    <Typography variant="h5">Descraption</Typography>
                    <Typography paragraph>
                      {dish.dishdescription}

                      {/* Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil. */}
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </>
          );
        })}

      <Grid item md={12} sm={12} xs={12}>
        <Box className={classes.reltedSlider}>
          {refralsdish.map((dish, index) => {
            return (
              <>
                <Link to={`/viewproduct/${dish._id}`}>
                  {" "}
                  <Box className={classes.relateinerbox}>
                    <img
                      src={`/${dish.dishImage}`}
                      style={{ width: "150px", height: "150px" }}
                    />
                    <Typography variant="h6"> Product</Typography>
                    <Typography variant="body1">
                      Price&nbsp;:&nbsp;{dish.dishPrize}
                    </Typography>
                  </Box>
                </Link>
              </>
            );
          })}
        </Box>
      </Grid>
    </div>
  );
}
