import React from "react";
import "./App.css";
import MovieList from "./component/MovieList/MovieList";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./component/Movie/Movie";
import NavSearch from "./component/NavSearch/NavSearch";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movie" component={Movie} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
export default App;
