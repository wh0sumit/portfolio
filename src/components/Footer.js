import React from "react";

export default function Footer(props) {
  return (
    <>
      <section class="py-lg-5  text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-5 col-md-8 mx-auto">
            <h1 class="head">{props.title}</h1>
            <p class=" text-muted">
              Have an exciting project where you need some help? Send me over a
              message, and let's chat!
            </p>
            <p>
              <a href="#" class="btn btn-dark my-2">
                Drop a message <i class="fas fa-paper-plane mx-1"></i>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
