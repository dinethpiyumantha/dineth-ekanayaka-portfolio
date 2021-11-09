import React from "react";
import "./style.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="d-flex justify-content-center" onSubmit={this.handleSubmit}>
          <div className="card p-md-4 col-md-5">
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
                value={this.state.name}
                onChange={this.handleNameChange}
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
                value={this.state.email}
                onChange={this.handleEmailChange}
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
                value={this.state.message}
                onChange={this.handleMessageChange}
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
}
