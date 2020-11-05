import React, { Component } from 'react'
import Fruit from './Fruit'

export default class App extends Component {

  state={
    status:true,
    fruits:['Apple', 'Banana', 'Mango', 'Orange']
  }


  render() {
    return (
      <div >
        {
        this.state.status && 
        <div>
          {this.state.fruits.map(fruitName =>{

            return (
              <Fruit fruitName={fruitName}/>
              
          )        
          })}
          <button onClick={()=>this.setState({status:false})}>Delete all</button>
        </div>
      }
      
      </div>
    )
  }
}

