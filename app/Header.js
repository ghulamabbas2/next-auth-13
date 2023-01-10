import Link from "next/link";
import React from "react";

const Header = () => {
  const user = true;

  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <a className="navbar-brand" style={{ marginLeft: "20px" }} href="#">
            Next.13 Authentication
          </a>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          <span style={{ marginRight: "15px" }}>Hi, Ghulam</span>
          <span style={{ marginRight: "15px" }}>
            {" "}
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </span>
          <span>
            {" "}
            <Link className="nav-link" href="/">
              Logout
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
