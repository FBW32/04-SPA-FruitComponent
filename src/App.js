import React, { Component } from "react";
import Fruit from "./Fruit";

export default class App extends Component {
  state = {
    fruits: [
      { key: "Apple", color: "red", deleted: false },
      { key: "Mango", color: "yellow", deleted: false },
      { key: "banana", color: "green", deleted: false },
      { key: "lemon", color: "orange", deleted: true },
    ],
  };

  changeColor = (item) => {
    let colors = ["red", "green", "yellow", "blue", "orange"];
    let i = Math.floor(Math.random() * 5);
    const newFruits = this.state.fruits.map((f) => {
      if (f.key === item.key) {
        f.color = colors[i];
      }
      return f;
    });

    this.setState({ ...this.state, newFruits });
    console.log(this.state);
  };
  deleteFruit = (item) => {
    const newFruits = this.state.fruits.map((f) => {
      if (f.key === item.key) {
        f.deleted = true;
      }
      return f;
    });
    this.setState({ ...this.state, newFruits });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {this.state.fruits.map((item) => {
          return item.deleted ? null : (
            <div>
              <Fruit fruitName={item.key} color={item.color} />
              <button
                type="button"
                value="changeColor"
                onClick={() => this.changeColor(item)}
              >
                Change Color
              </button>
              <button
                type="button"
                value="changeColor"
                onClick={() => this.deleteFruit(item)}
              >
                Delete Me
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
