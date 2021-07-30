import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Paper,Button,Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

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
const ComplainBox = () => {
    const classes = useStyles();
    const [value, setValue] = useState("");
  const [complains, setComplain] = useState([]);
  const [res, setRespons] = useState();
   
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("user"))._id;
        axios.post("/showcomplain")
      .then((res) => {
        console.log("this is orders fro seller ", res.data);
        setComplain(res.data);
      })
      .catch((error) => console.log(error));
    }, [res]);

    const ResolveComplain = (complainId) => {

    console.log("this is selle id", complainId);
        axios.post('/deletecomplain', { complainId }).then(res => {
          console.log(res);
          setRespons(res);
            swal(res.data.msg);
    } )
      .catch(error => console.log(error));
  };
    
    return (<div className={classes.root}>
      <div className={classes.roottable}>
        <div
          clasName={classes.employtitle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          
          <div>
            <Typography
              variant="h5"
              style={{ color: "#232323", textTransform: "uppercase" }}
            >
            Complains 
            </Typography>
          </div>
        </div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact No</StyledTableCell>
              <StyledTableCell align="center">Complain Text</StyledTableCell>
              <StyledTableCell align="center">Resolved</StyledTableCell>
              {/* <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Descraption</StyledTableCell>
              <StyledTableCell align="left">Deliver Order</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tablebody}>
            {complains.map((item, index) => {
              return (
                <StyledTableRow >
                  <StyledTableCell
                    align="center"
                    component="th"
                    scope="row"
                    className={classes.titlesearch}
                        >
                        {item.username}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.recovered}>
                    {item.email}  
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.recovered}>
                    {item.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center" className={classes.deaths}>
                    {item.complainText}
                  </StyledTableCell>
                  
                  <StyledTableCell align="center" className={classes.cases}>
                    <Button 
                      style={{ fontSize: "16px", color: "#fff", backgroundColor:'#f7abab' }}
                      onClick={() => ResolveComplain(item._id)}
                    >Resolved</Button>
                  </StyledTableCell>
                </StyledTableRow>
               );
            })} 
          </TableBody>
        </Table>
      </TableContainer>
</div>
    </div>
)
}

export default ComplainBox;