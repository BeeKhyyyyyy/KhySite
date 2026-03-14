/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bg.jpg";

const imageAltText = "A car parked in front of an establishment during nighttime";
const fadeMask = "linear-gradient(to bottom, #000 85%, transparent 100%)";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src={image}
        style={{
          opacity: 1.0,
          WebkitMaskImage: fadeMask,
          maskImage: fadeMask,
        }}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "17rem",
          color: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <h1 style={{ fontWeight: 400 }}>{name}</h1>
        <h2 style={{ fontWeight: 300 }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
