import React, { useEffect } from "react";
import { Link } from "react-router";
import "../../src/assets/styles/header.css";
import logoimg from "../assets/images/emblem-dark.png";

function Header() {
  useEffect(() => {}, [location.pathname]);
  return (
    <header className="">
      <div className="topbar">
        <div className="container">
          <ul className="p-0 m-0">
            <li className="list primary-text-color">महाराष्ट्र शासन</li>
            <li className="list primary-text-color">
              Government of Maharashtra
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <div
          className="container rounded-pill py-2 px-3 navmenu"
          style={{ height: "85px" }}
        >
          <Link className="navbar-brand " to="/">
            <img src={logoimg} alt="logoimg" className="logoimge px-3" />
          </Link>

          <div className="logotext d-flex flex-column justify-content-center align-items-start">
            <strong className="headtwo">घाट नांद्रे</strong>
            <h1 className="heading">GHAT NANDRE</h1>
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
              <h5
                className="offcanvas-title mobmenulogo"
                id="offcanvasNavbarLabel"
              >
                <strong className="headtwo">घाट नांद्रे</strong>
                <h1 className="heading">GHAT NANDRE</h1>
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
                <li className="nav-item fontlist">
                  <Link
                    className={`nav-link colormenu ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to={"/"}
                  >
                    मुख्यपृष्ठ
                  </Link>
                </li>
                <li className="nav-item fontlist">
                  <Link
                    className={`nav-link colormenu ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to={"/about"}
                  >
                    आमच्याविषयी
                  </Link>
                </li>
                <li className="nav-item fontlist">
                  <Link
                    className={`nav-link colormenu ${
                      location.pathname === "/map" ? "active" : ""
                    }`}
                    to={"/map"}
                  >
                    नकाशा
                  </Link>
                </li>
                <li className="nav-item fontlist">
                  <Link
                    className={`nav-link colormenu ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    to={"/contact"}
                  >
                    संपर्क
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
