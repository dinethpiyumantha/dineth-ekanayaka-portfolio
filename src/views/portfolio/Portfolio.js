import React from "react";

import Card from "./componets/Card";

import PrezImage from "../../assets/gallery/prez.png";
import GametuneImage from "../../assets/gallery/gametune.png";
import VacImage from "../../assets/gallery/vac.png";

export default function Portfolio() {
  return (
    <div className="container">
      <div>
        <h2 className="text-light">Portfolio</h2>
        <div className="row gap-1 d-flex flex-wrap">
          <Card
            image={PrezImage}
            title={"PREZ Online Presentation System"}
            tags={["HTML5", "CSS3", "PHP", "MySQL", "XAMPP"]}
          />
          <Card
            image={GametuneImage}
            title={"Gametune Online gaming System"}
            tags={["JSP", "CSS3", "JAVA", "Apache TomCat", "MySQL"]}
          />
          <Card
            image={VacImage}
            title={"C19 Vaccination System"}
            tags={["Vue.JS", "Ant Design", "MySQL", "Node", "Laravel"]}
          />
        </div>
      </div>
    </div>
  );
}
