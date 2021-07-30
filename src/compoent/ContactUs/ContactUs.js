import React, { useState } from "react";
// import state from "sweetalert/typings/modules/state";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert";

const ContactUs = () => {
  const [state, setState] = useState({
    userName: "",
    email: "",
    contactNumber: "",
    complainMsg: "",
  });
  const history = useHistory();
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
    const id = JSON.parse(localStorage.getItem("user"))._id;
    setState({ ...state, sellerId: id });
    console.log(state);
    const data = state;
    // dispatch(shippingdata());

    axios
      .post("/usercomplain", state)
      .then((res) => {
        console.log("api respons: ", res.data);
        console.log("api respons: ", res.data);
        Swal(res.data.msg);
        history.push("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* Page Content */}
      <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                {/* <h4>contact us</h4>
                <h2>let’s get in touch</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="find-us">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan">
            <h2>Our Location on Maps</h2>
          </div>
        </div>
        <div className="container maincotan">
          <div className="row innercotan flex">
            <div className="col-md-8  mapcontan">
              <div id="map">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="330px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-md-4 mapdiscontan">
              <div className="left-content">
                <h4 style={{ color: "#f33f3f" }}>About our office</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti.
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="send-message">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan ">
            <h2>Send us a Message & Complains</h2>
          </div>
        </div>

        <div className="container maincotan">
          <div className="row innercotan flex">
            <div className="col-md-8 formcontan ">
              <div className="contact-form">
                <form id="contact" onSubmit={submationform}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="userName"
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Full Name"
                          onChange={handleChange}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          onChange={handleChange}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="contactNumber"
                          type="number"
                          className="form-control"
                          id="subject"
                          placeholder="ContactNumber"
                          onChange={handleChange}
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="complainMsg"
                          rows={6}
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          onChange={handleChange}
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 accordingcotan">
              <ul className="accordion">
                <li>
                  <a>Product Management</a>
                  <div className="content">
                    <p>
                      We insure personaly that our product is according to
                      customer need
                      <br />
                      <br />
                    </p>
                  </div>
                </li>
                <li>
                  <a>Customer Relations</a>
                  <div className="content">
                    <p>
                      Coustomer Relation is main priority for us to give them a
                      best deals.
                      <br />
                      <br />
                      And resolve all their issues as soon as possible{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <a>Seller Relations</a>
                  <div className="content">
                    <p>
                      As cusotomer Seller are also important to us.
                      <br /> We definetly Insure they are not facing any issue.
                      Thanks for our Partnership
                      <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="happy-clients flexcolum">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan ">
            <h2>Happy Partners</h2>
          </div>
        </div>
        <div className="container maincotan">
          <div className="row innercotan">
            <div className="col-md-10 flex happypartner">
              <div className="owl-clients owl-carousel flex">
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={1} />
                </div>
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={2} />
                </div>
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={3} />
                </div>
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={4} />
                </div>
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={5} />
                </div>
                <div className="client-item ">
                  <img src="assets/images/client-01.png" alt={6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
