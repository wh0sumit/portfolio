import Footer from "../components/Footer/Footer";
import myMemoji from "../assets/sumit-memoji.png";
// import Popsound from "../assets/pop.mp3";

export default function About() {
  return (
    <>
      <div className="container col-xxl-9  px-2 py-5 my-lg-2 mt-3 mb-lg-5 mb-0">
        <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap px-lg-5 px-3 ">
          <div className="col-10 col-sm-8 col-lg-5 ">
            <img
              src={myMemoji}
              className=" img-fluid mb-3 mb-lg-2"
              alt="Sumit Profile"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-light">
            {/* <h1 className="display-3 fw-bold intro ">Sumit Singh</h1> */}
            <h5 className="mt-lg-5 mt-3 mb-3">Hi! Thanks for stopping by 🌱</h5>

            <h5 className="my-3">
              I’m a developer with 1 year of experience in Front-end
              Development. I became a Frontend Developer because the idea of
              solving problems gave me an immense thrill.
            </h5>
            {/* <h5 className="my-3">
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
            </h5> */}
            <h5 className="my-3">
              I am currently building coummunity-driven open-source applications
              at{" "}
              <a
                className="fs-5  text-light"
                href="https://github.com/dunolabs"
                target="_blank"
                rel="noreferrer"
              >
                Dunolabs
              </a>{" "}
              .
            </h5>
            <h5 className="my-3">
              I love to solve challenging problems. Curious and adventurous by
              nature, I love to connect with people who can teach me something ~
              Anything.
            </h5>
            <div className="card text-dim rounded-5 bg-blur">
              <div className="card-body">
                Currently open for full-time/intern job roles in frontend
                developement & open for freelance work 💛
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 py-2">
        <div className="row row-cols-1 row-cols-md-3 g-5 my-lg-5 my-0 ">
          <div className="col">
            <h1 className="head">Latest and Greatest</h1>
            <p className="text-light small">As of Sep 2021</p>
          </div>
          <div className=" col">
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              {" "}
              Learning
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">React & Redux</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">
                  Doodle Art & Sketching
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Photography</h6>
              </li>
            </ul>
            <h6 className="bold head">Reading</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/#"
                  className="nav-link small p-0 text-light"
                  rel="noreferrer"
                >
                  Steve Jobs — Walter Issacson
                </a>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">
                  What Are You Doing With Your Life ? <br /> — J.Krishnamurti
                </h6>
              </li>
            </ul>
          </div>

          <div className="col">
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              Listening
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Indie Folk</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container p-5 py-2">
        <div className="row row-cols-1 row-cols-md-4 g-5 my-lg-5 my-3 ">
          <div className="col">
            <h1 className="head">Strong And Mighty</h1>
            <p className="text-light small">Skills and Superpowers</p>
          </div>
          <div className=" col">
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              {" "}
              Languages
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">C & C++</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">HTML & CSS</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Javascript</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">PHP</h6>
              </li>
            </ul>
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              Libraries & Frameworks
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Bootstrap</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Chakra UI </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Materialize </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Jquery</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">React Js</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">SCSS</h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">NextJs</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              Databases
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">MySql</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">MongoDB</h6>
              </li>
            </ul>
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              Platforms
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Gitthub</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Gitthub Pages</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Netlify</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Vercel</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Firebase</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="bold mt-lg-5 mt-2 head text-decoration-underline">
              Tools
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/#"
                  className="nav-link small p-0 text-light"
                  rel="noreferrer"
                >
                  Git
                </a>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">PHP MyAdmin</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">NPM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">
                  Github Actions
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link small p-0 text-light">Figma</h6>
              </li>
            </ul>
            <h6 className="bold head">Other Skills</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">UI Designing</h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">
                  Digital Marketing
                </h6>
              </li>{" "}
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">SEO & SEM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">
                  Open-Source Contribution
                </h6>
              </li>
              <li className="nav-item mb-2">
                <h6 className="nav-link p-0 small text-light">Mentoring</h6>
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
        file="/Contact"
      />
    </>
  );
}
