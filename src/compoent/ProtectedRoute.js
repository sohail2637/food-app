import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};



// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isAuthenticated && !loading ? (
//         <Redirect to="/login" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
// export default connect(mapStateToProps)(PrivateRoute);