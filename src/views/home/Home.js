// Libraries
import React from "react";
import TypeAnimation from "react-type-animation";

// Assets
import Signature from "../../assets/signature.png";

// Styles
import "./style.css";

/**
 * @author EKANAYAKA GMDP
 *
 * Home component
 * @returns JSX
 */
export default function Home() {
  return (
    <div className="my-photo-back">
      <div className="container pad pt-0 pb-4">
        <div className="row py-0">
          <div className="col-sm-7 h-50 py-5 px-2">
            <h2 className="text-white title">
              Hello, I'm Dineth Piyumantha, a software developer & UI designer.
            </h2>
            <img src={Signature} className="signature mt-5" alt="signature" />

            <p className="name mt-4 text-light">
              Dineth Piyumantha <br />
              IT Undergraduate at SLIIT
            </p>

            <input
              type="button"
              value="Download CV"
              className="btn btn-outline-light mt-3"
            />

            <br />
            <div class="mt-3 text-light">
              <span>
              <TypeAnimation
                className="type"
                cursor={true}
                repeat={Infinity}
                sequence={[
                  "React JS",
                  1000,
                  "React Native",
                  1000,
                  "Flutter",
                  1000,
                  "Vue JS",
                  1000,
                  "CSS3 and Bootstrap",
                  1000,
                  "UI/UX",
                  1000,
                  "Abobe Photoshop",
                  1000,
                  "Abobe Illustrator",
                  1000,
                  "Adobe XD",
                  1000,
                  "Github",
                  1000,
                  "Visual Studio / VS Code",
                  1000,
                  "InteliJ IDEA",
                  1000,
                  "Eclipse IDE",
                  1000,
                ]}
                wrapper="p"
              />
              </span>
            </div>
          </div>
          <div class="col-sm-5"></div>
        </div>
      </div>
    </div>
  );
}
