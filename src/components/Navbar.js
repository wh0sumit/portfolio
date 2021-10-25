import React from "react";
import { Link, HashRouter } from "react-router-dom";
import Hand from "../assets/hand.gif";

export default function Navbar() {
  const instagram = "https://instagram.com/wh0sumiit";
  const linkedin = "https://www.linkedin.com/in/wh0sumit";
  const twitter = "https://twitter.com/wh0sumit";
  const github = "https://github.com/wh0sumit";
  return (
    <>
      <HashRouter basename="/">
        <nav className=" m-2 d-flex justify-content-lg-around justify-content-center">
          <ul className="nav d-flex  p-lg-4 ps-0 ">
            <li className="mx-lg-4 mx-2 nav-btn-Link px-lg-3 px-2 py-2 rounded-2">
              <Link to="/" className="text-dark text-decoration-none">
                Hi{" "}
                <img
                  src={Hand}
                  style={{ width: "30px", transform: "rotate(-30deg)" }}
                  alt="Hand Gif"
                />
              </Link>
            </li>
            <li className="mx-lg-4 mx-2 nav-btn-Link px-lg-3 px-2 py-2 rounded-2">
              <Link to="/projects" className="text-dark text-decoration-none">
                Projects & Experience
              </Link>
            </li>
            <li className="mx-lg-4 mx-2 nav-btn-Link px-lg-3 px-2 py-2 rounded-2">
              <Link to="/about" className="text-dark text-decoration-none">
                About
              </Link>
            </li>
            <li className="mx-lg-4 mx-2 nav-btn-Link px-lg-3 px-2 py-2 rounded-2">
              <Link to="/contact" className="text-dark text-decoration-none">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="nav p-4 d-none d-lg-flex">
            <li className="mx-lg-3">
              <a
                href={instagram}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram fs-4 text-dark"></i>
              </a>
            </li>
            <li className="mx-lg-3">
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-twitter fs-4 text-dark"></i>
              </a>
            </li>
            <li className="mx-lg-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-linkedin fs-4 text-dark"></i>
              </a>
            </li>
            <li className="mx-lg-3">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-github fs-4 text-dark"></i>
              </a>
            </li>
          </ul>
        </nav>
      </HashRouter>
    </>
  );
}
