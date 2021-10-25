import React from "react";

function Cards(ProjectDetails) {
  const GithubLink = () => {
    if (ProjectDetails.GithubURL) {
      return (
        <>
          <a
            href={ProjectDetails.GithubURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark rounded-5 px-2 py-1 "
          >
            <i className="fab fa-github text-light"></i>
          </a>
        </>
      );
    }
  };
  const ViewLink = () => {
    if (ProjectDetails.PreviewURL) {
      return (
        <>
          <a
            href={ProjectDetails.PreviewURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark rounded-5 px-2 py-1 mx-2 "
          >
            <i className="fas fa-link text-light"></i>
          </a>
        </>
      );
    }
  };
  return (
    <>
      <div className="col">
        <div class="card rounded-5 p-2 shadow-sm my-2 ">
          <div class="card-body">
            <h5 class="card-titl text-decoration-underline">
              {ProjectDetails.ProjectTitle}
            </h5>
            <h6 className="my-2 text-secondary fst-italic">
              {ProjectDetails.ProjectSubTitle}
            </h6>
            <p class="card-text">{ProjectDetails.ProjectDescription}</p>

            <div class="d-flex align-items-end">
              {GithubLink()}
              {ViewLink()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
