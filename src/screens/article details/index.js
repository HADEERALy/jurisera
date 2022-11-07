import React from "react";
import "./article.css";
import Rec from "./../../assets/images/Rectangle.svg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ArticleDetails = (props) => {
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    getData(props.match.params?.id);
    console.log("iddddddddddddddd news", props.match.params?.id);
    if (props.history.location.state?.selected_id == "article-up") {
      const divElement = document.getElementById("article-up");
      divElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const getData = (id) => {
    axios.get(`https://jurisera.bit68.com/api/posts/${id}/`).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="container mb-5 mt-5" id="article ">
      <div className="py-2" id="article-up">
        <img
          src={data?.picture}
          alt={data.title}
          className="w-100 mb-3"
          height={350}
          style={{
            objectFit: "contain",
          }}
        />
        {props.match.params?.id == 1 ? (
          <>
            <div className="subheader mt-5">
              Jurisera Secured a favorable Arbitration DIAC Arbitration
            </div>
            <div className="date">1 august 2021</div>
            <div className="content py-2">
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
                  We are glad to announce that, in a DIAC arbitral process under
                  UAE laws, our team members were able to secure a final award
                  in favor of our client, the Claimant. The dispute was between
                  a major consumer electronics distributor in the MENA region,
                  as Claimant, and one of the largest consumer electronics
                  retail companies in the UAE, as Respondent, in relation to a
                  supply and distribution agreement.
                </span>
              </div>

              <div className="mb-5 pb-5">
                <img
                  src={Rec}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />

                <span className="m-0 px-2 pt-1 col-11 paragraph mb-5">
                  Our Counsel, 
                  <span
                    className="name-bold clickable"
                    onClick={() =>
                      history.push({
                        pathname: `/our-team/profile/2`,
                        state: { selected_id: "profile-up" },
                      })
                    }
                  >
                    Fouad Abd El-Aziz
                  </span>
                  , the lead attorney on the matter said: “We take pride in
                  representing our clients before arbitral tribunals and local
                  courts and in the role we play in assisting them claim their
                  rights from third parties in different jurisdictions across
                  the MENA region. The case in question was just another example
                  of this, as we were able, through arbitration, to successfully
                  claim and recover long overdue payments as well as delayed
                  payment interest for a period exceeding five years before our
                  intervention. The experience and hard work of our well-rounded
                  team of lawyers, including our Partner
                  <span
                    className="name-bold clickable"
                    onClick={() =>
                      history.push({
                        pathname: `/our-team/profile/1`,
                        state: { selected_id: "profile-up" },
                      })
                    }
                  >
                    Abdallah El Shehaby
                  </span>
                  , FCIArb and Associate 
                  <span
                    className="name-bold clickable"
                    onClick={() =>
                      history.push({
                        pathname: `/our-team/profile/7`,
                        state: { selected_id: "profile-up" },
                      })
                    }
                  >
                    Ingy Hamzaoui
                  </span>
                   were key elements in this achievement"
                </span>
              </div>
            </div>
          </>
        ) : props.match.params?.id == 2 ? (
          <>
            <div className="subheader mt-5">
              Jurisera Advised Film Clinic in relation to Ergo’s Investment
            </div>
            <div className="date">1 sept 2021</div>
            <div className="content py-2">
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
                  We are very proud that our young firm has taken part in this
                  success. Working on this very important and strategic
                  transaction under the auspicesimport {useHistory} from
                  'react-router-dom'; of the Ministry of Planning and Economic
                  Development for our client Film Clinic is a privilege. This
                  partnership is definitely a milestone in the Egyptian and the
                  regional media market. Congratulations
                  <span
                    className="name-bold clickable"
                    onClick={() =>
                      history.push({
                        pathname: `/our-team/profile/1`,
                        state: { selected_id: "profile-up" },
                      })
                    }
                  >
                     Abdallah El Shehaby
                  </span>
                  , FCIArb and
                  <span
                    className="name-bold clickable"
                    onClick={() =>
                      history.push({
                        pathname: `/our-team/profile/7`,
                        state: { selected_id: "profile-up" },
                      })
                    }
                  >
                     Ingy Hamzaoui
                  </span>
                  ! Teamwork and ownership always pay off!
                </span>
              </div>

              <div className="mb-5 pb-5">
                <img
                  src={Rec}
                  alt="service provided"
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />

                <a
                  className="m-0 px-2 pt-1 col-11 paragraph mb-5"
                  target="_blank"
                  href="https://enterprise.press/stories/2021/09/01/ergo-buys-49-stake-in-studio-behind-souad-paranormal-52140/
"
                >
                  <span className="break-w">
                    https://enterprise.press/stories/2021/09/01/ergo-buys-49-stake-in-studio-behind-souad-paranormal-52140/
                  </span>
                </a>
              </div>
            </div>
          </>
        ) : null}
        {/* <div className="subheader">{data.title}</div>
            <div className="date">{data?.modified}</div>
            <div className="content py-2">
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
            </div> */}
      </div>
    </div>
  );
};
export default ArticleDetails;
