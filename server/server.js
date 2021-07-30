let express = require("express");
var cors = require("cors");
let myApp = express();
myApp.use(cors());
let fs = require("fs");
let path = require("path");

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/allData/uploads/");
  },
  filename: function (req, file, cb) {
    // console.log(file)
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
var nodemailer = require("nodemailer");

let BodyParser = require("body-parser");
myApp.use(BodyParser.json());

let config = require("./config");
let jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   // service: 'gmail',
//   auth: {
//     user: "",
//     pass: "",
//   },
// });

// var mailOptions = {
//   from: "",
//   to: "",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

let mongoose = require("mongoose");

let SiteUsers = require(".//db/models/users");
let Dish = require("./db/models/dish");
let Complain = require("./db/models/complain");
let Order = require("./db/models/order");

const { decode } = require("punycode");


// ............off line DB code
// mongoose.connect(
//   "mongodb://localhost:27017/Food",
//   (err, connection) => {
//     console.log(err || connection);
//   }
// );
// ........////....... online Db code
mongoose.connect(
  "mongodb+srv://123456sohail:123456sohail@cluster0.chxyr.mongodb.net/Food?retryWrites=true&w=majority",
  (err, connection) => {
    console.log(err || connection);
  }
);

// myApp.get('/', function(req, res){
//     res.end('Main')
// });

//==============Session Check==================
myApp.post("/checksession", async function (req, res) {
  console.log(req.body);
  var decoded = jwt_decode(req.body.token);
  if (decoded.id) {
    SiteUsers.findOne({ _id: decoded.id }, function (err, docs) {
      res.send(docs);
    });
  }
});

//==================SignUp===================
myApp.post("/signup", upload.single("image"), async function (req, res) {
  console.log(req.body);
  let user1 = await SiteUsers.findOne({
    email: req.body.email,
  });
  if (user1) {
    res.json({
      msg: "Email Already in Use",
    });
  } else {
    let userToken = { password: req.body.password };
    let token = jwt.sign(userToken, config.secret);
    console.log(token);
    let user = new SiteUsers();
    (user.fname = req.body.FirstName),
      (user.lname = req.body.LastName),
      (user.username = req.body.UserName),
      (user.contact = req.body.MobileNumber),
      (user.email = req.body.email),
      (user.password = token),
      (user.type = req.body.Type);
    req.file
      ? (user.sellerimage = req.file.originalname)
      : (user.sellerimage = "");

    req.body.type = "delivery boy"
      ? (user.deliverycontact = req.body.deliverycontact)
      : (user.deliverycontact = "");
    req.body.type = "delivery boy"
      ? (user.address = req.body.address)
      : (user.address = "");
    req.body.type = "delivery boy"
      ? (user.postalcode = req.body.postalcode)
      : (user.postalcode = "");

    await user.save();
    res.json({
      msg: "Signed Up...!",
    });
  }
});

//===================Login======================
myApp.post("/login", async function (req, res) {
  console.log(req.body);
  let user = await SiteUsers.findOne(
    {
      email: req.body.email,
    },
    function (err, docs) {
      if (docs) {
        console.log(docs._doc.password);
        var decoded = jwt_decode(docs._doc.password);
        console.log(decoded);
        if (decoded.password == req.body.password) {
          console.log("Password");

          let userToken = { id: docs._doc._id };
          jwt.sign(
            userToken,
            config.secret,
            {
              expiresIn: "6d",
            },
            (err, token) => {
              res.json({
                token,
                success: true,
                msg: "User Found",
                _id: docs._doc._id,
                username: docs._doc.username,
                password: docs._doc.password,
                email: docs._doc.email,
                contact: docs._doc.contact,
                type: docs._doc.type,
                Image: docs._doc.sellerimage,
              });
            }
          );
        } else {
          res.json({
            msg: "Wrong Password",
          });
        }
      } else {
        res.json({
          msg: "SignUp First..!",
        });
      }
      // res.send(err)||
    }
  );
});

//========================Post Food Item =======================
myApp.post(
  "/postproduct",
  upload.single("dishImage"),
  async function (req, res) {
    console.log(req.body);
    let dish = new Dish();
    (dish.referenceId = req.body.id),
      (dish.dishName = req.body.dishName),
      (dish.dishCategory = req.body.dishCategory),
      (dish.dishPrize = req.body.dishPrize),
      (dish.dishQuantity = req.body.dishQuantity),
      (dish.dishImage = req.file.originalname),
      (dish.dishdescription = req.body.description);
    await dish.save();
    res.json({
      msg: "Dish Saved",
    });
  }
);

//=======================List of all Dishes=================
myApp.post("/dishes", async function (req, res) {
  Dish.find({}, function (err, dishes) {
    res.send(dishes);
  });
});

//===================List of all Sellers====================
//=================Count orders of every seller=============
//===================pending task=================
myApp.post("/showsellers", async function (req, res) {
  let sendSeller = [];

  SiteUsers.find({ type: "seller" }, async function (err, sellers) {
    let fSellers = await Promise.all(
      sellers.map(async (seller) => {
        let sSeller = seller.toJSON();

        sSeller.orders = (await Order.find({ sellerId: seller._id })).length;
        console.log(sSeller.orders);
        sendSeller.push(sSeller);
        return seller;
      })
    );
    if (fSellers) {
      res.send(sendSeller);
    }
  });
});

//===================List of all Delivery Boys==============
myApp.post("/showdeliveryboys", async function (req, res) {
  SiteUsers.find({ type: "delivery boy" }, function (err, deliveryboys) {
    res.send(deliveryboys);
  });
});

//=================Return Food Item of specific Seller whose id will be provided
//=================in id variable=============================================
myApp.post("/sellerpost", async function (req, res) {
  let sendSeller = [];

  SiteUsers.findOne({ _id: req.body.id }, async function (err, seller) {
    console.log(seller);
    let sSeller = seller.toJSON();

    sSeller.reviews = (await Order.find({ sellerId: seller._id })).length;
    console.log(sSeller.reviews);
    sendSeller.push(sSeller);

    console.log(sendSeller);
    Dish.find({ referenceId: req.body.id }, function (err, sellerpost) {
      res.json({
        seller: sendSeller,
        post: sellerpost,
      });
    });
  });
});
//===================Delete Seller=====================================
myApp.post("/deleteseller", async function (req, res) {
  SiteUsers.find({ _id: req.body.sellerid }, async function (err, result) {
    if (result.length != 0) {
      SiteUsers.findByIdAndDelete(
        { _id: req.body.sellerid },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Deleted Seller : ", docs);
            res.json({
              msg: "Seller Deleted",
            });
          }
        }
      );
    } else {
      res.json({
        msg: "Seller Not Found",
      });
    }
  });
});

//====================Dlete Food Item===================
myApp.post("/deletpost", async function (req, res) {
  Dish.find({ _id: req.body.dishid }, async function (err, result) {
    if (result.length != 0) {
      Dish.findByIdAndDelete({ _id: req.body.dishid }, function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Deleted Post : ", docs);
          res.json({
            msg: "Dish Deleted",
          });
        }
      });
    } else {
      res.json({
        msg: "Dish Not Found",
      });
    }
  });
});

//===================Save User Complain==============
myApp.post("/usercomplain", async function (req, res) {
  console.log(req.body);
  let complain = new Complain();
  (complain.username = req.body.userName),
    (complain.email = req.body.email),
    (complain.contact = req.body.contactNumber),
    (complain.complainText = req.body.complainMsg);
  await complain.save();
  res.json({
    msg: "Complain Saved",
  });
});

//====================List of all Complains=============
myApp.post("/showcomplain", async function (req, res) {
  Complain.find({}, function (err, complains) {
    res.send(complains);
  });
});

//=====================Buyer Form==================
//==================Order specific Food Item==========
//=========returning seller info===================

myApp.post("/postorder", async function (req, res) {
  console.log(req.body);
  let order = new Order();
  order.sellerId = req.body.sellerId;
  if (!req.body.productId == "") {
    order.productId = req.body.productId;
  }
  (order.name = req.body.fullname),
    (order.email = req.body.email),
    (order.address = req.body.address),
    (order.contact = req.body.deliveryContact),
    (order.postalCode = req.body.postalCode),
    (order.description = req.body.description);
  await order.save();
  SiteUsers.findOne({ _id: req.body.sellerId }, async function (err, docs) {
    res.json({
      msg: "Order Saved",
      sellerInfo: docs,
    });
  });
});

//===================List of all Orders================
myApp.post("/showorder", async function (req, res) {
  await Order.find({})
    .populate("sellerId")
    .populate("productId")
    .exec(function (err, orders) {
      res.send(orders);
    });
});

//==================Delete Compplain by admin==================
myApp.post("/deletecomplain", async function (req, res) {
  await Complain.find(
    { _id: req.body.complainId },
    async function (err, result) {
      if (result.length != 0) {
        Complain.findByIdAndDelete(
          { _id: req.body.complainId },
          function (err, docs) {
            if (err) {
              console.log(err);
            } else {
              console.log("Deleted Complain : ", docs);
              res.json({
                msg: "Complain Rmoved",
              });
            }
          }
        );
      } else {
        res.json({
          msg: "Complain Not Found",
        });
      }
    }
  );
});

//===================If Buyer Remove his Order =============
myApp.post("/deleteorder", async function (req, res) {
  await Order.find({ _id: req.body.orderId }, async function (err, result) {
    if (result.length != 0) {
      await Order.findByIdAndDelete(
        { _id: req.body.orderId },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Deleted Order : ", docs);
            res.json({
              msg: "Order Removed",
            });
          }
        }
      );
    } else {
      res.json({
        msg: "Order Not Found",
      });
    }
  });
});

myApp.post("/searchbyseller", async function (req, res) {
  await Order.find({ sellerId: req.body.id })
    .populate("sellerId")
    .populate("productId")
    .exec(function (err, orders) {
      res.send(orders);
    });
});

myApp.post("/refraldish", async function (req, res) {
  let sendDishes = [];

  Dish.find({}, async function (err, dishes) {
    let fDishes = await Promise.all(
      dishes.map(async (dish) => {
        let sDishes = dish.toJSON();

        sDishes.orders = (await Order.find({ productId: dish._id })).length;
        console.log(sDishes.orders);
        sendDishes.push(sDishes);
        return dish;
      })
    );

    if (fDishes) {
      console.log(sendDishes);
      // res.send(sendSeller)
      let sortedList = sendDishes.sort(function (a, b) {
        return b.orders - a.orders;
      });
      console.log(sortedList);
      let requestedList = sortedList.slice(0, 5);
      res.send(requestedList);
    }
  });
});

myApp.post("/searchdishes", async function (req, res) {
  console.log(req.body.dishname);
  if (req.body.dishname == null) {
    Dish.find({}, function (err, dishes) {
      res.send(dishes);
    });
  } else {
    const regex = new RegExp(req.body.dishname, "i");
    Dish.find({ dishName: regex }, function (err, dishes) {
      res.send(dishes);
    });
  }
});

myApp.use(express.static("./server/allData/uploads"));
// myApp.use(express.static('./server/build'))

myApp.listen(process.env.PORT || 5060, function () {
  console.log("Server in Working State");
});
