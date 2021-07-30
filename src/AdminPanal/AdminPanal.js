import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import SimpleModal from "./detailModel";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Typography } from "@material-ui/core";
import DeliveryBoyPage from "../compoent/Seller/DeliveryBoyPage";
import { useSelector } from "react-redux";
import axios from "axios";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ComplainBox from "./ComplainBox";
import ClientList from "./ClientList";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "90%",
    margin: "4% auto",
  },
  paper: {
    padding: theme.spacing(2),
    height: "150px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    ":focus": {
      backgroundColor:'#f7d7e6',
    },
  },
  title: {
    color: "#3F51B5",
    textTransform: "uppercase",
  },
  roottable: {
    maxWidth: "100%",
    margin: " 3% auto 6% auto",
    fontFamily: "sans-serif",
    color: "#fff",
  },

  papersearch: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#fff",
  },
  titlesearch: {
    color: "#007bff",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "700",
  },
  recovered: {
    // backgroundColor: "#BCE5BA",
    borderLeft: "2px solid #fff",
  },
  deaths: {
    // backgroundColor: "#F5B3B1",
    borderLeft: "2px solid #fff",
  },
  cases: {
    // backgroundColor: "#ABE9ED",
    borderLeft: "2px solid #fff",
  },
  active: {
    // backgroundColor: "#B3DDEF",
    borderLeft: "2px solid #fff",
  },
  critical: {
    // backgroundColor: "#FBF2E9",
    borderLeft: "2px solid #fff",
  },
  employtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchfield: {
    maxWidth: "30%",
    margin: "15px 0px",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#EEEEEE",
    "&:hover": {
      backgroundColor: "#a7acb8",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // cursor:"pointer",
  },
  tablebody: {
    minHeight: "400px",
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
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#243028",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AdminPanal = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [employ, setEmploy] = useState("seller");
  const viewInfo = (employ) => {
    setEmploy(employ);
    console.log(employ);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("seller")}
          >
            <h3 className={classes.title}> Seller </h3>
            {/* <h3> 4344434</h3> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("deliverboy")}
          >
            <h3 className={classes.title}> Deliver boy </h3>
            {/* <h3> 23423</h3> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("client")}
          >
            <h3 className={classes.title}> client </h3>
            {/* <h3> 234234</h3> */}
          </Paper>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => viewInfo("Complain")}
          >
            <h3 className={classes.title}> complainS </h3>
            {/* <h3> 234234</h3> */}
          </Paper>
        </Grid>
      </Grid>

      <div className={classes.roottable}>
        <div
          clasName={classes.employtitle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {employ === "seller" ? (
            <>
              {/* <div className={classes.searchfield}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  value={value}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={(e) => setValue(e.target.value)}
                  inputProps={{ "aria-label": "search" }}
                />
              </div> */}

              <div>
                <Typography
                  variant="h5"
                  style={{ color: "#232323", textTransform: "uppercase" }}
                >
                  {employ}
                </Typography>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <Admindata status={employ} />
      </div>
    </div>
  );
};

export default AdminPanal;

const Admindata = ({ status }) => {
  const classes = useStyles();
  const [res, setRespons] = useState();

  const [sellerdata, setSellerdata] = useState([]);
  useEffect(() => {
    axios
      .post("/showsellers")
      .then((res) => {
        console.log("this is seller list ", res.data);
        setSellerdata(res.data);
      })
      .catch((error) => console.log(error));
  }, [res]);
  const deleteseller = (sellerid) => {
    console.log("this is selle id", sellerid);
    axios.post('/deleteseller', {sellerid}).then(res => {
      console.log(res);
      setRespons(res)
      swal(res.data.msg);
    })
      .catch(error => console.log(error));
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#243028",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  if (status === "seller") {
    return (
      <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Profile Pic</StyledTableCell>
              <StyledTableCell align="center">Full Name</StyledTableCell>
              <StyledTableCell align="center">Orders</StyledTableCell>
              <StyledTableCell align="center">Contact No</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tablebody}>
            {sellerdata.map((item, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    align="center"
                    component="th"
                    scope="row"
                    className={classes.titlesearch}
                  >
                    <img
                      src={item.sellerimage}
                      alt="image not found"
                      style={{ width: "100px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.recovered}>
                    {item.fname} &nbsp;&nbsp;{item.lname}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.recovered}>
                    {item.orders}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.deaths}>
                    {item.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.deaths}>
                    {item.email}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.cases}>
                    <DeleteForeverIcon
                      style={{ fontSize: "40px", color: "#f33f3f" }}
                      onClick={() => deleteseller(item._id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table> 
      </TableContainer>
    );
  } else if (status === "deliverboy") {
    return <DeliveryBoyPage />;
  } else if (status === "client") {
    return <ClientList/>
  }
  else if (status === "Complain") {
    return<ComplainBox/>
  }
};
