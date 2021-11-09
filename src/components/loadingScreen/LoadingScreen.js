import React from "react";
import LogoAnimation from "./LogoAnimation";
import "./style.css";

// eslint-disable-next-line
export default function () {
  return (
    <div class="loader-background">
      <div class="position-absolute top-50 start-50 translate-middle">
        <LogoAnimation />
      </div>
    </div>
  );
}
