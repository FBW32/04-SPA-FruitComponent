import React, { Component } from 'react'

export default class Fruit extends Component {
    state = {
        color: "black",
        status: true
    }
    changeColor = () => {
        let colors = ["red", "orange", "blue", "yellow", "green", "blue"]
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)],
        })

    }

    deleMe = () => {
        this.setState({
            status: false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.status ?
                        <h1 style={{ color: this.state.color }} >{this.props.fruitName}, color:{this.state.color} <button onClick={this.changeColor} > Change Color </button> <button onClick={this.deleMe} > Delete Me</button> </h1 >

                        : null
                }
            </div >
        )
    }
}
