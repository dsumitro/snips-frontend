import React from "react";
import "../css/App.css";
import "../css/style.css";
import SnipList from "./snipList";
import SearchBar from "./SearchBar";
import Form from "./Form";
import axios from "axios";

class App extends React.Component {
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
    this.componentDidMount();
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
      <React.Fragment>
        <header class="default-header">
          <nav>
            <a href="/">Home</a>
            <a href="about.html">about</a>
            <a href="snippets.html">snippets</a>
            <a href="account.html">account</a>
          </nav>
        </header>
        <SearchBar onSearch={this.fetchSnippets} />
        <Form onCreate={this.createSnippets} />
        <SnipList snippets={this.state.snippets} />
      </React.Fragment>
    );
  }
}
export default App;
