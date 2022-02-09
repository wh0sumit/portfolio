import React from "react";

export default function NotFound() {
  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5 my-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col text-center ">
            <h1 class="display-4 fw-bold lh-1 mb-3">
              404 Error <i class="fas fa-bomb fs-1 mx-3"></i>
            </h1>
            <p class="col fs-4 text-light">
              Sorry, I can’t seem to find what you’re looking for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
