import React from "react";
import Footer from "../Footer/Footer";
import NaveBar from "../NaveBar/NaveBar";
import About from "./About/About";
import LandingPage from "./LandingPage/LandingPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ContactUs from "./ContactUs/ContactUs";
import LoginPage from "../Authentication/Login/LoginPage";
import SignupPage from "../Authentication/Signup/SignupPage";
import DetailViewProduct from "./Products/DetailviewProduct";
import ShippingOrder from "./Products/ShippingOrder";
import { PreloadedState } from "@reduxjs/toolkit";
// import Store from "../redux/Store";
import Seller from "./Seller/Seller";
import AddProducts from "./Seller/Addprodust/AddProduct";
import CartItems from "./cartItems/CartItems";
import AdminPanal from "../AdminPanal/AdminPanal";
import DetailsSeller from "../AdminPanal/DetailsSeller";
import DeliveryBoy from "../DeliveryBoy/DeliverBoy";
import BecomeSeller from "./BecomeSeller";
// import { loginuser } from "../redux/Store";

// import { useSelector } from "react-redux";
const Main = () => {
  // const data = useSelector((state) => state.loginuser);
  // console.log("main data off token", data);
  if (!localStorage.getItem("user")) {
    Redirect("/");
  }
  return (
    <div>
      <Router>
        {/* {localStorage.getItem("user") ? ( */}
        <NaveBar />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/viewproduct/:_id" exact component={DetailViewProduct} />
        <Route exact
          path="/shippingaddres/:referenceId/:productId"
          exact
          component={ShippingOrder}
        />
        <Route exact
          path="/shippingaddres/:referenceId"
          exact
          component={ShippingOrder}
        />
        {/* seller dashboard....... */}
        <Route path="/seller" exact component={Seller} />
        <Route path="/postproduct" component={AddProducts} />
        <Route path="/cartproducts" component={CartItems} />
        <Route path="/admin" component={AdminPanal} />
        <Route path="/aboutseller" component={DetailsSeller} />
        {/* <Route path="/delaveryboy" component={DeliveryBoy} /> */}
        <Route path="/sellerportal" component={BecomeSeller} />
        {/*  ) : ( //{" "}
         <Redirect to="/" />
          <Route path="/" exact component={LandingPage} />
        </>
         )} */}
        <Footer />
      </Router>
    </div>
  );
};

export default Main;

