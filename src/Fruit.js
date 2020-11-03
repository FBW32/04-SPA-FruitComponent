import React,{Component} from 'react'


export default class Fruit extends Component {
    state={color:"red",status:true}

    changeColor=()=>{
    let colorsArray=["red","yellow","green","orange"]
    let newColor=colorsArray[Math.floor(Math.random()*colorsArray.length)]
    while(newColor===this.state.color){
        newColor=colorsArray[Math.floor(Math.random()*colorsArray.length)]
    }
    this.setState({color:newColor})}

    render(){
        return (
            <div>
           {this.state.status && 
           <h1>{this.props.fruitName} ,color = {this.state.color}
            <button onClick={this.changeColor}>Change Color</button>
          <button onClick= {()=>{this.setState({status:false})}}>Delete Me</button></h1> }
          </div>
            
        )
        }}