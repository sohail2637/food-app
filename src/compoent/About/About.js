import React from "react";

function About() {
  return (
    <div>
      {/* Page Content */}
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                {/* <h4>about us</h4>
                <h2>our company</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .................. */}
      <div className="best-features about-features">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan ">
            <h2>Our Background</h2>
          </div>
        </div>

        <div className="container maincotan">
          <div className="row flex innercotan backgrodis">
            <div className="col-md-6 leftbackcard">
              <div className="left-image">
                <img src="/sliderimg/img3.jpeg" className="backgroundimg" alt />
              </div>
            </div>
            <div className="col-md-6 rightbackcard">
              <div className="right-content">
                <h4>Who we are &amp; What we do?</h4>
                <p className="rigthcarddis">
                  We are what we eat because each food we choose is a collection
                  of molecules of information-messages to the body. We digest or
                  breakdown the food into smaller units to help “run the
                  operations” of the body its all depend on your food what are
                  you eating and what is in your thouht . So here we planed
                  somting for you to give you a home-made pure food according to
                  your choice. you can order food of your choice and give a
                  custom order to any best seller . If you are looking for home
                  made food then you are on the right place . Contact us for
                  more info
                  <br />
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
                  {/* <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our Team .......... */}
      {/* <div className="team-members">
        <div className="col-md-12 maincotan">
          <div className="section-heading innercotan">
            <h2>Our Team Members</h2>
          </div>
        </div>

        <div className="container maincotan">
          <div className="row innercotan flex">
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_01.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Johnny William</h4>
                  <span>CO-Founder</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_02.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Karry Pitcher</h4>
                  <span>Product Expert</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_03.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Michael Soft</h4>
                  <span>Chief Marketing</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_04.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Mary Cool</h4>
                  <span>Product Specialist</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_05.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>George Walker</h4>
                  <span>Product Photographer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_06.jpg" alt />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Kate Town</h4>
                  <span>General Manager</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="services">
        <div className="container innercotan">
          <div className="row flex ">
            <div className="col-md-4 carditem">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear" />
                </div>
                <div className="down-content">
                  <h4>Product Management</h4>
                  <p>
                    We insure personaly that our product is according to
                    customer need
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear" />
                </div>
                <div className="down-content">
                  <h4>Customer Relations</h4>
                  <p>
                    Coustomer Relation is main priority for us to give them a
                    best deals. And resolve all their issues as soon as possible{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 carditem">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear" />
                </div>
                <div className="down-content">
                  <h4>Global Collection</h4>
                  <p>
                    As cusotomer Seller are also important to us. We definetly
                    Insure they are not facing any issue.
                  </p>
                </div>
              </div>
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
}

export default About;
