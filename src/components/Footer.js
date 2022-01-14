import React from "react";
// import Resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <section class="py-lg-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-5 col-md-8 mx-auto">
            <h1 class="head">{props.title}</h1>
            <p class=" text-muted">{props.desc}</p>
            <div className="d-flex flex-wrap justify-content-center">
              <Link to={props.file} class="btn btn-custom-1 m-2">
                {props.btnTitle} <i class={props.btnIcon}></i>
              </Link>
              <a
                class="btn btn-custom-1 m-2"
                href="https://wh0sumit.notion.site/wh0sumit/Sumit-Singh-0a69c9570cc34c5488ea5073231a372f"
                download="Sumit-Singh-Resume"
              >
                Resume
          
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
