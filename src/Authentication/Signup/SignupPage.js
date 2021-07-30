import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  Box,
  OutlinedInput,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect, useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import swal from "sweetalert";


import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // height: "120vh",
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
  uplodimg: {
    width: "350px",
    height: "350px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    Firstname: "",
    LastName: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
    image: "",
    type: "",
    address: "",
    mobileNumber: "",
    PhouneNumber: "",
    postalcode:'',
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
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
      setState({
        ...state,
        image: img,
      });
      console.log("state imag ", state);
    }
  };
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const submationform = (event) => {
    event.preventDefault();
    console.log(state);
    const data = state;
    const formdata = new FormData();
    // formdata.append('data', state);
    formdata.append("FirstName", state.Firstname);
    formdata.append("LastName", state.LastName);
    formdata.append("UserName", state.userName);
    formdata.append("email", state.email);
    formdata.append("MobileNumber", state.mobileNumber);
    formdata.append("deliverycontact", state.PhouneNumber);
    formdata.append("password", state.password);
    formdata.append("Type", state.type);
    formdata.append("image", state.image);
    formdata.append('postalcode', state.postalcode);
    formdata.append("address", state.address);
    console.log("formdata is this", formdata.get("image"));
    axios
      .post("/signup", formdata, config)
      .then((res) => {
        console.log("api respons: ", res);
        history.push("/login");
        console.log({ res });
      })
      .catch((error) => swal(error));
  };

  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.formContainer}>
            <Container maxWidth="md">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={submationform}>
                <Typography
                  variant="h6"
                  style={{ textAlign: "left", marginTop: "1rem" }}
                >
                  <label for="fname" className={classes.inputLbel}>
                    First Name
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  name="Firstname"
                  fullWidth
                  required
                  placeholder="First Name"
                  id="outlined-helperText"
                  variant="outlined"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Last Name
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  name="LastName"
                  required
                  fullWidth
                  placeholder="Last Name"
                  id="outlined-helperText"
                  variant="outlined"
                />
                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Username
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  name="userName"
                  fullWidth
                  required
                  placeholder="User Name"
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
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    Email
                  </label>
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Email"
                  id="outlined-helperText"
                  required
                  variant="outlined"
                  onChange={handleChange}
                  name="email"
                />

                <Typography
                  variant="h6"
                  style={{ marginTop: "1rem", textAlign: "left" }}
                >
                  {" "}
                  <label for="fname" className={classes.inputLbel}>
                    password
                  </label>
                </Typography>

                <TextField
                  onChange={handleChange}
                  name="password"
                  fullWidth
                  placeholder="password"
                  required
                  type="password"
                  id="outlined-helperText"
                  variant="outlined"
                />
                <FormControl className={classes.formControl}>
                  <Typography
                    variant="h6"
                    textAlign="left"
                    style={{ marginTop: "1rem", textAlign: "left" }}
                  >
                    {" "}
                    <label for="fname" className={classes.inputLbel}>
                      Type
                    </label>
                  </Typography>
                  <Select
                    native
                    placeholder="buyer"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    inputProps={{
                      name: "type",
                      id: "age-native-simple",
                    }}
                  >
                    <option value=""></option>
                    <option value="buyer">buyer</option>
                    <option value="seller">seller</option>
                    <option value="delivery boy">delivery boy</option>
                  </Select>
                </FormControl>

                {state.type === "seller" ? (
                  <>
                    <Typography
                      variant="h6"
                      style={{ marginTop: "1rem", textAlign: "left" }}
                    >
                      {" "}
                      <label for="fname" className={classes.inputLbel}>
                        Profile Image
                      </label>
                    </Typography>

                    <TextField
                      fullWidth
                      type="file"
                      variant="outlined"
                      required
                      accept="image/png, image/jpeg"
                      name="image"
                      onChange={(event) => onImageChange(event)}
                    />
                  </>
                ) : (
                  ""
                )}
                {state.type === "delivery boy" ? (
                  <>
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
                    <Typography
                      style={{ marginTop: "1rem", textAlign: "left" }}
                    >
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
                    <Typography
                      style={{ marginTop: "1rem", textAlign: "left" }}
                    >
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
                  </>
                ) : (
                  ""
                )}
                <Button
                  type="submit"
                  fullWidth={true}
                  className={classes.seeBtn}
                  fullWidth
                >
                  Submit
                </Button>
              </form>

              <Box className={classes.orContainer}>
                <div className={classes.firstLine} />
                <span style={{ paddingRight: 20, paddingLeft: 20 }}>OR</span>
                <div className={classes.firstLine} />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Typography>
                  Already have account? <Link to="/login">Login</Link>
                </Typography>
              </Box>
              {/* </div> */}
            </Container>
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} lg={6} className={classes.navBarContainer}>
              <div className={classes.RegisterContent}>
                <Box>
                  {state.image ? (
                    <img
                      src={URL.createObjectURL(state.image)}
                      className={classes.uplodimg}
                    />
                  ) : (
                    <img
                      src="/webicon.jpeg"
                      className={classes.uplodimg}
                    />
                  )}
                </Box>
                <Box className={classes.boxContainer}>
                  <Typography
                    style={{
                      fontSize: "36px",
                      fontFamily: "Spartan",
                      color: "#f33f3f",
                    }}
                  >
                    Our Priority is your{" "}
                  </Typography>
                  <Typography className={classes.security}>taste</Typography>
                </Box>
                <Box>
                  <Typography
                    style={{
                      color: "#232323",
                      fontSize: "18px",
                      lineHeight: "40px",
                    }}
                  >
                    Get pure home made food
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
export default SignupPage;
