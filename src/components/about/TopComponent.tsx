import React from "react";
import classes from "src/components/about/TopComponent.module.scss";
import logo from "src/images/logo.png";

function TopComponent() {
  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.top_nav_wrapper}>
          <div className={classes.logo_wrapper}>
            <img src={logo} alt="" className={classes.logo_img} />
          </div>
          <div className={classes.nav_elements_wrapper}>
            <p>Product</p>
            <p>Services</p>
            <p>About</p>
            <p>Login</p>
          </div>
        </div>
        <div className={classes.about_desc_wrapper}>
          <p>About</p>
          <div className={classes.about_desc}>
            <h1>We love to make great things, things that matter.</h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopComponent;
