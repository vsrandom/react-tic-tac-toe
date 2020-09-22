import React,{Component} from "react"
import classes from "./InputForm.module.css"

class InputForm extends Component{
   state = {
        firstPlayer : "",
        secondPlayer : ""
    }   

    onSubmitHandler = (event)=>{
        event.preventDefault();
        this.props.history.push({
            pathname : '/game',
            state : {
                firstPlayer : this.state.firstPlayer,
                secondPlayer : this.state.secondPlayer
            }
        });
    }

    onChangeHandler = (event)=>{
        if(event.target.name === "p1")
        {   
            this.setState({firstPlayer : event.target.value})
        }
        else{
            this.setState({secondPlayer : event.target.value})
        }       
    }

   render(){ 
    return(
        <div className = {classes.container}>
        <div className = {classes.heading}>
            <h1>TIC TAC TOE</h1>
        </div>
        <div>
            <form onSubmit = {this.onSubmitHandler} className = {classes.container1}>
                <div className = {classes.input}><label>Player - X : <input name = "p1" value = {this.state.firstPlayer}  onChange = {this.onChangeHandler}/></label></div>
                <div className = {classes.input}><label>Player - O : <input name = "p2" value = {this.state.secondPlayer} onChange = {this.onChangeHandler}/></label></div>
                <div className = {classes.button}><input className = {classes.buttonInput} value = "SUBMIT" type = "submit" /></div>
            </form>
        </div>
        </div>
    ) 
   }
}

export default InputForm




