import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ServicesComp = (props) => {
  const [show1, setShow1] = useState(false);
  const [imgShow1, setImgShow1] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const test = window.innerWidth < 1024;
    setIsMobile(test);
    console.log("ismobile", test);
  }, []);
  const handleShow = () => {
    setShow1(!show1);
  };
  const onMouseEnter1 = () => {
    setImgShow1(true);
  };
  const onMouseLeave1 = () => {
    setImgShow1(false);
  };

  return (
    <div className="padding-box row m-0">
      <div className="p-0 col-lg-5 col-sm-12 d-flex justify-content-end">
        {!isMobile ? (
          <TransitionGroup className="img-pos">
            {imgShow1 && (
              <CSSTransition timeout={500} classNames="item">
                <img src={props.item.picture} className="service-border-img" />
              </CSSTransition>
            )}
          </TransitionGroup>
        ) : (
          <img src={props.item.picture} className="service-border-img" />
        )}
      </div>
      <div
        className={
          show1
            ? "row m-0 col-lg-7 d-flex justify-content-end col-sm-12 mb-5 service-border"
            : "row m-0 col-lg-7 d-flex justify-content-end col-sm-12 mb-5 service-border-mobileV"
        }
        onMouseEnter={() => onMouseEnter1()}
        onMouseLeave={() => onMouseLeave1()}
      >
        <div className="row m-0 p-2 mt-2">
          <div className="col-10   service-border-text">
            <div className=" row mt-2 col-12 "> {props.item.name}</div>
            {show1 ? (
              <div className="pt-3 row  d-flex justify-content-start service-border-description">
                {props.item.small_description}
              </div>
            ) : null}
          </div>
          <div
            className="col-2 d-flex justify-content-end clickable"
            onClick={() => handleShow()}
          >
            {show1 ? (
              <span className="circle-full">-</span>
            ) : (
              <span className="circle">+</span>
            )}
          </div>
        </div>
        {/* <div className=" m-0 p-2 mt-4">
          <div className="row  service-border-text">
            <div className="   col-8 pt-2 "> {props.item.name}</div>
            <div
              className="col-2 d-flex justify-content-end clickable"
              onClick={() => handleShow()}
            >
              {show1 ? (
                <span className="circle-full">-</span>
              ) : (
                <span className="circle">+</span>
              )}
            </div>
          </div>

          {show1 ? (
            <div className="pt-3 row  d-flex justify-content-start service-border-description">
              {props.item.small_description}
            </div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
};
export default ServicesComp;
