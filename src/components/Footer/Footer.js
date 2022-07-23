import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <section className="py-lg-5 text-center container py-3">
        <div className="row py-lg-5">
          <div className="col-lg-5 col-md-8 mx-auto">
            <h1 className="head">
              {props.title
                ? props.title
                : "I occasionally take on freelance opportunities."}
            </h1>
            <p className=" text-dim">
              {props.desc
                ? props.desc
                : "Have an exciting project where you need some help? Send me over a message, and let's chat!"}
            </p>
            <div className="d-flex flex-wrap justify-content-center">
              <Link
                to={props.file ? props.file : "none"}
                className="btn btn-custom-1 m-2"
              >
                {props.btnTitle ? props.btnTitle : "Drop a message"}{" "}
                {props.btnIcon ? props.btnIcon : "🚀"}
              </Link>
              <a
                className="btn btn-custom-1 m-2"
                href="https://wh0sumit.notion.site/wh0sumit/Sumit-Singh-0a69c9570cc34c5488ea5073231a372f"
                target="_blank"
                rel="noreferrer"
              >
                Resume 📜
              </a>
            </div>
          </div>
        </div>
        <div className=" m-2 d-flex justify-content-lg-around justify-content-center ">
          <ul className="list-unstyled d-flex d-lg-none mb-0">
            <li className="my-3 align-self-center mx-4">
              <a
                href="https://twitter.com/wh0sumit"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-twitter text-light fs-4"></i>
              </a>
            </li>

            <li className="my-3 align-self-center mx-4">
              <a
                href="https://www.linkedin.com/in/wh0sumit/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-linkedin-in text-light fs-4"></i>
              </a>
            </li>
            <li className="my-3 align-self-center mx-4">
              <a
                href="
                https://www.instagram.com/wh0sumit/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <i className="fab fa-instagram text-light fs-4"></i>
              </a>
            </li>
            <li className="my-3 align-self-center mx-4">
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
        </div>
      </section>
    </>
  );
}
