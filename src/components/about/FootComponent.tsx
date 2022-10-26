import React, { useState } from "react";
import classes from "src/components/about/FootComponent.module.scss";
import logo from "src/images/logo.png";

function FootComponent() {
  const [emailInput, setEmailInput] = useState("");
  const submitEmail = (e: any) => {
    e.preventDefault();
    //send email to backend api
    setEmailInput("");
  };
  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.email_subs_bg}>
          <div className={classes.circular_design}></div>
          <div className={classes.email_subs_bg_context}>
            <h1>An enterprise template to ramp up your company website</h1>
            <div className={classes.email_sub_elements}>
              <form onSubmit={submitEmail}>
                <input
                  type="text"
                  placeholder="Your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <button type="submit">Start now</button>
              </form>
            </div>
          </div>
        </div>
        <div className={classes.footer_wrapper}>
          <div className={classes.desc_wrapper}>
            <img src={logo} alt="footer_logo" width="156px" height="41px" />
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p>All rights reserved.</p>
          </div>
          <div className={classes.footer_nav_wrapper}>
            <p>Landings</p>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className={classes.footer_nav_wrapper}>
            <p>Company</p>
            <p>Home</p>
            <p>
              Careers <span>Hiring!</span>
            </p>
            <p>Services</p>
          </div>
          <div className={classes.footer_nav_wrapper}>
            <p>Resources</p>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FootComponent;
