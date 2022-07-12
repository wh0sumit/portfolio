import React from "react";
import { Link } from "react-router-dom";

import myImg from "../../assets/profile.jpeg";
export default function Home() {
  return (
    <>
      <div className="container col-xxl-10 px-2 py-5 my-lg-2 mt-3">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap-reverse px-lg-5 px-3 ">
          <div class="col-lg-6">
            <h1 class="display-3 fw-bold intro">Hi, I'm Sumit</h1>
            <h1 class=" display-3 fw-bold ">Frontend Developer & Designer</h1>
            <h5 className="my-3 text-dim">
              With a keen eye for creating engaging websites, UI and bringing
              products to life.
            </h5>

            <div className="d-flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="text-decoration-none d-none d-lg-flex"
              >
                <button className="btn btn-custom-1 ">Drop a message 🚀</button>
              </Link>
              <a
                href="https://wh0sumit.notion.site/wh0sumit/Sumit-Singh-0a69c9570cc34c5488ea5073231a372f"
                className="text-decoration-none"
                rel="noreferrer"
                target="_blank"
              >
                <button className="btn btn-custom-1">Resume 📜</button>
              </a>{" "}
              <Link to="/sponsor">
                <button className="btn btn-custom-1">Sponsor Me 💜</button>
              </Link>
            </div>
          </div>
          <div class="col-10 col-sm-8 col-lg-5 ">
            <img
              src={myImg}
              className=" img-fluid my-img  mb-5 "
              alt="Sumit Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}
