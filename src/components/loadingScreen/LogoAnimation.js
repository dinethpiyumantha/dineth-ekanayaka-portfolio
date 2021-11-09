import * as React from "react";

function LogoAnimation(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "0 0",
      }}
      width={128}
      height={128}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="prefix__position-absolute prefix__top-50 prefix__start-50 prefix__translate-middle"
      display="block"
      {...props}
    >
      <path
        fill="none"
        stroke="#fff"
        strokeWidth={4.8}
        strokeDasharray="42.76482137044271 42.76482137044271"
        d="M14.58 18C6.84 18 3 25.98 3 30s3.84 12 11.58 12c11.58 0 19.26-24 30.84-24C53.16 18 57 25.98 57 30s-3.84 12-11.58 12c-11.58 0-19.26-24-30.84-24z"
        strokeLinecap="round"
        style={{
          transformOrigin: "50px 50px",
        }}
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
  );
}

export default LogoAnimation;
