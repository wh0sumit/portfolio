import React from "react";

function Cards({
  ProjectTitle,
  ProjectDescription,
  ProjectSubTitle,
  GithubURL,
  PreviewURL,
  ProjectTech,
}) {
  return (
    <>
      <div className="col">
        <div
          class="card rounded-5 p-2 shadow-sm my-2 "
          style={{
            backgroundColor: "#1E262F",
          }}
        >
          <div class="card-body">
            <h5
              class="text-decoration-underline"
              style={{
                color: "#F2F5F7",
              }}
            >
              {ProjectTitle}
            </h5>
            <h6 className="my-2 text-secondary fst-italic">
              {ProjectSubTitle}
            </h6>
            <p
              class="card-text"
              style={{
                color: "#7E8C9A",
              }}
            >
              {ProjectDescription}
            </p>

            <div class="d-flex align-items-end">
              {GithubURL && (
                <a
                  href={GithubURL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light rounded-5 px-2 py-1 "
                >
                  <i className="fab fa-github text-dark"></i>
                </a>
              )}
              {PreviewURL && (
                <a
                  href={PreviewURL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light rounded-5 px-2 py-1 mx-2 "
                >
                  <i className="fas fa-link text-dark"></i>
                </a>
              )}
            </div>
            {ProjectTech &&
              ProjectTech.map((tech, index) => (
                <span className="badge badge-light m-2 ms-0 fs-6">{tech}</span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
