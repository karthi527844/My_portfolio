import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center">Recent Projects</h2>
        <hr />

        <p className="pb-1 text-center">
          My three recent projects with links and source-code is listed below 👇
          <br />
          <div className="description-box">
            <p className="">
              Three project features the following technologies: <br />
              1. HTML <br />
              2. CSS <br />
              3. JavaScript <br />
              4. MongoDB <br />
              5. Express.js <br />
              6. React.js
              <br />
              7. Node.js <br />
            </p>
          </div>
        </p>
        <div className="row" id="ads">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge border border-dark">
                  Full Stack
                </span>
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1655663324772/W_HkFDxJg.jpeg"
                  alt="project-1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MongoDb</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">NodeJs</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase m-auto text-center">
                    car rental system
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/karthi527844/Car-Rental-System"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge border border-dark">
                  Full Stack
                </span>
                <img
                  src="https://img.freepik.com/free-vector/flat-design-online-ticket-illustration_23-2151089593.jpg?semt=ais_hybrid"
                  alt="project-1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MongoDb</span>
                <span className="card-detail-badge">ExpressJs</span>
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">NodeJs</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase m-auto text-center">
                    ticket booking system
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/karthi527844/Ticket-Booking-System"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge border border-dark">
                  Front-end
                </span>
                <img
                  src="https://www.figma.com/community/resource/26e67c44-fd8d-4a9d-b2b4-1ff36233472c/thumbnail"
                  alt="project-1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase m-auto text-center">
                    replica of apple
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://karthi527844.github.io/Apple-Replica-Task-/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
