import React from "react";
import Footer from "../components/Footer";
import myImg from "../include/profile/my-img.png";
import AboutImgData from "./AboutImgData";

export default function About() {
  return (
    <>
      <div className="container col-xxl-12 px-lg-4 px-2 py-5 my-lg-2 mt-3 mb-5">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap px-lg-5 px-3 ">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src={myImg}
              className=" img-fluid my-img gray-img mb-5 "
              alt="Sumit's Image"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold intro ">Sumit Singh</h1>
            <h5 className="mt-5 mb-3">
              Hi! Thanks for stopping by. I’m currently working remotely as a
              Frontend Developer at
              <span className="text-muted text-decoration-underline">
                TheBugCommunity
              </span>
              and looking to switch jobs.
            </h5>
            <h5 className="my-3">
              I’m a developer with 1 year of experience in Front-end Development
              and one year of UI design. I became a Frontend Developer because
              the idea of solving problems gave me an immense thrill.
            </h5>
            <h5 className="my-3">
              I love to solve challenging problems. Curious and adventurous by
              nature, I love to connect with people who can teach me something.
              Anything.
            </h5>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="d-flex flex-row flex-wrap justify-content-center my-5">
          <div className="d-flex flex-column">
            <img
              src={AboutImgData["img-1"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-2"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-17"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-18"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-15"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
          </div>

          <div className="d-flex flex-column">
            <img
              src={AboutImgData["img-3"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-4"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-11"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-14"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
          </div>

          <div className="d-flex flex-column">
            <img
              src={AboutImgData["img-6"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-13"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-19"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-5"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
          </div>

          <div className="d-flex flex-column">
            <img
              src={AboutImgData["img-7"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-16"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-9"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
            <img
              src={AboutImgData["img-10"]}
              className="img-fluid m-3 rounded-5 gray-img"
            />
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="container p-5 py-2">
        <footer className="row row-cols-1 row-cols-md-3 g-5 my-5 ">
          <div className="col">
            <h1 className="head">Latest and Greatest</h1>
            <p className="text-muted small">As of Sep 2021</p>
          </div>
          <div className=" col">
            <h6 className="bold mt-5"> Learning</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">MERN Stack</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">
                  Doodle Art & Sketching
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Photography</h6>
              </li>
            </ul>
            <h6 className="bold">Reading</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link small p-0 text-muted">
                  Steve Jobs — Walter Issacson
                </a>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">
                  What Are You Doing With Your Life ? — J.Krishnamurti
                </h6>
              </li>
            </ul>
          </div>

          <div className="col ">
            <h6 className="mt-5 bold">Listening</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Indie Folk</h6>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <Footer title="I occasionally take on freelance opportunities." />
    </>
  );
}
