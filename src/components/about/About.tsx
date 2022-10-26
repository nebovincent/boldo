import React from "react";
import TopComponent from "src/components/about/TopComponent";
import OurNumbers from "src/components/about/OurNumbers";
import OurStory from "src/components/about/OurStory";
import OurTeam from "src/components/about/OurTeam";
import OurBlog from "src/components/about/OurBlog";
import FootComponent from "src/components/about/FootComponent";

export default function About() {
  return (
    <>
      <TopComponent />
      <OurNumbers />
      <OurStory />
      <OurTeam />
      <OurBlog />
      <FootComponent />
    </>
  );
}
