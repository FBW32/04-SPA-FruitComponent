
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    status: false
  }

  changeColor = (e) => {
    document.body.style.backgroundColor = e.target.value
    this.setState({
      status: true
    })
    console.dir(e.target.value)
  }

  changeback = (e) => {
    document.body.style.backgroundColor = e.target.value
    this.setState({
      status: false
    })
    console.dir(e.target.name)
  }

  render() {
    return (
      <div className="App">
        <h1>Components 1</h1>
        <div style={{ display: "flex" }}>
          {this.state.status ? <h3 className="apple fruits"> Apple, color = green</h3> : null}
          <button onClick={this.changeColor} type="submit" name="changeColor" value="green" >Change Color</button>
          <button onClick={this.changeback} type="submit" name="delete" value="white" >Delete Me</button>
        </div>
        <div style={{ display: "flex" }}>
          {this.state.status ? <h3 className="apple fruits" >Mango, color = orange</h3> : null}

          <button onClick={this.changeColor} type="submit" name="changeColor" value="orange" >Change Color</button>
          <button onClick={this.changeback} type="submit" name="delete" value="white" >Delete Me</button>
        </div>
        <div style={{ display: "flex" }}>
          {this.state.status ? <h3 className="apple fruits" >Banana, color = gold</h3> : null}

          <button onClick={this.changeColor} type="submit" name="changeColor" value="gold" >Change Color</button>
          <button onClick={this.changeback} type="submit" name="delete" value="white" >Delete Me</button>
        </div>
        <div style={{ display: "flex" }}>
          {this.state.status ? <h3 className="apple fruits" >Lemon, color = yellow</h3> : null}

          <button onClick={this.changeColor} type="submit" name="changeColor" value="yellow" >Change Color</button>
          <button onClick={this.changeback} type="submit" name="delete" value="white" >Delete Me</button>
        </div>

      </div>
    )
  }
}



