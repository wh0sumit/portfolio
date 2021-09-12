import React from "react";
import propack from "../include/projects/propack.png";

export default function Projects() {
  return (
    <>
      <div className="">
        <a href="">
          <img src={propack} alt="" className="img-fluid rounded-5 shadow" />
        </a>

        <div className="d-flex justify-content-end my-3">
          <h5>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">HTML</span>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">CSS</span>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">SCSS</span>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">
              BOOTSTRAP
            </span>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">
              JAVASCRIPT
            </span>
            <span class="badge badge-1 rounded-3 px-3 py-2 mx-1">JQUERY</span>
          </h5>
        </div>
      </div>
    </>
  );
}
