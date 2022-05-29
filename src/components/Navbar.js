import React from "react";
import { NavLink } from "react-router-dom";
import Hand from "../assets/hand.gif";
// import Popsound from "../assets/pop.mp3";
export default function Navbar() {
  // const playpop = (e) => {
  //   var audio = new Audio(Popsound);

  //   audio.play();
  // };

  let activeStyle = ({ isActive }) => {
    // playpop();
    if (isActive) {
      return {
        color: isActive && "#9213e8",
        backgroundColor: isActive && "#dfdfdf",
        borderRadius: isActive && "10px",
      };
    } else {
      return {
        borderRadius: "10px",
      };
    }
  };
  return (
    <>
      <nav className=" m-2 d-flex justify-content-lg-around justify-content-center">
        <ul className="nav d-flex  p-lg-4 p-0 ">
          <li className="mx-lg-1 mx-0 py-2 rounded-2 ">
            <NavLink to="/" className="nav-link align-self-center text-light">
              Hi{" "}
              <img
                src={Hand}
                style={{ width: "30px", transform: "rotate(-30deg)" }}
                alt="Hand Gif"
              />
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-0  px-lg-3 px-0 align-self-center py-2 rounded-2">
            <NavLink to="/projects" style={activeStyle} className="nav-link">
              Projects
            </NavLink>
          </li>{" "}
          <li className="mx-lg-1 mx-0  px-lg-3 px-0 align-self-center py-2 rounded-2">
            <NavLink to="/experience" style={activeStyle} className="nav-link">
              Experience
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-0  px-lg-3 px-0 align-self-center py-2 rounded-2">
            <NavLink to="about" style={activeStyle} className="nav-link">
              About
            </NavLink>
          </li>
          <li className="mx-lg-1 mx-0  px-lg-3 px-0 align-self-center py-2 d-none d-lg-flex rounded-2">
            <NavLink to="contact" style={activeStyle} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <ul
          className="d-none d-lg-flex p-lg-4 ps-0 m-0 "
          style={{
            listStyle: "none",
          }}
        >
          <li className="mx-lg-3 align-self-center">
            <a
              href="https://www.instagram.com/wh0sumit/"
              className="text-decoration-none "
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href="https://www.twitter.com/wh0sumit"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-twitter fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href="https://www.linkedin.com/in/wh0sumit"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              <i className="fab fa-linkedin fs-4 text-light"></i>
            </a>
          </li>
          <li className="mx-lg-3 align-self-center">
            <a
              href="https://github.com/wh0sumit"
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
