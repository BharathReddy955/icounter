
import React, { Component } from 'react'
import './counter.css'
export default class Counter extends Component {
        constructor(){
            super()
            this.state={
                count:0
            }
        }

        Increment(){
            this.setState({
                count:this.state.count+1}
            )
        }
        Decrement(){
            this.setState({
                count:this.state.count-1
            })
        }


  render() {
    return (
      <>
       <div className="container">
       <center>
      <h1>Interactive counter</h1>
      <h2>count:{this.state.count}</h2>
        <br />
        <br />
        <br />

            <div className="btn_container">
      <button id="btn1" onClick={this.Increment.bind(this)}>increment</button>
      <button onClick={this.Decrement.bind(this)}>decrement</button>
      </div>
      </center>
           
           </div>
      </>
    )
  }
}
