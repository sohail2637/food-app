import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Table, Box, Typography, Button } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";
// import FetchCartData from "/asserts/images/data/data-file.js";
// import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
  mainbox: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    "@media screen and (max-width: 650px)": {
      justifyContent: "flex-start",
    },
  },
  table: {
    marginTop: "40px",
    width: "1100px",
    borderCollapse: "collapse",
  },
  totalbox: {
    // width: "85%",
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#e0e0e0",
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTabthleRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CartItems() {
  //   const data = localforage.getItem("cartItemId");
  // const dispatch = useDispatch();
  const classes = useStyles();

  const [quantiety, setQuantiety] = useState(1);
  const [total, setTotal] = useState(0);

  // const productId = useSelector((state) => state.productId);

  // const Items = localforage.getItem("cartItemId").then((items) => {
  //   items.forEach((element) => {
  //     let cartData = FetchCartData.filter((item) => {
  //       return item.id === element;
  //     });
  //     console.log("cartData=====>", cartData);
  //   });
  // });

  return (
    <>
      {/* {data.length === 0 ? ( */}
      <Typography
        variant="h6"
        alignItems="center"
        style={{ color: "#6a8070", marginTop: "10%" }}
      >
        There is no item in cart
      </Typography>
      {/* ) : ( */}
      <Box>
        <TableContainer component={Paper} className={classes.mainbox}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ backgroundColor: "#edf5f2" }}>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Remove</StyledTableCell>
                <StyledTableCell align="center">ProductName</StyledTableCell>
                <StyledTableCell align="center">Uniteprice</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>

            {/* <TableBody> */}
            {/* orignal text */}
            {/* {FetchCartData.filter((item) => data.includes(item.id)).map( */}
            {/* spam text */}
            {/* {FetchCartData.map((item, index) => (
                  <StyledTableRow key={item.id} style={{ height: "125px" }}>
                    <StyledTableCell component="th" scope="row" align="center">
                      <Link to={`/viewproduct/${item.id}`}>
                        {" "}
                        <img
                          src={item.image}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      // style={{ border: "1px solid red" }}
                    >
                      <DeleteForeverIcon color="secondary" />
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.price}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Box
                        style={{
                          width: "150px",
                          height: "50px",
                          // border: "1px solid #d0d0d0",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <TextField
                            id={index}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            label="Quantiety"
                            type="number"
                            value={quantiety}
                            // onChange={chanquantiety}
                          />
                          {/* <Typography variant="h6"> {quantiety}</Typography>
                            <Box
                              style={{
                                width: "50px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            > */}
            {/* <span
                                key={item.id}
                                onClick={() => setQuantiety(quantiety + 1)}
                              >
                                <AddIcon fontSize="small" />
                              </span>
                              <span
                                key={item.id}
                                onClick={() =>(
                                  quantiety >= 2
                                    ? setQuantiety(quantiety - 1)
                                    : "")
                                }
                              >
                                <RemoveIcon fontSize="small" />
                              </span> */}
            {/* </Box>{" "}
                        </Box>
                      </Box>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {item.price * quantiety}
                    </StyledTableCell>
                  </StyledTableRow>
                ))} */}
          </Table>
        </TableContainer>
        <Box className={classes.totalbox}>
          <span style={{ fontSize: "22px", padding: "10px" }}>Grand total</span>
          <span style={{ fontSize: "22px", padding: "10px" }}>{total}</span>
          <Button>

          </Button>
        </Box>
      </Box>
      {/* )} */}
    </>
  );
}
