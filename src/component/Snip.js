import React from "react";
import PropTypes from "prop-types";
import hljs from "highlightjs";
import "highlightjs/styles/ocean.css";
//jsx
export default class Snip extends React.Component {
  static propTypes = {
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      code: PropTypes.string.isRequired
    })
  };
  constructor(props) {
    super(props);

    this.codeRef = React.createRef();
  }
  componentDidMount() {
    // select code block and highlight it
    hljs.highlightBlock(this.codeRef.current);
  }
  render() {
    const { title, description, language, code } = this.props.snippet;
    return (
      <div className="snip">
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <pre>
          <code ref={this.codeRef} className={language}>
            {code}
          </code>
        </pre>
      </div>
    );
  }
}
