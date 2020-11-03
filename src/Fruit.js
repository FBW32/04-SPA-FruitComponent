import React, { Component } from 'react'



export default class Fruit extends Component {
state = {
    color: "red"
}

/* creating function that changes color */
changeColor=() => {
    let colorArray = ["red", "yellow", "blue", "pink"]
    this.setState({
        color : colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    
}



    render() {
        return (
            <div>
                {this.props.fruitName}, color = {this.state.color} 
                <button style={{marginLeft: "5px"}} onClick={this.changeColor}>Change color</button>
                <button style={{marginLeft: "5px"}} onClick={()=>this.props.deleteItem(this.props.fruitName)}>Delete me</button>
            </div>
        )
    }
}


