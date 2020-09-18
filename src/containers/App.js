import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.module.css'
import Box from '../components/Box/Box'

class App extends Component{
    state = {
      boxValue : null,
      gameArray : [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ],
      currentTurn : 'X',
      winner : "None"
    }

    render(){
      return(
        <div className = {classes.container1}>
          <div className = {classes.winner}> <div>Winner : {this.state.winner}</div></div>
          <div className = {classes.turn}><div>{this.state.currentTurn} : Player's Turn</div></div>
          <div className = {classes.container2}>
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />                     
          </div>
        </div>
      )
    }



}


export default App;
