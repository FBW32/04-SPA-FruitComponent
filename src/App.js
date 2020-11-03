import React, { Component } from 'react'
import Fruit from './Fruit';

export default class App extends Component { 
  
  render() {

     let fruits=["Apple","Mango","Banana","Lemon"]
     
    return (
    <div className="App">
      <h1>Components 1</h1>
      <ul>
        {fruits.map(item=>
          <li  style={{display:"flex"}}><Fruit fruitName={item} 
          />
         </li>
        )}
      </ul>
    </div>
    )
  }
}