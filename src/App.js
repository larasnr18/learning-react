import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
    console.log(this.state.todoItem);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoItem}
            onChange={this.handleChange}
          ></input>
          <button>Add</button>
        </form>

        <p>
          <b>Hal yang harus dilakukan hari ini adalah:</b>
        </p>
        <List items={this.state.items} />
      </div>
    );
  }
}
export default App;
