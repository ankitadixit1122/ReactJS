import { Component } from "react";

class MyComponent extends Component{


    state ={
        value:''  // this value will be update everytime
    };


    getValue =(event) =>{
        console.log("Event: ",event.target.value);
        this.setState({ value: event.target.value});

    }

    handlesubmit =(event) =>{
         event.preventDefault();                       // stop the browser from default behaviour of refreshing everytime(reloading)
                                                            // abcd
        const value =this.state.value;   // onClick submit this will get updated value from state
    }


    render(){
        console.log('State: ',this.state);
    return(
        <>  
            <h1>My Name is {this.state.value}</h1>
            <h1>Enter your name</h1><br></br>
            <input type='text' onChange = {this.getValue}/>
            <button onClick={this.handlesubmit}>submit</button>  
        </>
        )
    }    
}

export default MyComponent;