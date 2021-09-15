import React from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

export default function Contact() {
  const instagram = "https://instagram.com/wh0sumiit";
  const linkedin = "https://www.linkedin.com/in/wh0sumit";
  const twitter = "https://twitter.com/wh0sumit";
  const github = "https://github.com/wh0sumit";
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.Contact_Form_Service_ID,
        process.env.Contact_Form_Template_ID,
        e.target,
        process.env.Contact_Form_User_ID
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div class="container col-xl-12 col-xxl-9 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-3">
              Having a great idea to share?
            </h1>
            <p class="col-lg-10 fs-6">
              or want to have a cup of coffee and chit chat, just drop me a
              message !
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-6">
            <form
              class="p-4 p-md-5 border rounded-5 bg-white shadow-sm"
              onSubmit={sendEmail}
            >
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-5"
                  id="floatingInput"
                  name="name"
                  placeholder="Enter Your Full Name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control rounded-5"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  rows="6"
                  class="form-control rounded-5"
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Message"
                  style={{ height: "150px" }}
                  data-sb-validations="required"
                ></textarea>
                <label for="message">Message</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  Message is required.
                </div>
              </div>
              <button class="w-100 btn btn-lg btn-dark rounded-5" type="submit">
                Send Message <i class="fas fa-paper-plane mx-1"></i>
              </button>
              <hr class="my-4" />
              <p class="text-center small">Or connect with me here :</p>
              <div className=" d-flex justify-content-center align-items-center">
                <a
                  href={instagram}
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram fs-4 mx-2  text-dark"></i>
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-twitter fs-4 mx-2 text-dark"></i>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-linkedin fs-4 mx-2 text-dark"></i>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="fab fa-github fs-4 mx-2 text-dark"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer
        title="I help people build seamless user experiences."
        desc=" You can have a look at my past work and side projects by going to the work and side projects section."
        btnTitle="See Past Work"
        btnIcon="fas fa-briefcase mx-2"
        file="/Projects"
      />
    </>
  );
}
