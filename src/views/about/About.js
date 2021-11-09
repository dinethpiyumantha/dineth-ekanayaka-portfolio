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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              debitis! Odio officiis ut, dolore quaerat culpa eius sunt
              necessitatibus similique labore inventore! Sequi dolores nobis
              minus laboriosam explicabo, magni voluptatibus sit magnam earum,
              consequuntur repellendus nostrum qui voluptate, eos dolor debitis
              ipsa nemo? Quasi soluta quibusdam qui debitis a. Nam, itaque
              laborum placeat eius rem laboriosam voluptatum nisi eveniet dolor
              magnam ipsa totam animi, labore reprehenderit dolore. Rem fuga
              reiciendis voluptates incidunt dicta sequi, doloribus perferendis
              tenetur, porro eveniet vel eligendi excepturi, ratione provident
              deleniti. Culpa sit, quis cum maxime assumenda repellendus
              voluptate maiores non minus sapiente exercitationem earum
              architecto.
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
