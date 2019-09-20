import React from "react";
import "../css/style.css";
import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Snippet from "./Snippet";
import Account from "./Account";
import Home from "./Home";
import FOUROHFOUR from "./FOUROHFOUR";
class App extends React.Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = {
      snippets: []
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/snippets" component={Snippet} />
          <Route path="/account" exact component={Account} />
          <Route component={FOUROHFOUR} />
        </Switch>
      </Router>
    );
  }
}
export default App;
