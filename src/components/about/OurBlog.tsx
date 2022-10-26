import React from "react";
import classes from "src/components/about/OurBlog.module.scss";

function OurBlog() {
  return (
    <>
      <div className={classes.our_blog_wrapper}>
        <p className={classes.title}>Our Blog</p>
        <h1 className={classes.title_desc}>
          Value proposition accelerator product management venture
        </h1>
        <hr />
        <div className={classes.desc}>
          <div className={classes.desc_row}>
            <h1>
              We are <span>committed.</span>
            </h1>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
          <div className={classes.desc_row}>
            <h1>
              We are <span>responsible.</span>
            </h1>
            <p>
              Mass market iPhone buzz conversion analytics stock iteration
              responsive web design user experience business plan handshake.
              Return on investment seed round MVP backing supply chain.
            </p>
          </div>
          <div className={classes.desc_row}>
            <h1>
              We aim for <span>progress.</span>
            </h1>
            <p>
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBlog;
