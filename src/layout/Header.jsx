import React from "react";
import { Link } from "react-router";
import "../../src/assets/styles/header.css";

function Header() {
  return (
    <header>
      {/* Menu item */}
      <div className="menuwrapper">
        <nav className="navbar navbar-expand-lg menucolor">
          {/* Menu items  */}
          <div className="container">
            <div className="logo d-flex gap-2 py-3">
              <Link className="navbar-brand" to="/">
                <img src="" alt="logoimg" className="img-fluid logoimge" />
              </Link>
              <div className="logotext d-flex flex-column justify-content-center align-items-start">
                <strong className="headtwo">कवठे महांकाळ</strong>
                <h1 className="heading">Kavthe Mahankal</h1>
              </div>
            </div>
            {/* <span className="navbar-brand d-lg-none">Kavathe Mahankal</span> */}
            <button
              className="navbar-toggler ms-auto custom-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Kavathe Mahankal
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-4 gap-md-4">
                  <li className="nav-item">
                    <a
                      className="nav-link active colormenu"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link colormenu" href="/about">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link colormenu" href="/about">
                      About us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle colormenu"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
