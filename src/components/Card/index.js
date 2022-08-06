import React from "react";
const Card = (props) => {
  return (
    <div className="row third-row">
      <div className="col-lg-6 col-md-6">
        <div className="card third-col">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-user fa-2x"></i>
            </h5>
            <h6 className="card-subtitle">For myself</h6>
            <p className="card-text">
              Write better.Think more clearly.Stay organized.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="card third-col">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-users fa-2x"></i>
            </h5>
            <h6 className="card-subtitle">With my team</h6>
            <p className="card-text">
              Wikis,docs,tasks & projects,all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
