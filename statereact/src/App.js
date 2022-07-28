import React, { Component } from 'react'
import "./App.css";
export default class App extends Component {
  state={
    person:{
      fullName: 'Marwen',
      bio :'Bio',
      imgsrc:'./avatar.jpg',
      profession:'Student'},
      show:false,
      count:0
    }
    
    render() {
    return (
      <div className='App'>
        {this.state.show ? <div> <img src={this.state.person.imgsrc} style={{height:'400px',width:'300px'}} /><h1>{this.state.person.fullName}</h1> <h2>{this.state.person.bio}</h2> <h2>{this.state.person.profession}</h2></div>:null}
        <button onClick={()=>this.setState({show:!this.state.show})}>Show</button>
        <h1 style={{color:'Blue'}}>Counting Cycles</h1>
        <h1 style={{color:'Blue'}}>{this.state.count}</h1>
      </div>
    )
  }
  componentDidMount  (){
    setInterval(()=>{this.setState({count:this.state.count+1})},1000)
  }
}