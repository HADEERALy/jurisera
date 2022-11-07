import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Jur from "./../../assets/images/JURISERA_Logo-011.svg";
import { useHistory, Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import axios from "axios";

import "antd/dist/antd.css";
const NavBar = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [members, setMembers] = useState([]);

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
  useEffect(() => {
    const test = window.innerWidth < 1024;
    setIsMobile(test);
    console.log("ismobile", test);
    GetServices();
    GetTeamMembers();
  }, []);
  const GetServices = () => {
    axios
      .get("https://jurisera.bit68.com/api/services/?ordering=id")
      .then((res) => {
        console.log("resss services", res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
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
  const menu = (
    <Menu>
      {services.map((service, index) => (
        <Menu.Item
          key={service.id}
          onClick={() => history.push(`/law/${service.id}/`)}
        >
          {service.name}
        </Menu.Item>
      ))}
      {/* <Menu.Item key="1" onClick={() => history.push("/law/1/")}>
        Labour Law Practice
      </Menu.Item>
      <Menu.Item key="2" onClick={() => history.push("/law/2/")}>
        Construction Practice
      </Menu.Item>
      <Menu.Item key="3" onClick={() => history.push("/law/3/")}>
        Oil & Gas Law
      </Menu.Item>
      <Menu.Item key="4" onClick={() => history.push("/law/4/")}>
        Sports Law
      </Menu.Item>
      <Menu.Item key="5" onClick={() => history.push("/law/5/")}>
        Trade Practice
      </Menu.Item> */}
    </Menu>
  );
  const menu2 = (
    <Menu>
      {members.map((member, index) => (
        <Menu.Item
          key={member.id}
          onClick={() => history.push(`/our-team/profile/${member.id}/`)}
        >
          {member.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      className="navBackground pt-0"
    >
      <Container>
        <Navbar.Brand
          className="theme-color clickable col-3"
          onClick={() => history.push("/")}
        >
          <img
            src={Jur}
            alt="JuriseraLogo"
            style={{
              width: 110,
              height: 65,
              marginTop: 15,
              marginBottom: 5,
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          collapseOnSelect={true}
          id="basic-navbar-nav"
          className="justify-content-end align-items-center"
        >
          <Nav
            className="col-12 ml-auto mr-auto"
            style={{ textAlign: "center" }}
          >
            <Link
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
              to="/about-us"
            >
              About us
            </Link>
            <Link
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
              to="/practices"
            >
              Practices
            </Link>
            {/* {isMobile ? (
              <Link
                className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
                to="/services"
              >
                Services
              </Link>
            ) : (
              <Dropdown
                onClick={() => history.push("/services")}
                overlay={menu}
                trigger={["hover"]}
              >
                <span className="nav-title nav-link mt-2 col-lg-2 col-sm-12 clickable">
                  Services
                </span>
              </Dropdown>
            )} */}
            <Link
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
              to="/our-team"
            >
              Our Team
            </Link>
            <div
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title clickable"
              onClick={scrollToTestDiv}
            >
              Our News
            </div>
            <Link
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
              to="/careers"
            >
              Careers
            </Link>
            <Link
              className="col-lg-2 mt-2 col-sm-12 nav-link nav-title"
              to="/contact-us"
            >
              Contact us
            </Link>

            {/* <NavDropdown
              title="Our team"
              id="navbarScrollingDropdown"
              onClick={() => history.push("/our-team")}
              className="nav-title p-2"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item
                href="/our-team/profile"
                className="nav-sub-title"
              >
                Abdallah El Shehaby
              </NavDropdown.Item>
          
            </NavDropdown> */}
            {/* <Link
              className="col-lg-2 mt-2 col-sm-4 nav-link nav-title"
              to="/our-team"
            >
              Our team
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
