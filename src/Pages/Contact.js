import emailjs from "emailjs-com";
import Footer from "../components/Footer/Footer";
import ReactModal from "react-modal";
import { useState } from "react";
export default function Contact() {
  const [thankyouModalRef, setThankyouModalState] = useState(false);
  const instagram = "https://instagram.com/wh0sumit";
  const linkedin = "https://www.linkedin.com/in/wh0sumit";
  const twitter = "https://twitter.com/wh0sumit";
  const github = "https://github.com/wh0sumit";

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.React_App_Contact_Form_Service_ID,
        process.env.React_App_Contact_Form_Template_ID,
        e.target,
        process.env.React_App_Contact_Form_User_ID
      )
      .then((res) => {
        document.querySelector(".name").value = " ";
        document.querySelector(".email").value = " ";
        document.querySelector(".message").value = " ";
        if (res.status === 200) {
          // alert("Thank You! Your Msg Has Been Sent !");
          setThankyouModalState(true);
        } else alert("Error !");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const customStyles = {
    overlay: {
      backgroundColor: "var(--color-purple-700)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      border: "10px solid #b59dff",
      borderRadius: "20px",
    },
  };

  return (
    <>
      <div className="container col-xl-12 col-xxl-9 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Having a great idea to share?
            </h1>
            <p className="col-lg-10 fs-6 text-dim">
              or want to have a cup of coffee and chit chat, just drop me a
              message !
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-6">
            <form
              className="p-4 p-md-5 border rounded-5 bg-light shadow-sm"
              onSubmit={sendEmail}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-5 name"
                  name="name"
                  id="floatingInput"
                  placeholder="Enter Your Full Name"
                  required
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-5 email"
                  id="floatingInputEmail"
                  pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInputEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  rows="6"
                  type="text"
                  className="form-control rounded-5 message"
                  name="message"
                  placeholder="Message"
                  style={{ height: "150px" }}
                  required
                ></textarea>
                <label for="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  Message is required.
                </div>
              </div>
              <button
                className="w-100 btn btn-lg btn-dark rounded-5"
                type="submit"
              >
                Send Message 🚀
              </button>
              <hr className="my-4" />
              <p className="text-center small">Or connect with me here :</p>
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
        btnIcon="💼"
        file="/Projects"
      />

      {/* react modal */}
      <ReactModal
        isOpen={thankyouModalRef}
        style={customStyles}
        onRequestClose={() => setThankyouModalState(false)}
      >
        <div className=" text-center p-2">
          <h1 className="py-3 intro">Thank You ❤</h1>
          <h5 className="py-3">Your message has been sent successfully! </h5>
          <button
            className="btn btn-dark "
            onClick={() => setThankyouModalState(false)}
          >
            ⬅ Back to site
          </button>
        </div>
      </ReactModal>
    </>
  );
}
