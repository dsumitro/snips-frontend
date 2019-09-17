import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "Dean",
      language: "HTML",
      description: "",
      code: ""
    };
  }

  //uses newer arrow syntax to bind method to this
  handleChange = (event, field) => {
    //capture input data from the event
    const { value } = event.target;
    //update state
    this.setState({
      [field]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const snipData = this.state;
    this.props.onCreate(snipData);
    console.log(snipData);
  };

  render() {
    return (
      <section id="createSnip">
        <h2>Create a Snip!</h2>
        <form id="newSnip" onSubmit={this.handleSubmit}>
          <div>
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={event => this.handleChange(event, "title")}
            />
          </div>
          <div>
            Language
            <select
              name="language"
              id="language"
              value={this.state.language}
              onChange={event => this.handleChange(event, "language")}
            >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="SQL">SQL</option>
            </select>
          </div>
          <div>
            Description
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={this.state.description}
              onChange={event => this.handleChange(event, "description")}
            ></textarea>
          </div>
          <div>
            Code
            <textarea
              name="code"
              id="code"
              cols="30"
              rows="10"
              value={this.state.code}
              onChange={event => this.handleChange(event, "code")}
            ></textarea>
          </div>
          <button type="submit">Create</button>
        </form>
      </section>
    );
  }
}