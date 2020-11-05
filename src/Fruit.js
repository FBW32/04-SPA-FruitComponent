import React, { Component } from 'react'

export default class Fruit extends Component {

    state={
        color:"red",
        status:true
    }

    changeColor=()=>{
        let colors = ['green', 'orange', 'purple', 'blue', 'yellow', 'red']
        this.setState({
            color: colors[Math.floor(Math.random()*colors.length)]
        })
    }


    render() {
        return (
            <div>

               {this.state.status && <h1>
                    {this.props.fruitName}, color = {this.state.color} <button onClick={this.changeColor}>Change color</button>
                    <button onClick={()=>this.setState({status:false})}>Delete Color</button>
                </h1>}
                

            </div>
        )
    }
}
