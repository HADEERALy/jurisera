import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "react-elastic-carousel";
import Items from "../../components/items/Items";
import Test from "./../../assets/images/testt.png";
import BackLogo from "./../../assets/images/Union_logo.svg";
import HomeSlider from "../../components/Home-slider2/HomeSlider";
import ImageGallery from "../../components/image-gallery/ImageGallery";
import WOW from "wowjs";
import BkImage from "./../../assets/Group106.png";
import axios from "axios";
import ServicesComp from "../../components/servicesComp/ServicesComp";
import PracticesSlider from "./../../components/practices-slider/PracticesSlider";
import TestImage from "./../../assets/images/finalCairo.jpg";
const Home = (props) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 768, itemsToShow: 3, pagination: false },
    { width: 1200, itemsToShow: 4, pagination: false },
  ];
  const breakPoints2 = [
    { width: 1, itemsToShow: 1.2, pagination: false },
    { width: 550, itemsToShow: 1.5, itemsToScroll: 2, pagination: false },
    { width: 768, itemsToShow: 1.45, pagination: false },
    { width: 1200, itemsToShow: 1.45, pagination: false },
  ];
  const breakPoints3 = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 550, itemsToShow: 3, pagination: false },
    { width: 768, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, pagination: false },
  ];
  const [services, setServices] = useState([]);
  const [qoutes, setQoutes] = useState([]);
  const [news, setNews] = useState([]);

  const [selectedPartner, setSelectedPartner] = useState({});

  const GetServices = () => {
    axios
      .get("https://jurisera.bit68.com/api/services/?ordering=id")
      .then((res) => {
        console.log("resss services", res.data);
        // console.log("data results", res.data.results);
        setServices(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const GetQoutes = () => {
    axios
      .get("https://jurisera.bit68.com/api/quotes/?ordering=id")
      .then((res) => {
        console.log("resss qoutes", res.data);
        // console.log("data results", res.data.results);
        setQoutes(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const GetNews = () => {
    axios
      .get("https://jurisera.bit68.com/api/posts/?ordering=id")
      .then((res) => {
        console.log("resss news", res.data);
        console.log("data news", res.data.results);
        setNews(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        console.log("nav ", props.history.location.state?.selected_div);
        if (props.history.location.state?.selected_div == "hadeer") {
          const divElement = document.getElementById("hadeer");
          divElement.scrollIntoView({ behavior: "smooth" });
        }
      });
  };
  const [isMobile, setIsMobile] = useState("");
  useEffect(() => {
    const test = window.innerWidth < 1024;
    setIsMobile(test);
    console.log("ismobile", test);
    GetServices();
    GetQoutes();
    GetNews();
    if (document.getElementById("article-up")) {
      document
        .getElementById("article-up")
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const slide = [
    {
      id: 1,
      name: "Lorem Epsum",
      year: "September-2020",
      image: (
        <img
          src={Test}
          alt="JuriseraLogo"
          style={{ height: "270px", width: "100%" }}
        />
      ),
    },
    {
      id: 2,
      name: "Lorem Epsum",
      year: "2020",
      image: (
        <img
          src={Test}
          alt="JuriseraLogo"
          style={{ height: "270px", width: "100%" }}
        />
      ),
    },
    {
      id: 3,
      name: "Lorem Epsum",
      year: "September-2020",
      image: (
        <img
          src={Test}
          alt="JuriseraLogo"
          style={{ height: "270px", width: "100%" }}
        />
      ),
    },
    {
      id: 4,
      name: "Lorem Epsum",
      year: "2020",
      image: (
        <img
          src={Test}
          alt="JuriseraLogo"
          style={{ height: "270px", width: "100%" }}
        />
      ),
    },
  ];
  // useEffect(() => {
  //   console.log("nav ", props.history.location.state?.selected_div);
  //   if (props.history.location.state?.selected_div == "hadeer") {
  //     const divElement = document.getElementById("hadeer");
  //     divElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, []);

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${BkImage})`,
        height: "auto",
        width: "100%",
        backgroundSize: "100% 111%",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "scroll",
      }}
    >
      <img
        src={TestImage}
        className={isMobile ? "cairo_test_MV" : "cairo_test"}
      />
      {/* <div className="row m-0 justify-content-center pb-4 te Cairo_background">
        <div class="animated-home wow ">
          <div className="home-headline"> Introduction About Jurisera</div>
          <div className="home-headline-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero
          </div>
        </div>
      </div> */}
      <div>
        {/* <div className="our-practices pt-5">Our Practices</div>
        <div className="break">
          {services.map((item) => (
            <ServicesComp item={item} />
          ))}
        </div> */}
        <div className="container-fluid ">
          <div className="row m-0 pt-5">
            <div className="col-lg-2 col-sm-10 mx-0 pl-2 pr-0 our-practice">
              Our Practices
            </div>
            <div className="classR col-lg-9 col-sm-12" id="dodo3">
              <Carousel breakPoints={breakPoints3}>
                {services.map((item) => (
                  <PracticesSlider item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="our-team-bk m-0 row mt-5">
          <div className="our-team-members col-lg-4 col-sm-12 d-flex flex-column justify-content-between">
            <div>Meet our team</div>
            <div className="">
              <p className="selected-name">{selectedPartner.name}</p>
              <p className="selected-description">
                {selectedPartner.description}
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 d-flex gallery-content">
            <div className="row gallery-container" style={{ width: "100%" }}>
              <ImageGallery setData={setSelectedPartner} />
            </div>
          </div>
        </div>
        <div className="container our-news-container">
          <div className="our-news" id="hadeer">
            Our News
          </div>
          <div className="carousel-wrapper mb-5 mt-5" id="dodo">
            <Carousel
              // enableAutoPlay
              // autoPlaySpeed={1000} // same time
              breakPoints={breakPoints}
            >
              {news.map((item) => (
                <div
                  // onClick={() => props.history.push(`/article/${item.id}`)}
                  onClick={() =>
                    props.history.push({
                      pathname: `/article/${item.id}`,
                      state: { selected_id: "article-up" },
                    })
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Items item={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            paddingTop: 20,
          }}
        >
          <div
            className="justify-content-center mb-5 "
            style={{
              backgroundPosition: "center",
              backgroundImage: `url(${BackLogo})`,
              height: 223,
              width: "100%",
              backgroundSize: "100% 91%",
              backgroundRepeat: "no-repeat",
              paddingTop: 5,
            }}
          >
            <div className="carousel-wrapper mb-5 mt-5" id="dodo2">
              <Carousel breakPoints={breakPoints2}>
                {qoutes.map((item) => (
                  <HomeSlider item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
