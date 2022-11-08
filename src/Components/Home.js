import React from 'react';
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold"></h1>
        <p className="col-md-8 fs-4"></p>
        <button className="btn btn-primary btn-lg" type="button">
          <NavLink to={'/'}>View Books</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Home;
