import React from "react";
import classes from "src/components/about/OurTeam.module.scss";
import gmanager from "src/images/gmanager.png";
import rmanager1 from "src/images/rmanager1.png";
import rmanager from "src/images/rmanager.png";

function OurTeam() {
  return (
    <>
      <div className={classes.our_team_wrapper}>
        <p>Our team</p>
        <h1>The people behind the work</h1>
        <p className={classes.desc}>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
        <div className={classes.general_managers_wrapper}>
          <div className={classes.general_manager_element}>
            <img src={gmanager} alt="gm1" className={classes.gm_img} />
            <h4>Michael Scott</h4>
            <p>General Manager</p>
          </div>
          <div className={classes.general_manager_element}>
            <img src={gmanager} alt="gm2" className={classes.gm_img} />
            <h4>Michael Scott</h4>
            <p>General Manager</p>
          </div>
          <div className={classes.general_manager_element}>
            <img src={gmanager} alt="gm3" className={classes.gm_img} />
            <h4>Michael Scott</h4>
            <p>General Manager</p>
          </div>
        </div>
        <div className={classes.regional_managers_wrapper}>
          <div className={classes.regional_managers_row}>
            <div className={classes.regional_manager_element}>
              <div className={classes.regional_manager_img_wrapper}>
                <img
                  src={rmanager1}
                  alt="rm1"
                  className={classes.rm_img}
                  width="120px"
                  height="120px"
                />
              </div>
              <div>
                <h4>Dwight Schrute</h4>
                <p>General Manager</p>
              </div>
            </div>
            <div className={classes.regional_manager_element}>
              <div className={classes.regional_manager_img_wrapper}>
                <img
                  src={rmanager}
                  alt="rm2"
                  className={classes.rm_img}
                  width="120px"
                  height="120px"
                />
              </div>
              <div>
                <h4>Pam Beetsley</h4>
                <p>General Manager</p>
              </div>
            </div>
          </div>
          <div className={classes.regional_managers_row}>
            <div className={classes.regional_manager_element}>
              <div className={classes.regional_manager_img_wrapper}>
                <img
                  src={rmanager}
                  alt="rm3"
                  className={classes.rm_img}
                  width="120px"
                  height="120px"
                />
              </div>
              <div>
                <h4>Pam Beetsley</h4>
                <p>General Manager</p>
              </div>
            </div>
            <div className={classes.regional_manager_element}>
              <div className={classes.regional_manager_img_wrapper}>
                <img
                  src={rmanager}
                  alt="rm4"
                  className={classes.rm_img}
                  width="120px"
                  height="120px"
                />
              </div>
              <div>
                <h4>Pam Beetsley</h4>
                <p>General Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
