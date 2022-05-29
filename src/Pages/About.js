import Footer from "../components/Footer";
import myMemoji from "../assets/sumit-memoji.png";
// import Popsound from "../assets/pop.mp3";

export default function About() {
  return (
    <>
      <div className="container col-xxl-9  px-2 py-5 my-lg-2 mt-3 mb-5">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap px-lg-5 px-3 ">
          <div class="col-10 col-sm-8 col-lg-5 ">
            <img
              src={myMemoji}
              className=" img-fluid mb-3 mb-lg-2"
              alt="Sumit Profile"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-light">
            {/* <h1 className="display-3 fw-bold intro ">Sumit Singh</h1> */}
            <h5 className="mt-lg-5 mt-3 mb-3">
              Hi! Thanks for stopping by. I’m currently working remotely as a
              Frontend Developer at &nbsp;
              <span className="about-title text-decoration-underline">
                UnityLabs.ai
              </span>
              &nbsp;.
            </h5>
            <h5 className="my-3">
              I’m a developer with 1 year of experience in Front-end
              Development. I became a Frontend Developer because the idea of
              solving problems gave me an immense thrill.
            </h5>
            <h5 className="my-3">
              Also, I'm a Founder of a digital marketing agency called{" "}
              <a
                className="fs-5  text-light"
                href="https://www.thebugcommunity.in/"
                target="_blank"
                rel="noreferrer"
              >
                The Bug Community
              </a>{" "}
              that helps businesses increase leads, traffic, and sales.
            </h5>
            <h5 className="my-3">
              I'm currently working on micro-saas applications for startups and
              small businesses.
            </h5>
            <h5 className="my-3">
              I love to solve challenging problems. Curious and adventurous by
              nature, I love to connect with people who can teach me something ~
              Anything.
            </h5>
          </div>
        </div>
      </div>

      <div className="container p-5 py-2">
        <div className="row row-cols-1 row-cols-md-3 g-5 my-5 ">
          <div className="col">
            <h1 className="head">Latest and Greatest</h1>
            <p className="text-muted small">As of Sep 2021</p>
          </div>
          <div className=" col">
            <h6 className="bold mt-5 about-title"> Learning</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">React & Redux</h6>
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
            <h6 className="bold about-title">Reading</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/#"
                  className="nav-link small p-0 text-muted"
                  rel="noreferrer"
                >
                  Steve Jobs — Walter Issacson
                </a>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">
                  What Are You Doing With Your Life ? <br /> — J.Krishnamurti
                </h6>
              </li>
            </ul>
          </div>

          <div className="col">
            <h6 className="mt-5 bold about-title">Listening</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Indie Folk</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container p-5 py-2">
        <div className="row row-cols-1 row-cols-md-4 g-5 my-2 ">
          <div className="col">
            <h1 className="head">Strong And Mighty</h1>
            <p className="text-muted small">Skills and Superpowers</p>
          </div>
          <div className=" col">
            <h6 className="bold mt-5 about-title"> Languages</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">C & C++</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">HTML & CSS</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Javascript</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">PHP</h6>
              </li>
            </ul>
            <h6 className="bold about-title">Libraries & Frameworks</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Bootstrap</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Chakra UI </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Materialize </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Jquery</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">React Js</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">SCSS</h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">NextJs</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mt-5 bold about-title">Databases</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">MySql</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">MongoDB</h6>
              </li>
            </ul>
            <h6 className=" bold about-title">Platforms</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Gitthub</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Gitthub Pages</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Netlify</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Vercel</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Firebase</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="mt-5 bold about-title">Tools</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/#"
                  className="nav-link small p-0 text-muted"
                  rel="noreferrer"
                >
                  Git
                </a>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">PHP MyAdmin</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">NPM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">
                  Github Actions
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-muted">Figma</h6>
              </li>
            </ul>
            <h6 className="bold about-title">Other Skills</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">UI Designing</h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">
                  Digital Marketing
                </h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">SEO & SEM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">
                  Open-Source Contribution
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-muted">Mentoring</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer
        title="I occasionally take on freelance opportunities."
        desc="  Have an exciting project where you need some help? Send me over a
      message, and let's chat!"
        btnTitle="Drop a message"
        btnIcon="fas fa-paper-plane mx-2"
        file="/Contact"
      />
    </>
  );
}
