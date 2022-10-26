import React from "react";
import classes from "src/components/about/OurNumbers.module.scss";

function OurNumbers() {
  return (
    <>
      <div className={classes.main_wrapper}>
        <div className={classes.our_numbers_desc_wrapper}>
          <p>Our numbers</p>
          <h1>Handshake infographic mass market crowdfunding iteration.</h1>
        </div>
        <div className={classes.numbers_wrapper}>
          <div className={classes.number_element}>
            <h1>120m</h1>
            <p>Cool feature title</p>
          </div>
          <div className={classes.number_element}>
            <h1>10.000</h1>
            <p>Cool feature title</p>
          </div>
          <div className={classes.number_element}>
            <h1>240</h1>
            <p>Cool feature title</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurNumbers;
