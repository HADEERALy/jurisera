import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Slogan from "./../../assets/images/JURISERA_Logo-07.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const history = useHistory();
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const scrollToTestDiv = () => {
    history.push({
      pathname: "/",
      state: { selected_div: "hadeer" },
    });
    // const divElement = document.getElementById("test");
    if (document.getElementById("hadeer")) {
      document.getElementById("hadeer").scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactDiv = () => {
    history.push({
      pathname: "/contact-us",
      state: { selected_div: "contact-up" },
    });
    // const divElement = document.getElementById("test");
    if (document.getElementById("contact-up")) {
      document
        .getElementById("contact-up")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutDiv = () => {
    history.push({
      pathname: "/about-us",
      state: { selected_div: "about-up" },
    });
    // const divElement = document.getElementById("test");
    if (document.getElementById("about-up")) {
      document
        .getElementById("about-up")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    aboutUs();
  }, []);

  const aboutUs = () => {
    axios
      .get("https://jurisera.bit68.com/api/about/")
      .then((res) => {
        console.log("resss aboutus from footer", res.data);
        setFacebook(res.data.facebook);
        setLinkedin(res.data.linkedin);

        // console.log("data results", res.data.results);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="main-footer mt-4">
      <div className="row m-0 pt-3">
        <div className="col-5 footer-first-card   pb-5">
          <div className="row justify-content-center">
            <img
              src={Slogan}
              alt="JuriseraLogo"
              style={{
                width: 250,
                height: 119,
                marginTop: 20,
              }}
            />
          </div>
        </div>
        <div className="col-7 m-0 row footer-second-card pt-3 ">
          {/* <div className="col ">
            <ul className="list-unstyled">
              <li>
                <button
                  className="anchor-style p-0 clickable"
                  onClick={() => history.push("/our-team")}
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  className="anchor-style p-0 clickable"
                  onClick={() => history.push("/practices/")}
                >
                  Practices
                </button>
              </li>
              <li>
                <button
                  // onClick={() => history.push("/contact-us")}
                  className="anchor-style p-0 clickable"
                  onClick={scrollToContactDiv}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div> */}
          {/* <div className="col ">
            <ul className="list-unstyled">
              <li>
                <button
                  className="anchor-style p-0 clickable"
                  onClick={scrollToTestDiv}
                >
                  Our News
                </button>
              </li>
              <li>
                <button
                  className="anchor-style p-0 clickable"
                  // onClick={() => history.push("/about-us")}
                  onClick={scrollToAboutDiv}
                >
                  About Us
                </button>
              </li>
            </ul>
          </div> */}
          <div className="col ">
            <ul className="list-unstyled">
              <li>
                <AiFillLinkedin className="linkedin-icon" />
                <a
                  className="anchor-style clickable mt-5"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer "
                >
                  Linkedin
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
