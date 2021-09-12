import React from "react";
import Projects from "../components/Projects";
import myImg from "../include/profile/my-img.png";

export default function Work() {
  return (
    <>
      <div class="container col-xxl-12 px-4 py-5 my-lg-2 my-3">
        <div class="d-flex justify-content-between align-items-center flex-wrap px-5 ">
          <div class="col-lg-6">
            <h1 class="display-3 fw-bold intro">
              Hi, I'm Sumit <br />
              Frontend Developer & Designer
            </h1>
            <h5 className="my-3">
              With a keen eye for creating engaging websites, UI and bringing
              products to life.
            </h5>
          </div>
          <div class="col-10 col-sm-8 col-lg-5">
            <img
              src={myImg}
              className=" img-fluid my-img gray-img "
              alt="Sumit's Image"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </>
  );
}
