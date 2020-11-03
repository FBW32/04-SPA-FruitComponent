import React, { Component } from 'react'
import Fruit from './Fruit'
import Fruit2 from './Fruit2'

export default class App extends Component {
 
  state = {
    fruitArray: ["Apple", "Mango", "Banana", "Lemon"],
    fruits: ["Apple", "Banana", "Mango","Lemon"]
  }


  deleteItem = (fruitName) => {
    let newFruitArr = [...this.state.fruitArray].filter(item=>item!==this.fruitName)

    this.setState({
      fruitArray : newFruitArr
    })
  }


  render() {
    return (
      <div>
        <h1>Components 1 - My Solution </h1>
        {this.state.fruitArray.map(fruit=>{
          return <Fruit fruitName={fruit} deleteItem={this.deleteItem}/>
        })}
        
            <div>
            <h1>Components 2 -Solution from Naqvi</h1>
                {this.state.fruits.map(fruitName=>{
                    return (
                        <Fruit2 fruitName={fruitName}/>
                    )
                })}
               
            </div>
        


      </div>
    )
  }
}
