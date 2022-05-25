import React from "react";
import banner from "../Images/banner.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Thanks for playing!</h1>
      <img src={banner} alt="Retro Banner" className="banner" />
    </div>
  );
};
export default Footer;
