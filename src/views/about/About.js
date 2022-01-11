import React from "react";
import './style.css';

export default function About() {
  return (
    <div class="my-photo-back-color">
      <div class="container pt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 text-light">
            <h3>About Me</h3>
            <p>
              I am an undergraduate student at the faculty of computing - SLIIT of Sri Lanka pursuing my BSc (special) in Information Technology.
              Seeking a beginner role to enhance and explore my technical knowledge gained at SLIIT University in the last two years. I am always highly enthused about my work and tasks ahead and also I am committed to learning and self-development so that I can consistently achieve better results.
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn text-xxl text-light">
            <i class="fab fa-linkedin"></i>
          </button>
          <button class="btn text-xxl text-light">
            <i class="fab fa-twitter"></i>
          </button>
          <button class="btn text-xxl text-light">
            <i class="fab fa-github"></i>
          </button>
          <button class="btn text-xxl text-light">
            <i class="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
