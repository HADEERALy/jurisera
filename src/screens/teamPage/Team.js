import React, { useEffect, useState } from "react";
import "./Team.css";
import background from "./../../assets/images/background_line.svg";
import RQoute from "./../../assets/images/fi-sr-quote-right.svg";
import LQoute from "./../../assets/images/fi-sr-quote-left.svg";
import Rec from "./../../assets/images/Rectangle.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Team = () => {
  const history = useHistory();
  const [members, setMembers] = useState([]);
  const GetTeamMembers = () => {
    axios
      .get("https://jurisera.bit68.com/api/members/?ordering=id")
      .then((res) => {
        console.log("resss", res.data);
        setMembers(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    GetTeamMembers();
    if (document.getElementById("profile-up")) {
      document
        .getElementById("profile-up")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div className="container">
      <div
        className="row m-0  justify-content-start  mb-5 mt-5 pt-5"
        style={{
          flexFlow: "wrap",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "auto",
          height: "auto",
        }}
      >
        {members.map((member) => (
          <div className="col-lg-6 col-sm-12  mb-5">
            <div className="row m-0">
              <div className="col-lg-6 col-sm-12 ">
                <div
                  className="client-title clickable"
                  onClick={() =>
                    history.push({
                      pathname: `/our-team/profile/${member.id}`,
                      state: { selected_id: "profile-up" },
                    })
                  }
                >
                  {member.name}
                </div>
                <div className="mb-2 client-position">{member.position}</div>
                <img
                  src={RQoute}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />
                <div className="mb-4 client-qoute mb-0">
                  {member.bio}
                  <img
                    src={LQoute}
                    alt="service provided"
                    style={{
                      width: 17,
                      height: 17,
                      marginLeft: 155,
                    }}
                  />
                </div>
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

                  <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
                    {member.small_description}
                  </span>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 d-flex justify-content-center clickable align-items-start"
                // onClick={() => history.push(`/our-team/profile/${member.id}`)}
                onClick={() =>
                  history.push({
                    pathname: `/our-team/profile/${member.id}`,
                    state: { selected_id: "profile-up" },
                  })
                }
              >
                <img
                  src={member.picture}
                  alt="person "
                  style={{
                    width: 233,
                    // height: 385,
                    objectFit: "contain",
                    marginBottom: 30,
                  }}
                  className="image-space"
                />
              </div>
            </div>
            <div className="underline-border" />
          </div>
        ))}
        {/* <div className="col-lg-6 col-sm-12  mb-5">
          <div className="row m-0">
            <div className="col-lg-6 col-sm-12 ">
              <div className="client-title">Fouad Abdel Aziz</div>
              <div className="mb-2 client-position">Position</div>
              <img
                src={RQoute}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
              <div className="mb-4 client-qoute mb-0">
                We Have An In-Depth Knowledge Of The Business Enviro
                <img
                  src={LQoute}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                    marginLeft: 155,
                  }}
                />
              </div>
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
                <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
                  We Have An In-Depth Knowledge Of The Business Environment In
                  Egypt And Our Team Advises Egyptian And Foreign Clients Across
                  The Full Range Of Corporate Issues In An Increasingly Complex
                  Business Environment
                </span>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 d-flex justify-content-center clickable"
              onClick={() => history.push("/our-team/profile")}
            >
              <img
                src={Client4}
                className="image-space"
                alt="person "
                style={{
                  width: 233,
                  height: 385,
                  marginBottom: 30,
                }}
              />
            </div>
          </div>
          <div className="underline-border" />
        </div>
        <div className="col-lg-6 col-sm-12  flex-wrap mb-5">
          <div className="row m-0">
            <div className="col-lg-6 col-sm-12">
              <div className="client-title">Mohamed R. El Taky</div>
              <div className="mb-2 client-position">Position</div>
              <img
                src={RQoute}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
              <div className="mb-4 client-qoute mb-0">
                We Have An In-Depth Knowledge Of The Business Enviro
                <img
                  src={LQoute}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                    marginLeft: 155,
                  }}
                />
              </div>
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
                <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
                  We Have An In-Depth Knowledge Of The Business Environment In
                  Egypt And Our Team Advises Egyptian And Foreign Clients Across
                  The Full Range Of Corporate Issues In An Increasingly Complex
                  Business Environment
                </span>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 d-flex justify-content-center clickable"
              onClick={() => history.push("/our-team/profile")}
            >
              <img
                src={Client2}
                alt="person "
                style={{
                  width: 233,
                  height: 385,
                  marginBottom: 30,
                }}
                className="image-space"
              />
            </div>
          </div>
          <div className="underline-border" />
        </div>
        <div className="col-lg-6 col-sm-12  flex-wrap mb-5">
          <div className="row m-0">
            <div className="col-lg-6 col-sm-12">
              <div className="client-title">Ingy Hamzaoui</div>
              <div className="mb-2 client-position">Position</div>
              <img
                src={RQoute}
                alt="service provided"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
              <div className="mb-4 client-qoute mb-0">
                We Have An In-Depth Knowledge Of The Business Enviro
                <img
                  src={LQoute}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                    marginLeft: 155,
                  }}
                />
              </div>
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
                <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
                  We Have An In-Depth Knowledge Of The Business Environment In
                  Egypt And Our Team Advises Egyptian And Foreign Clients Across
                  The Full Range Of Corporate Issues In An Increasingly Complex
                  Business Environment
                </span>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 d-flex justify-content-center clickable"
              onClick={() => history.push("/our-team/profile")}
            >
              <img
                src={Client3}
                alt="person "
                style={{
                  width: 233,
                  height: 385,
                  marginBottom: 30,
                }}
                className="image-space"
              />
            </div>
          </div>
          <div className="underline-border" />
        </div>
        <div className="col-12  flex-wrap mb-5">
          <div className="col-lg-6 col-sm-12  flex-wrap mb-5">
            <div className="row m-0">
              <div className="col-lg-6 col-sm-12">
                <div className="client-title">Ahmed Ramadan</div>
                <div className="mb-2 client-position">Position</div>
                <img
                  src={RQoute}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />
                <div className="mb-4 client-qoute mb-0">
                  We Have An In-Depth Knowledge Of The Business Enviro
                  <img
                    src={LQoute}
                    alt="service provided"
                    style={{
                      width: 17,
                      height: 17,
                      marginLeft: 155,
                    }}
                  />
                </div>
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
                  <span className="m-0 p-0 pt-1 col-11 client-position-description mb-0">
                    We Have An In-Depth Knowledge Of The Business Environment In
                    Egypt And Our Team Advises Egyptian And Foreign Clients
                    Across The Full Range Of Corporate Issues In An Increasingly
                    Complex Business Environment
                  </span>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 d-flex justify-content-center clickable"
                onClick={() => history.push("/our-team/profile")}
              >
                <img
                  src={Client5}
                  alt="person "
                  className="image-space"
                  style={{
                    width: 233,
                    height: 385,
                    marginBottom: 30,
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Team;
