import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  OutlinedInput,
  TextareaAutosize,
  Input,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

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
    width: "auto",
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
  uplodimg: {
    width: "320px",
    height: "350px",
  },
  detailbox: {
    width: "320px",
    margin: "auto",
  },
  orContainer: {
    color: theme.lightGray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 7,
  },
}));

const DeliveryBoy = () => {
  const classes = useStyles();
  const history = useHistory();
  const Dispatch = useDispatch();
  const [state, setState] = React.useState({
    Fullname: "",
    email: "",
    address: "",
    mobileNumber: "",
    PhouneNumber: "",
    postalcode: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    console.log({ [name]: event.target.value });
  };

  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
    const data = state;
    history.push("/");
    // const redux = Dispatch({ state });
    // axios
    //   .post("/signup", data)
    //   .then((res) => console.log("api respons: ", res));
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          {/* <Hidden xsDown> */}
          <Grid item xs={12} lg={6} className={classes.navBarContainer}>
            <div className={classes.RegisterContent}>
              <Box>
                <img
                  src="/images/simple-house-01.jpg"
                  className={classes.uplodimg}
                />
              </Box>
              <Box className={classes.detaibox}>
                <Typography variant="h6">Become a part of our team</Typography>
              </Box>
              <Box className={classes.boxContainer}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Spartan",
                    color: "#232323",
                  }}
                >
                  Our services:&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#f33f3f" }}>7/24</span>
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "Spartan",
                    color: "#232323",
                  }}
                >
                  Work honestly with our team and get best ravienew
                </Typography>
              </Box>
            </div>
          </Grid>
          {/* </Hidden> */}

          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              <form onSubmit={submationform}>
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Full Name
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  required
                  onChange={handleChange}
                  name="Fullname"
                  placeholder="Full Name"
                  id="outlined-helperText"
                  variant="outlined"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    Mobile Number
                  </label>
                </Typography>
                <OutlinedInput
                  type="tel"
                  fullWidth
                  id="outlined-helperText"
                  onChange={handleChange}
                  required
                  name="mobileNumber"
                  placeholder="Mobile number"
                  pattern="[0-9]{3}-&nbsp;[0-9]{2}-[0-9]{3}"
                  variant="outlined"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    Phoune Number
                  </label>
                </Typography>
                <OutlinedInput
                  type="tel"
                  fullWidth
                  id="outlined-helperText"
                  onChange={handleChange}
                  name="PhouneNumber"
                  placeholder="Phoune number/ optional"
                  pattern="[0-9]{3}-&nbsp;[0-9]{2}-[0-9]{3}"
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  id="outlined-helperText"
                  required
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  variant="outlined"
                />
                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Address
                  </label>
                </Typography>
                <TextField
                  fullWidth
                  required
                  onChange={handleChange}
                  name="address"
                  placeholder="Address"
                  id="standard-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Typography style={{ marginTop: "1rem", textAlign: "left" }}>
                  <label for="fname" className={classes.inputLbel}>
                    Postal Code
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  type="number"
                  onChange={handleChange}
                  name="postalcode"
                  placeholder="Postal Code"
                  required
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Button
                  fullWidth={true}
                  type="submit"
                  className={classes.seeBtn}
                  fullWidth
                >
                  Continue Shipping
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
        </Grid>
      </div>
    </div>
  );
};
export default DeliveryBoy;
