import React, { useState, useEffect } from "react";
import "./Profile.css";
import Client1 from "./../../assets/images/c4.jpg";
import Global from "./../../assets/images/global.svg";
import background from "./../../assets/images/background_line.svg";
import RQoute from "./../../assets/images/fi-sr-quote-right.svg";
import LQoute from "./../../assets/images/fi-sr-quote-left.svg";
import Rec from "./../../assets/images/Rectangle.svg";
import axios from "axios";

const Profile = (props) => {
  const clientId = props.match.params.id;
  // console.log("clientId", clientId);
  const [member, setMember] = useState({});
  const [is_global, set_is_global] = useState(false);

  const GetMemberProfile = () => {
    axios
      .get(`https://jurisera.bit68.com/api/members/${clientId}/`)
      .then((res) => {
        console.log("resss", res.data);
        setMember(res.data);
        set_is_global(res.data.is_global);
        // console.log("data results", res.data.results);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        console.log("profile nav ", props.history.location.state?.selected_id);
        if (props.history.location.state?.selected_id == "profile-up") {
          const divElement = document.getElementById("profile-up");
          divElement.scrollIntoView({ behavior: "smooth" });
        }
      });
  };
  useEffect(() => {
    GetMemberProfile();
  }, [props.match.params.id]);
  return (
    <div className="container">
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
        <div className="col-lg-8 col-sm-12 pt-0 p-4">
          <div className="client-title-profile" id="profile-up">
            {member.name}
          </div>
          <div className="mb-2 client-position-profile">{member.position}</div>
          <div className="d-flex justify-content-end mt-4  mb-4 pb-1">
            <img
              src={RQoute}
              alt="service provided"
              style={{
                width: 17,
                height: 17,
              }}
            />
            <div className="mb-4 client-qoute">
              {member.bio}
              <img
                src={LQoute}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                  marginLeft: 10,
                }}
              />
            </div>
          </div>
          <div className="row">
            {/* <span className="p-0 col-1">
              <img
                src={Rec}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </span> */}
            <div
              className="m-0 p-0 pt-1 col-11 client-position-description mb-0"
              dangerouslySetInnerHTML={{
                __html: member.description,
              }}
            />
            {/* <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
              {member.description}
            </span> */}
          </div>
          {is_global ? (
            <div className="row mt-5 d-flex justify-content-end">
              <img
                src={Global}
                alt="service provided"
                style={{
                  width: 190,
                  height: 150,
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-start">
          <img
            className="image-space img-position"
            src={member.picture}
            alt="person image"
            style={{
              width: "100%",
              // height: 585,
              marginBottom: 30,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
