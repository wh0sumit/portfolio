import React from "react";
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
