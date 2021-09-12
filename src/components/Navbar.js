import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className=" m-2 d-flex justify-content-lg-around justify-content-center">
        <ul className="nav d-flex  p-4 ps-0 ">
          <li className="mx-lg-4 mx-3 nav-btn-link px-3 py-2 rounded-2">
            <a href="" className="text-dark text-decoration-none">
              Work
            </a>
          </li>
          <li className="mx-lg-4 mx-3 nav-btn-link px-3 py-2 rounded-2">
            <a href="" className="text-dark text-decoration-none">
              Projects
            </a>
          </li>
          <li className="mx-lg-4 mx-3 nav-btn-link px-3 py-2 rounded-2">
            <a href="" className="text-dark text-decoration-none">
              About
            </a>
          </li>
          <li className="mx-lg-4 mx-3 nav-btn-link px-3 py-2 rounded-2">
            <a href="" className="text-dark text-decoration-none">
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav p-4 d-none d-lg-flex">
          <li className="mx-lg-3">
            <a href="" className="text-decoration-none">
              <i className="fab fa-instagram fs-4 text-dark"></i>
            </a>
          </li>
          <li className="mx-lg-3">
            <a href="" className="text-decoration-none">
              <i className="fab fa-twitter fs-4 text-dark"></i>
            </a>
          </li>
          <li className="mx-lg-3">
            <a href="" className="text-decoration-none">
              <i className="fab fa-linkedin fs-4 text-dark"></i>
            </a>
          </li>
          <li className="mx-lg-3">
            <a href="" className="text-decoration-none">
              <i className="fab fa-github fs-4 text-dark"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
