import React from "react";
import "./App.css";
import Data from "./components/Data";
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Github Users</h1>
        <Search />
      </div>
      <div className="data-holder">
        <Data />
      </div>
    </div>
  );
}

export default App;
