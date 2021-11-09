import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div>
      <form className="d-flex justify-content-center">
        <div className="card p-4 col-md-5">
          <h2>Get in touch with me</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              v-model="item.name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="user_name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email Address
            </label>
            <input
              v-model="item.email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="user_email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              v-model="item.message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dp mb-3 w-25">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
