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
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
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

const DeliveryBoyPage = () => {
  const classes = useStyles();
  const [employ, setEmploy] = useState("Delivery Person");
  const [vender, setvender] = useState([]);
  useEffect(() => {
    axios
      .post("/showdeliveryboys")
      .then((res) => {
        console.log("this is delivery respons", res.data);
        setvender(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.roottable}>
        <div
          clasName={classes.employtitle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <div className={classes.searchfield}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              // value={value}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              // onChange={(e) => setValue(e.target.value)}
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
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Mobile Number</StyledTableCell>
                <StyledTableCell align="center">Phoun Number</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="center">Postal Code</StyledTableCell>
                {/* <StyledTableCell align="left">Status</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tablebody}>
              {vender ? (
                vender.map((data, index) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className={classes.titlesearch}
                      >
                        {data.fname}&nbsp;{data.lname}
                        {/* <SimpleModal country={val} /> */}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.recovered}
                      >
                        {data.email}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.recovered}
                      >
                        {data.contact}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.deaths}
                      >
                        {data.deliverycontact}
                      </StyledTableCell>
                      <StyledTableCell align="left" className={classes.deaths}>
                        {data.address}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        className={classes.deaths}
                      >
                        {data.postalcode}
                      </StyledTableCell>

                      {/* <StyledTableCell align="left" className={classes.cases}>
                      {data.status}
                    </StyledTableCell> */}
                    </StyledTableRow>
                  );
                })
              ) : (
                <StyledTableRow>
                  <p>there is now delivery person</p>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DeliveryBoyPage;
