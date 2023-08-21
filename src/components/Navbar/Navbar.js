import "./Navbar.css";
import Logo from "./images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();

    window.location.href = e.currentTarget.href;

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };
  return (
    <div>
      <nav class="navbar fixed-top  navbar-expand-lg">
        <div class="container-fluid container">
          <Link to="/">
            <img src={Logo} class="navbar-brand" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <Link to="/" onClick={handleLinkClick}>
                <img
                  src={Logo}
                  class="offcanvas-title"
                  id="offcanvasNavbarLabel"
                />
              </Link>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link className="link" to="/" onClick={handleLinkClick}>
                    <a class="nav-link" href="#">
                      HOME
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="dropdown-toggle services-nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SERVICES
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          className="link"
                          to="/brakerepair"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            BRAKE REPAIR
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/diagnostic"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            DIAGNOSTIC
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/engines"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            ENGINES
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/transmission"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            TRANSMISSION
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/oilchange"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            OIL CHANGE
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/tiresandwheels"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            TIRES & WHEELS
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/services"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            VIEW ALL
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="dropdown-toggle services-nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      VEHICLES
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          className="link"
                          to="/audi"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            AUDI
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/bmw"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            BMW
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/chevrolet"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            CHEVROLET
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/ford"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            FORD
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/honda"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            HONDA
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/fiat"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            FIAT
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          to="/vehicles"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            VIEW ALL
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="dropdown-toggle services-nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ABOUT
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          className="link"
                          to="/about"
                          onClick={handleLinkClick}
                        >
                          <a class="dropdown-item" href="#">
                            ABOUT
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          onClick={handleLinkClick}
                          to="/reviews"
                        >
                          <a class="dropdown-item" href="#">
                            REVIEWS
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <Link
                    className="link"
                    to="/specials"
                    onClick={handleLinkClick}
                  >
                    <a class="nav-link" href="#">
                      SPECIALS
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className="link"
                    onClick={handleLinkClick}
                    to="/contact"
                  >
                    <a class="nav-link" href="#">
                      CONTACT
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
