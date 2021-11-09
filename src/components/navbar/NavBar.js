import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * Responsive Navigation bar extention
 * @returns JSX
 */
export default function NavBar() {
  return (
    <nav className="collapse navbar-collapse d-flex justify-content-center gap-3 my-3">
      <Link to="/">
        <div class="btn btn-outline-light rounded-circle" title="Home">
          <i class="fas fa-home"></i>
        </div>
      </Link>
      <Link to="/about">
        <div class="btn btn-outline-light rounded-circle" title="About Me">
          <i class="fas fa-user-circle"></i>
        </div>
      </Link>
      <Link to="/contact">
        <div class="btn btn-outline-light rounded-circle" title="Contact Me">
          <i class="fas fa-envelope"></i>
        </div>
      </Link>
      <Link to="/portfolio">
        <div class="btn btn-outline-light rounded-circle no-mobile">
          <i class="fas fa-briefcase"></i>
        </div>
      </Link>

      <a href="https://github.com/dinethpiyumantha" target="_blank">
        <div class="btn btn-outline-light rounded-circle no-mobile">
          <i class="fab fa-github"></i>
        </div>
      </a>
    </nav>
  );
}
