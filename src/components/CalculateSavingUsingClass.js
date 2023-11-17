import React from "react";
import { Component } from "react";

class CalculateSavingUsingClass extends Component{
    constructor(){
        super();
        this.state={
            budget:"",
            expenses:"",
            amt:''
        }
    }
    handleBudget = (event)=>{
        this.setState({
            budget:event.target.value
        });
    }

    handleExpense =(event)=>{
        this.setState({
            expenses:event.target.value
    });
    }
    render(){

        var{budget,expenses,amt}=this.state;
        amt = budget-expenses;

        return(
            <>
        
            <h2>Saving After Expenses</h2>
            <label>Budget</label>
            <input type="number" onChange={this.handleBudget} value={this.state.budget}  />
            <label>Expense</label>
            <input type="number" onChange={this.handleExpense} value={this.state.expenses} />
            <br></br>
            <br></br>
            <label>Amount</label>
            <input type="number" value={amt}/>

            </>
        );
    }
}
export default CalculateSavingUsingClass; 