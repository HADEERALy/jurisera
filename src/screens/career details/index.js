import React from "react";
import "./careers.css";
import Rec from "./../../assets/images/Rectangle.svg";
import CareerCard from "../../components/career-card/CareerCard";

const CareerDetails = (props) => {
   return (
      <div className="container mb-5 mt-5" id="career">
         <div className="py-2">
            <div className="subheader">Paragraph Name</div>
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
                     we have In-depth
                  </span>
               </div>

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
               </div>

               <div className="pb-3">
                  <span className="m-0 px-2 pt-1 col-11 paragraph mb-0">
                     If you are interested, please send your CV and Cover Letter to this email <span className="mail">hr@jurisera.com</span>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};
export default CareerDetails;
