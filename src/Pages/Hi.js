import React from "react";
import { Link } from "react-router-dom";

import myImg from "../assets/profile-2.jpeg";
export default function Work() {
  return (
    <>
      <div className="container col-xxl-10 px-2 py-5 my-lg-2 mt-3">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap-reverse px-lg-5 px-3 ">
          <div class="col-lg-6">
            <h1 class="display-3 fw-bold intro">Hi, I'm Sumit</h1>
            <h1 class=" display-3 fw-bold ">Frontend Developer & Designer</h1>
            <h5 className="my-3 text-muted">
              With a keen eye for creating engaging websites, UI and bringing
              products to life.
            </h5>
            <div className="d-flex flex-wrap ">
              <Link to="/contact" className="text-decoration-none">
                <button className="btn btn-custom-1   d-flex d-lg-none">
                  Drop a message
                  <i class="fas fa-paper-plane mx-2 mt-1"></i>
                </button>
              </Link>
              <a
                href="https://wh0sumit.notion.site/wh0sumit/Sumit-Singh-0a69c9570cc34c5488ea5073231a372f"
                className="text-decoration-none"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-custom-1 ms-3 d-flex d-lg-none">
                  Resume
                  <i class="fas fa-file-alt mx-2 mt-1"></i>
                </button>
              </a>
            </div>
          </div>
          <div class="col-10 col-sm-8 col-lg-5 ">
            <img
              src={myImg}
              className=" img-fluid my-img  mb-5 "
              alt="Sumit Profile"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
