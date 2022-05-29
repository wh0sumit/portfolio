import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <section class="py-lg-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-5 col-md-8 mx-auto">
            <h1 class="head">
              {props.title
                ? props.title
                : "I occasionally take on freelance opportunities."}
            </h1>
            <p class=" text-muted">
              {props.desc
                ? props.desc
                : "Have an exciting project where you need some help? Send me over a message, and let's chat!"}
            </p>
            <div className="d-flex flex-wrap justify-content-center">
              <Link
                to={props.file ? props.file : "none"}
                class="btn btn-custom-1 m-2"
              >
                {props.btnTitle ? props.btnTitle : "Drop a message"}{" "}
                <i
                  class={
                    props.btnIcon ? props.btnIcon : "fas fa-paper-plane mx-2"
                  }
                ></i>
              </Link>
              <a
                class="btn btn-custom-1 m-2"
                href="https://wh0sumit.notion.site/wh0sumit/Sumit-Singh-0a69c9570cc34c5488ea5073231a372f"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <i class="fas fa-file-alt mx-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
