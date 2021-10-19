import React from "react";

function Cards(ProjectDetails) {
  return (
    <>
      <div className="col">
        <div class="card rounded-5 p-2 shadow-sm my-2 ">
          <div class="card-body">
            <h5 class="card-titl text-decoration-underline">
              {ProjectDetails.ProjectTitle}
            </h5>
            <p class="card-text">{ProjectDetails.ProjectDescription}</p>
            <div class="d-flex align-items-end">
              <a
                href={ProjectDetails.GithubURL}
                target="_blank"
                rel="noreferrer" 
                className="btn btn-dark rounded-5 px-2 py-1 "
              >
                <i className="fab fa-github text-light"></i>
              </a>
              <a
                href={ProjectDetails.PreviewURL}
                target="_blank"
                rel="noreferrer" 
                className="btn btn-dark rounded-5 px-2 py-1 mx-2 "
              >
                <i className="fas fa-link text-light"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
