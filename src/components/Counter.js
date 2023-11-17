import React from 'react'
import { Component } from 'react'

class Counter extends Component{
    constructor(props){
        console.log("constructed")
        super(props)

        this.state ={
            counter:0
        }
        this.increment =() => this.setState({counter:this.state.counter+1})
        this.decrement =() => this.setState({counter:this.state.counter-1})
    }

    componentDidMount(){
        console.log("Component did mount")
        console.log("--------------------")
    }
    render(){
        console.log("Render")
        return(
            <>
            <button onClick ={this.increment}>Increment</button>
            <button onClick ={this.decrement}>Decrement</button>
            <div className="counter">
                counter:{this.state.counter}
            </div>
            </>
        );
        
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("component did update")
        console.log("----------------------------")
    }
}

export default Counter;