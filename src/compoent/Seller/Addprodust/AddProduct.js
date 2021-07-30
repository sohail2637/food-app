import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  TextareaAutosize,
  FormControl,
  Select,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
// import { sellerpost } from "../../../redux/reducers/action";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  navBarContainer: {
    width: "100%",

    backgroundSize: "cover",
    backgroundPosition: "center",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(/assets/images/registerimg.png)",
  },
  formContainer: {
    marginTop: "4rem",
    marginBottom: "3rem",
    paddingLeft: "10rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
    },

    paddingRight: "10rem",
  },
  inputLbel: {
    paddingLeft: "0.8rem",
    fontSize: "14px",
    color: "#243028",
  },

  seeBtn: {
    backgroundColor: "#232323",
    width: "100%",
    textTransform: "capitalize",
    borderRadius: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
    // marginLeft: "0.5rem",
    "&:hover": {
      backgroundColor: "#f33f3f",
    },
  },
  firstLine: {
    backgroundColor: "red",
    width: "117px",
    height: "0px",
    // marginTop: "3rem",
    border: "0.5px solid #555555",
  },

  RegisterContent: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 70,
    paddingBottom: 100,
  },

  security: {
    fontSize: "64px",
    fontFamily: "Spartan",
    color: "#232323",
    lineHeight: 1,
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      fontWeight: "500",
    },
  },
  boxContainer: {
    width: "320px",
    textAlign: "left",
    height: "auto",
    border: "1px solid #f33f3f",
    marginTop: "1rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.4rem",
    },
  },
  orContainer: {
    color: theme.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 7,
  },
  formControl: {
    width: "100%",
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  uplodimg: {
    width: "350px",
    height: "350px",
  },
}));

const AddProducts = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    id: "",
    DishName: "",
    Price: 0.0,
    quantity: "sigle plate",
    description: "",
    image: "",
    dishCategory: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };

  const onImageChange = (event) => {
    event.preventDefault();
    const sellerid =JSON.parse(localStorage.getItem('user'))._id;
    console.log("this is seller is from add product", sellerid);
    setState({...state,id:sellerid})
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setState({
        ...state,
        image: img,
      });
    }
  };
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const submationform = (event) => {
    event.preventDefault();
    const userid = JSON.parse(localStorage.getItem('user'))._id;
    setState({
      ...state,
      id: userid,
    });
    const data = state;

    const formdata = new FormData();
    formdata.append("id", state.id);
    formdata.append("dishName", state.DishName);
    formdata.append("dishPrize", state.Price);
    formdata.append("dishQuantity", state.quantity);
    formdata.append("dishCategory", state.dishCategory);
    formdata.append("dishImage", state.image)
    formdata.append("description", state.description);
    axios
      .post("/postproduct", formdata, config)
      .then((res) => {
        swal(res.data.msg);
        // dispatch(sellerpost(state));
        console.log(res);
        history.push("/seller");
      })
      .catch(
        (error) => 
        swal(error)
      );
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          {/* <Grid item xs={12} lg={12} className={classes.formContainer}>
          <Box className={classes.backbtnbox} onClick={history.goBack}>
            <ArrowBackIosIcon /> <Typography variant="h5"> Back</Typography>
            </Box>
            </Grid> */}
          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              <form onSubmit={submationform}>
                {/* .......image upload....... */}
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Image
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  required
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={(event) => onImageChange(event)}
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Dish Name
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  onChange={(event) => handleChange(event)}
                  name="DishName"
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Price
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  name="Price"
                  required
                  onChange={(event) => handleChange(event)}
                  type="number"
                  id="outlined-helperText"
                  variant="outlined"
                />
                <FormControl className={classes.formControl}>
                  <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                    <label for="fname" className={classes.inputLbel}>
                      Quantity
                    </label>
                  </Typography>
                  <Select
                    native
                    required
                    name="quantity"
                    variant="outlined"
                    value={state.quantity}
                    onChange={(event) => handleChange(event)}
                    inputProps={{
                      id: "age-native-simple",
                    }}
                  >
                    <option value="sigle plate">single Plate</option>
                    <option value="half plate">half Plate</option>
                    <option value="double plate">double Plate</option>
                    <option value="one person">one person</option>
                  </Select>
                </FormControl>
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Descraption
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  onChange={(event) => handleChange(event)}
                  name="description"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button
                  fullWidth={true}
                  type="submit"
                  className={classes.seeBtn}
                  fullWidth
                >
                  Post Product
                </Button>
              </form>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              ></Box>
              {/* </div> */}
            </Container>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} lg={6} className={classes.navBarContainer}>
              <div className={classes.RegisterContent}>
                <Box>
                  <img
                    // src={imagepath}
                    className={classes.uplodimg}
                    alt="Not image Upload"
                  />
                </Box>
                <Box>
                  <Typography variant="h6">{state.DishName}</Typography>
                </Box>
                <Box className={classes.boxContainer}>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Quantity:&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.quantity}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Total:&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#f33f3f" }}>{state.Price}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Spartan",
                      color: "#232323",
                    }}
                  >
                    Descraption:
                  </Typography>
                  <Typography variant="body1" style={{ color: "#232323" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;{state.description}
                  </Typography>
                </Box>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};
export default AddProducts;
