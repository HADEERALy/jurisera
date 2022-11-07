import React, { useEffect, useState } from "react";
import "./About.css";
import background from "./../../assets/images/background_line.svg";
import axios from "axios";

const About = (props) => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    // console.log("nav ", props.history.location.state?.selected_div);
    // if (props.history.location.state?.selected_div == "about-up") {
    //   const divElement = document.getElementById("about-up");
    //   divElement.scrollIntoView({ behavior: "smooth" });
    // }
    aboutUs();
  }, []);

  const aboutUs = () => {
    axios
      .get("https://jurisera.bit68.com/api/about/")
      .then((res) => {
        console.log("resss about", res.data);
        setAbout(res.data.about_us);
        // console.log("data results", res.data.results);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        console.log("nav ", props.history.location.state?.selected_div);
        if (props.history.location.state?.selected_div == "about-up") {
          const divElement = document.getElementById("about-up");
          divElement.scrollIntoView({ behavior: "smooth" });
        }
      });
  };
  return (
    <div className="container mb-5 mt-5" id="about-up">
      <div
        className=" d-flex justify-content-center  "
        style={{
          flexFlow: "wrap",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
      >
        <span className="about-us"> About us</span>
        <div
          className="m-0 p-0 pt-1 col-11 client-position-description mb-0"
          dangerouslySetInnerHTML={{
            __html: about,
          }}
        />
        {/* <div className="about-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea
          Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem
          Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur
          Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam
          Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
          Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
          Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.
        </div> */}
      </div>
    </div>
  );
};
export default About;
