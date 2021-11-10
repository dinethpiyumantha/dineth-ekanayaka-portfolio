import React from "react";

export default function Card({image, title, tags}) {

    const listTags = tags.map((tag) => <span class="badge bg-light text-dark">{tag}</span> );

    return (
      <div
        className="col-md-3 p-0"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <div
          style={{
            background: "#000",
            opacity: "50%",
            position: "relative",
            height: "100%",
          }}
        ></div>
        <div
          className="p-2 text-light"
          style={{
            background: "#000",
            position: "relative",
            minHeight: "80px",
          }}
        >
          <small>{ title }</small>
          <div className="d-flex gap-1 flex-wrap">
              { listTags }
          </div>
        </div>
      </div>
    );
}
