import React from "react";
import aboutImage from "../assets/founder.png";
function About() {
  return (
    <div className="h-screen  pt-40 w-full px-60">
      <h1 className="text-7xl p-10 font-bold text-orange-600">About Me</h1>
      <div className="flex justify-between">
        <p className="text-2xl p-10  ">
          Hi, I’m Usman Ahmad, a dedicated WordPress developer with over two
          years of hands-on experience in creating engaging websites, online
          stores, and digital solutions that meet client needs. I’ve had the
          pleasure of building a variety of sites, from e-commerce platforms to
          professional agency pages, all while focusing on user experience and
          timely delivery. Currently, I’m expanding my skill set by diving into
          React, aiming to bring dynamic and interactive capabilities to my
          development toolkit. This journey is helping me broaden my expertise
          beyond WordPress, preparing me to deliver powerful, modern
          applications for web projects of all kinds. I’m passionate about
          crafting high-quality, reliable solutions and constantly learning to
          ensure each project exceeds expectations. If you’re looking for
          someone committed, detail-oriented, and eager to make a difference,
          I’d love to connect and bring your vision to life.
        </p>
        <img
          src={aboutImage}
          alt="About QR Generator"
          className="w-1/3 h-auto rounded-lg shadow-lg mt-6"
        />
      </div>
    </div>
  );
}

export default About;
