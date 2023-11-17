import { Component } from "react";

class MyClassComponent extends Component{
    render(){
        return(
            <>
            <h1>My City is {this.props.myCity}</h1>
            </>
        )
    }
    
}

export default MyClassComponent




/* only one componnet is exported as default */