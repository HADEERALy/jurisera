import React from "react";
import "./careers.css";
import Rec from "./../../assets/images/Rectangle.svg";
import CareerCard from "../../components/career-card/CareerCard";

const Careers = (props) => {
  return (
    <div className="container mb-5 mt-5" id="careers">
      <div className="text-center">
        <span className="title">Careers</span>
      </div>
      <div className="py-2">
        {/* <div className="subheader">Paragraph Name</div> */}
        <div className="content">
          <div className="pb-3">
            <img
              src={Rec}
              alt="service provided"
              style={{
                width: 17,
                height: 17,
              }}
            />

            <span className="m-0 px-2 pt-1 col-11 paragraph mb-0">
              Thank you for your interest in joining Jurisera. Currently,
              however, no vacancies are available.{" "}
            </span>
          </div>
          {/* 
          <div className="pb-3">
            <img
              src={Rec}
              alt="service provided"
              style={{
                width: 17,
                height: 17,
              }}
            />

            <span className="m-0 px-2 pt-1 col-11 paragraph mb-0">
              we have In-depth
            </span>
          </div> */}

          {/* <div className="row justify-content-between flex-wrap mx-0 py-3">
                  {React.Children.toArray(
                     [1, 2, 3, 4, 5, 6].map((item) => (
                        <div className="col-md-5" onClick={()=>props.history.push('/careers/1')}>
                           <CareerCard item={item} />
                        </div>
                     ))
                  )}
               </div> */}

          {/* <div className="pb-3">
            <img
              src={Rec}
              alt="service provided"
              style={{
                width: 17,
                height: 17,
              }}
            />

            <span className="m-0 px-2 pt-1 col-11 paragraph mb-0">
              we have In-depth
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Careers;
