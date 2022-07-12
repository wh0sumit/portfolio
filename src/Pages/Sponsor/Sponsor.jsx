import React from "react";

export default function Sponsor() {
  return (
    <div className="container col-xxl-9 px-lg-5 px-2 py-5 my-lg-2 mt-3 mb-5">
      <div className="my-3">
        <h1 className="fw-bold  my-3">Become a Sponsor 💜</h1>
        <p className="text-dim">
          If you'd like to sponsor me, please contact me at{" "}
          <a
            href="mailto:sumikumar1608@gmail.com"
            className="text-decoration-none
            text-dim"
          >
            sumikumar1608@gmail.com 💌
          </a>
        </p>
      </div>
      <a
        href="https://github.com/sponsors/wh0sumit"
        rel="noreferrer"
        target="_blank"
      >
        <button className="btn btn-custom-1 ">
          Sponsor me on Github <i class="fab fa-github"></i>
        </button>
      </a>
      <div className="d-flex align-items-center flex-wrap-reverse gap-3 mx-0 my-lg-2 my-0">
        <div class="col-lg-6">
          <h5 className="my-0 my-lg-3 text-dim">
            I'm a designer-developer and I'm building open-source micro-saas
            applications/tools to benefit people around the world and make their
            lives easier.
          </h5>
          <h5 className="my-3 text-dim">
            If you or your company use my projects or like what I’m doing,
            please consider backing me so I can continue maintaining, evolving,
            and stabilizing all my projects.
          </h5>
          <h5 className="my-3 text-dim">
            Every donation is greatly appreciated as it allows me to invest more
            time into open-source projects and gets me closer to my ultimate
            goal of doing open-source and helping others all day long.
          </h5>
          <h5 className="my-3 text-dim">
            I’m truly grateful to all the wonderful{" "}
            <a
              href="https://github.com/wh0sumit/thanks"
              className="
              text-dim "
              rel="noreferrer"
              target="_blank"
            >
              supporters
            </a>{" "}
            💜
          </h5>
        </div>
        <div class="col-10 col-sm-8 col-lg-5 ">
          <img
            src="https://media.giphy.com/media/fA81FF4mdE6lgeoJwb/giphy.gif"
            className=" img-fluid my-img my-lg-0 my-4"
            alt="Gif"
          />
        </div>
      </div>
    </div>
  );
}

