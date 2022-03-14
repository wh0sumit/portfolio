import React from "react";
import { NavLink } from "react-router-dom";
import Hand from "../assets/hand.gif";
import Popsound from "../assets/pop.mp3";
export default function Navbar() {
  const links = [
    {
      instagram: "https://www.instagram.com/wh0sumit/",
      linkedin: "https://www.linkedin.com/in/wh0sumit",
      twitter: "https://twitter.com/wh0sumit",
      github: "https://github.com/wh0sumit",
    },
  ];

  const playpop = (e) => {
    var audio = new Audio(Popsound);

    audio.play();
  };

  let activeStyle = ({ isActive }) => {
    playpop();
    return {
      color: isActive && "#9213e8",
      backgroundColor: isActive && "#f5f5f5",
      borderRadius: isActive && "10px",
    };
  };
  return (
    <>
      <nav className=" m-2 d-flex justify-content-lg-around justify-content-center">
        <ul className="nav d-flex  p-lg-4 ps-0 ">
          <li className="mx-lg-1 mx-1 py-2 rounded-2">
            <NavLink to="/" className="nav-link align-self-center ">
              Hi{" "}
              <img
                src={Hand}
                style={{ width: "30px", transform: "rotate(-30deg)" }}
                alt="Hand Gif"
              />
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-1  px-lg-3 px-2 align-self-center py-2 rounded-2">
            <NavLink to="/projects" style={activeStyle} className="nav-link">
              Projects
            </NavLink>
          </li>{" "}
          <li className="mx-lg-1 mx-1  px-lg-3 px-2 align-self-center py-2 rounded-2">
            <NavLink to="/experience" style={activeStyle} className="nav-link">
              Experience
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-1  px-lg-3 px-2 align-self-center py-2 rounded-2">
            <NavLink to="about" style={activeStyle} className="nav-link">
              About
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-1  px-lg-3 px-2 align-self-center py-2 rounded-2">
            <NavLink to="contact" style={activeStyle} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="d-none d-lg-flex p-lg-4 ps-0 m-0 ">
          <li className="mx-lg-3 align-self-center">
            <a
              href={links.instagram}
              className="text-decoration-none "
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href={links.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-twitter fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-linkedin fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-github fs-4 text-light"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
