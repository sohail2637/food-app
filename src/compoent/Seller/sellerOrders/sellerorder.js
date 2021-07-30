import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import axios from "axios";
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

const SellelrOrder = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [sellerpost, setSellerPost] = useState([]);
  const [newres, setRespons] = useState();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"))._id;
    axios
      .post("/searchbyseller", { id })
      .then((res) => {
        console.log("this is orders fro seller ", res.data);
        setSellerPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [newres]);

  const deliverOrder = (orderId) => {
    console.log("this is selle id", orderId);
    axios
      .post("/deleteorder", { orderId })
      .then((res) => {
        setRespons(res);
        console.log(res);
        swal(res.data.msg);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>DieshName</StyledTableCell>
              <StyledTableCell align="center">DieshPrize</StyledTableCell>
              <StyledTableCell align="center">Diesh Quantity</StyledTableCell>
              <StyledTableCell align="center">Contact No</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="left">Descraption</StyledTableCell>
              <StyledTableCell align="center">Deliver Order</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tablebody}>
            {sellerpost.map((item, index) => {
              return (
                <StyledTableRow>
                  {item.productId ? (
                    <>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={classes.titlesearch}
                      >
                        {item.productId.dishName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.recovered}
                      >
                        {item.productId.dishPrize}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.recovered}
                      >
                        {item.productId.dishQuantity}
                      </StyledTableCell>
                    </>
                  ) : (
                    <>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                        className={classes.titlesearch}
                      >
                        {" "}
                        This is custom Order
                      </StyledTableCell>
                      <StyledTableCell align="left" className={classes.deaths}>
                        {/* {item.contact} */}Spicial
                      </StyledTableCell>
                      <StyledTableCell align="left" className={classes.deaths}>
                        {/* {item.contact} */} Client
                      </StyledTableCell>
                    </>
                  )}
                  <StyledTableCell align="left" className={classes.deaths}>
                    {item.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.deaths}>
                    {item.address}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.deaths}>
                    {item.email}
                  </StyledTableCell>
                  <StyledTableCell align="left" className={classes.deaths}>
                    {item.description}
                  </StyledTableCell>

                  <StyledTableCell align="center" className={classes.cases}>
                    <Button
                      style={{
                        fontSize: "16px",
                        color: "#fff",
                        backgroundColor: "#f7abab",
                      }}
                      onClick={() => deliverOrder(item._id)}
                    >
                      Deliver
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SellelrOrder;
