import React, {Component} from 'react';
import logo from '../logo.svg';
import classes from './App.module.css'
import Box from '../components/Box/Box'

let GLOBAL_STATE = {
  Game : [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ],
  Turn : 'X',
  Winner : "None"
}
class App extends Component{
    state = {
      gameArray : [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ],
      currentTurn : 'X',
      winner : "None"
    }

    checkWinnerHandler = (x,y,mark)=>{
        let tx = x;
        let ty = y;
        // check horizontal , vertical , diagonal
        let gameArrayTemp = this.state.gameArray;
        let h = 0, v = 0, d=0;
        let j=0; 
        for(;j<=2;j++)
        {
          if(gameArrayTemp[x][j] !== mark)
          break;
        }
        if(j===3) h=1;

        j=0;

        for(;j<=2;j++)
        {
          if(gameArrayTemp[j][y] !== mark)
          break;
        }

        if(j===3) h=1;
          
        j=0;

        for(;j<=2;j++)
        {
          if(gameArrayTemp[j][j] !== mark)
          break;
        }

        if(j===3) d =1;

        if(h===1 || v===1 || d===1) 
        {
          this.setState({winner : mark});
        }
    }

    onClickHandler = (x,y)=>{
        let gameArrayTemp = [...this.state.gameArray];
        let currentTurnTemp = this.state.currentTurn;
        gameArrayTemp[x][y] = currentTurnTemp;
        if(currentTurnTemp === 'X') currentTurnTemp = 'O'
        else currentTurnTemp = 'X';
        this.setState({gameArray : gameArrayTemp, currentTurn : currentTurnTemp})
        this.checkWinnerHandler(x,y,gameArrayTemp[x][y]);
    }

    resetHandler = ()=>{
        let gameArrayTemp = this.state.gameArray;
        for(let i=0;i<=2;i++)
        {
          for(let j=0;j<=2;j++) gameArrayTemp[i][j] = null;
        }

        this.setState({gameArray : gameArrayTemp, winner : "None", currentTurn : 'X'})
    }

    render(){
      return(
        <div className = {classes.container1}>
          <div className = {classes.winner}> <div>Winner : {this.state.winner}</div></div>
          <div className = {classes.turn}><div>{this.state.currentTurn} : Player's Turn</div></div>
          <div className = {classes.container2}>
              <Box  value = {this.state.gameArray[0][0]} click = {()=>this.onClickHandler(0,0)}/>
              <Box  value = {this.state.gameArray[0][1]} click = {()=>this.onClickHandler(0,1)}/>
              <Box  value = {this.state.gameArray[0][2]} click = {()=>this.onClickHandler(0,2)}/>
              <Box  value = {this.state.gameArray[1][0]} click = {()=>this.onClickHandler(1,0)}/>
              <Box  value = {this.state.gameArray[1][1]} click = {()=>this.onClickHandler(1,1)}/>
              <Box  value = {this.state.gameArray[1][2]} click = {()=>this.onClickHandler(1,2)}/>
              <Box  value = {this.state.gameArray[2][0]} click = {()=>this.onClickHandler(2,0)}/>
              <Box  value = {this.state.gameArray[2][1]} click = {()=>this.onClickHandler(2,1)}/>
              <Box  value = {this.state.gameArray[2][2]} click = {()=>this.onClickHandler(2,2)}/>                     
          </div>
          <div className = {classes.button}><div onClick = {this.resetHandler}>RESET</div></div>
        </div>
      )
    }



}


export default App;
