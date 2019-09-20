import React, { Component } from "react";
import PropTypes from "prop-types";
import SnipList from "./snipList";
import SearchBar from "./SearchBar";
import Form from "./Form";
import axios from "axios";

export default class Snippet extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      snippets: []
    };
  }
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/api/snippets");
    this.setState({
      snippets: data
    });
  }

  createSnippets = async snipData => {
    await axios.post("http://localhost:5000/api/snippets", snipData);
    const { data } = await axios.get("http://localhost:5000/api/snippets");
    this.setState({
      snippets: data
    });
  };

  fetchSnippets = async searchText => {
    //fetch snips from database
    const { data: snippets } = await axios.get(
      "http://localhost:5000/api/snippets"
    );
    //filter them
    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());

    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || "", searchText) ||
        matchStr(snippet.description || "", searchText) ||
        matchStr(snippet.code || "", searchText) ||
        matchStr(snippet.language || "", searchText)
    );
    //set state
    this.setState({
      snippets: filteredSnips
    });
  };

  render() {
    return (
      /* <> is short hand from <React.Fragment> */
      <>
        <SearchBar onSearch={this.fetchSnippets} />
        <Form onCreate={this.createSnippets} />
        <SnipList snippets={this.state.snippets} />
      </>
    );
  }
}
