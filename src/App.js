import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Halaman Home</h2>;
}
function ListView() {
  return (
    <div>
      <h2>Halaman User</h2>
      <ul>
        <Link to="user/himan">Hilman</Link>
        <br />
        <Link to="user/robert">Robert</Link>
      </ul>
    </div>
  );
}
function DetailView({ match }) {
  return <h2>Ini Halaman {match.params.name}</h2>;
}
function NoMatch() {
  return <h2>404, Page Not Found</h2>;
}

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      // React fragment digunakan untuk menghindari error karena di react setiap element harus dibungkus dengan sebuah tag.
      <React.Fragment>
        <td>Data satu</td>
        <td>Data berikutnya</td>
      </React.Fragment>
    );
  }
}
export default App;
