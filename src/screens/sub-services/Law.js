import React, { useState, useEffect } from "react";
import "./Law.css";
import Sports from "./../../assets/images/Sports.png";
import playGround from "./../../assets/images/Sports 2.png";
import background from "./../../assets/images/background_line.svg";
import Rec from "./../../assets/images/Rectangle.svg";
import axios from "axios";
const Law = (props) => {
  const serviceId = props.match.params.id;
  // console.log("serviceid", serviceId);
  const [service, setService] = useState({});
  const GetServiceById = () => {
    axios
      .get(`https://jurisera.bit68.com/api/services/${serviceId}/`)
      .then((res) => {
        console.log("resss", res);
        setService(res.data);
        // console.log("data results", res.data.results);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        console.log("service nav ", props.history.location.state?.selected_id);
        if (props.history.location.state?.selected_id == "service-up") {
          const divElement = document.getElementById("service-up");
          divElement.scrollIntoView({ behavior: "smooth" });
        }
      });
  };
  useEffect(() => {
    GetServiceById();
  }, [props.match.params.id]);
  return (
    <div className="container mb-5 pb-5">
      <div
        className="row m-0 justify-content-center mt-5 pt-5"
        style={{
          flexFlow: "wrap",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "auto",
          // overflow: "hidden",
        }}
      >
        <div className="col-lg-8 col-sm-12">
          <div className="sports-title mb-5" id="service-up">
            {service.name}
          </div>
          <div className="row  ">
            <div
              className="m-0 p-0 pt-1 col-11 client-position-description mb-0"
              dangerouslySetInnerHTML={{
                __html: service.description,
              }}
            />
            {/* <span className="p-0 col-1">
              <img
                src={Rec}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </span>
            <span className="m-0 p-0 pt-1 col-11 sports-position-description mb-4">
              {service.description}
            </span> */}
          </div>
          {/* <div className="row m-0">
            <span className="p-0 col-1">
              <img
                src={Rec}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </span>
            <span className="m-0 p-0 pt-1 col-11 sports-position-description mb-4">
              We Have An In-Depth Knowledge Of The Business Environment In Egypt
              And Our Team Advises Egyptian And Foreign Clients Across The Full
              Range Of Corporate Issues In An Increasingly Complex Business
              Environment
            </span>
          </div> */}
          {/* <div className="row m-0">
            <span className="p-0 col-1">
              <img
                src={Rec}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </span>
            <span className="m-0 p-0 pt-1 col-11 sports-position-description mb-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
              Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
              Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum
              Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
              Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
              Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
              Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
              Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor
              Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
              Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos
            </span>
          </div> */}
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-start">
          <img
            className="image-space img-position"
            src={service.icon}
            alt="person "
            style={{
              width: "100%",
              height: 500,
              marginBottom: 43,
            }}
          />
        </div>
      </div>
      {/* <div className="underline-border" />
      <div className="row m-0 justify-content-center mt-3 ">
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center">
          <img
            className="image-space"
            src={playGround}
            alt="person "
            style={{
              width: "100%",
              height: 500,
              marginBottom: 30,
            }}
          />
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="row m-0">
            <span className="p-0 col-1">
              <img
                src={Rec}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </span>
            <span className="m-0 p-0 pt-1 col-11 sports-position-description mb-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
              Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
              Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum
              Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
              Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
              Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et
              Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea
              Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor
              Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
              Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos
            </span>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <span className="col-1">
          <img
            src={Rec}
            alt="service provided"
            style={{
              width: 17,
              height: 17,
            }}
          />
        </span>
        <span className="m-0 pt-1 col-11 sports-position-description mb-4">
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
          At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita
          Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit
          Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
          Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam Voluptua. At Vero Eos
        </span>
      </div> */}
    </div>
  );
};
export default Law;
