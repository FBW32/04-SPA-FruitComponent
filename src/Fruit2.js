/* This file has been made by Naqvi */
/* I imported it to the App.js together with my Fruit.js */


import React, { Component } from 'react'


export default class Fruit2 extends Component {

    state = {
        color: "red",
        status:true
    }


changeColor = () => {
    let colors = ["green", "orange", "blue", "yellow"]
    this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
    })
}


    render() {
        return (
            <div>
                {this.state.status && <h2>   {/* this && means 'if it is true do that' without a else condition */}
                {this.props.fruitName}, color : {this.state.color} <button onClick={this.changeColor}>Change Color</button> 
               <button onClick={()=>this.setState({status:false})}>Reset</button>
               </h2> }
            </div>
        )
    }
}
