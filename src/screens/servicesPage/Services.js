import React, { useState, useEffect } from "react";
import "./Services.css";
import background from "./../../assets/images/background_line.svg";
import Tax from "./../../assets/images/Tax.svg";
import Balance from "./../../assets/images/balance.svg";
import Hammer from "./../../assets/images/hammar.svg";
import Balance2 from "./../../assets/images/balance2.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Services = () => {
  const history = useHistory();

  const [services, setServices] = useState([]);
  const GetServices = () => {
    axios
      .get("https://jurisera.bit68.com/api/services/?ordering=id")
      .then((res) => {
        console.log("resss", res.data);
        // console.log("data results", res.data.results);
        setServices(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    GetServices();
    if (document.getElementById("service-up")) {
      document
        .getElementById("service-up")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  // const scrollToServiceDiv = (id) => {
  //   console.log("service by id", id);
  //   history.push({
  //     pathname: "/law",
  //     state: { selected_id: "service-up", id: id },
  //   });
  //   // const divElement = document.getElementById("test");
  //   if (document.getElementById("service-up")) {
  //     document
  //       .getElementById("service-up")
  //       .scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div className="container">
      <div
        className=" d-flex justify-content-center mb-5 mt-5 pt-5"
        style={{
          flexFlow: "wrap",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "auto",
          // overflow: "hidden",
        }}
      >
        {services.map((service) => (
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center flex-wrap mb-5 pb-4">
            <img
              src={service.picture}
              alt="service provided"
              // style={{
              //   width: 300,
              //   height: 190,
              //   marginBottom: 30,
              // }}
              className=" img-resize"
              // onClick={() => history.push(`/law/${service.id}/`)}
              onClick={() =>
                history.push({
                  pathname: `/law/${service.id}/`,
                  state: { selected_id: "service-up" },
                })
              }
            />
            <div
              className="clickable col-12 d-flex justify-content-center service-title"
              onClick={() =>
                history.push({
                  pathname: `/law/${service.id}/`,
                  state: { selected_id: "service-up" },
                })
              }
            >
              {service.name}
            </div>
            <div className="col-12 d-flex justify-content-center mt-2 service-description">
              {service.small_description}
            </div>
          </div>
        ))}
        {/* <div className="col-6 d-flex justify-content-center flex-wrap mb-5">
          <img
            src={Balance}
            alt="service provided"
            style={{
              width: 80,
              height: 80,
              marginBottom: 30,
            }}
          />
          <div className="col-12 d-flex justify-content-center service-title">
            Service Provided
          </div>
          <div
            className="col-12 d-flex justify-content-center service-description"
            style={{ width: "530px" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center flex-wrap mb-5">
          <img
            src={Hammer}
            alt="service provided"
            style={{
              width: 80,
              height: 80,
              marginBottom: 30,
            }}
          />
          <div className="col-12 d-flex justify-content-center service-title">
            Service Provided
          </div>
          <div
            className="col-12 d-flex justify-content-center service-description"
            style={{ width: "530px" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center flex-wrap mb-5">
          <img
            src={Balance2}
            alt="service provided"
            style={{
              width: 80,
              height: 80,
              marginBottom: 30,
            }}
          />
          <div className="col-12 d-flex justify-content-center service-title">
            Service Provided
          </div>
          <div
            className="col-12 d-flex justify-content-center service-description"
            style={{ width: "530px" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center flex-wrap mb-5">
          <img
            src={Balance2}
            alt="service provided"
            style={{
              width: 80,
              height: 80,
              marginBottom: 30,
            }}
          />
          <div className="col-12 d-flex justify-content-center service-title">
            Service Provided
          </div>
          <div
            className="col-12 d-flex justify-content-center service-description"
            style={{ width: "530px" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Services;
