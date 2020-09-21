import React, {Component} from 'react';
// import logo from '../logo.svg';
import classes from './App.module.css'
import Box from '../components/Box/Box'
class App extends Component{
    state = {
      winningBoxes : [
        null,null,null,null,null,
        null,null,null,null
      ],
      gameArray : [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ],
      currentTurn : 'X',
      winner : "None"
    }

    checkWinnerHandler = (x,y,mark)=>{
        // check horizontal , vertical , diagonal
        let gameArrayTemp = [...this.state.gameArray];
        let winningBoxesTemp = [...this.state.winningBoxes];
        let h = 0, v = 0, d=0, dr=0;
        let j=0; 
        for(;j<=2;j++)
        {
          if(gameArrayTemp[x][j] !== mark)
          break;
        }
        if(j===3)
        {
          h=1;
          for(let j=0;j<=2;j++)
          {
            winningBoxesTemp[3*x+j] = 1;
          }
        } 

        j=0;

        for(;j<=2;j++)
        {
          if(gameArrayTemp[j][y] !== mark)
          break;
        }

        if(j===3)
        {
          h=1;
          for(let j=0;j<=2;j++)
          {
            winningBoxesTemp[y+3*j] = 1;
          }
        } 
          
        j=0;

        for(;j<=2;j++)
        {
          if(gameArrayTemp[j][j] !== mark)
          break;
        }

        if(j===3)
        {
          d = 1;
          winningBoxesTemp[0] = 1;
          winningBoxesTemp[4] = 1;
          winningBoxesTemp[8] = 1;
        }

        j=2;
        let ridx = 0;
        for(;j>=0;j--)
        {
          if(gameArrayTemp[ridx][j]!== mark)
          break;
          ridx++;
        }

        if(j==-1)
        {
          dr = 1;
          winningBoxesTemp[2] = 1;
          winningBoxesTemp[4] = 1;
          winningBoxesTemp[6] = 1; 
        }


        if(h===1 || v===1 || d===1 || dr===1) 
        {
          this.setState({winner : mark, winningBoxes : winningBoxesTemp});
        }
    }

    onClickHandler = (x,y)=>{
        if(this.state.winner === "None"){
          if(this.state.gameArray[x][y] === null){
            let gameArrayTemp = [...this.state.gameArray];
            let currentTurnTemp = this.state.currentTurn;
            gameArrayTemp[x][y] = currentTurnTemp;
            if(currentTurnTemp === 'X') currentTurnTemp = 'O'
            else currentTurnTemp = 'X';
            this.setState({gameArray : gameArrayTemp, currentTurn : currentTurnTemp})
            this.checkWinnerHandler(x,y,gameArrayTemp[x][y]);
          }
        }
    }

    resetHandler = ()=>{
        let gameArrayTemp = [...this.state.gameArray];
        for(let i=0;i<=2;i++)
        {
          for(let j=0;j<=2;j++) gameArrayTemp[i][j] = null;
        }
        let winningBoxesTemp = [...this.state.winningBoxes];
        for(let i = 0;i<9;i++) winningBoxesTemp[i] = null;
        this.setState({gameArray : gameArrayTemp, winner : "None", currentTurn : 'X',winningBoxes : winningBoxesTemp})
    }

    render(){
      const csb = [classes.button]

      const csw = [classes.winner]

      if(this.state.winner != "None")
      {
        csb.push(classes.highlightButton);
        csw.push(classes.winnerHighlight);
      }

      return(
        <div className = {classes.container1}>
          <div className = {classes.heading}><h1>TIC TAC TOE</h1></div>
          <div className = {classes.winnerContainer}>
            <div className = {csw.join(' ')}> <div>Winner : {this.state.winner}</div></div>
            <div className = {csb.join(' ')} onClick = {this.resetHandler}><div>RESET</div></div>
          </div>
          <div className = {classes.turn}><div>{this.state.currentTurn} : Player's Turn</div></div>
          <div className = {classes.container2}>
              <Box  hlt = {this.state.winningBoxes[0]} value = {this.state.gameArray[0][0]} click = {()=>this.onClickHandler(0,0)}/>
              <Box  hlt = {this.state.winningBoxes[1]}  value = {this.state.gameArray[0][1]} click = {()=>this.onClickHandler(0,1)}/>
              <Box  hlt = {this.state.winningBoxes[2]}  value = {this.state.gameArray[0][2]} click = {()=>this.onClickHandler(0,2)}/>
              <Box  hlt = {this.state.winningBoxes[3]}  value = {this.state.gameArray[1][0]} click = {()=>this.onClickHandler(1,0)}/>
              <Box  hlt = {this.state.winningBoxes[4]}  value = {this.state.gameArray[1][1]} click = {()=>this.onClickHandler(1,1)}/>
              <Box  hlt = {this.state.winningBoxes[5]}  value = {this.state.gameArray[1][2]} click = {()=>this.onClickHandler(1,2)}/>
              <Box  hlt = {this.state.winningBoxes[6]}  value = {this.state.gameArray[2][0]} click = {()=>this.onClickHandler(2,0)}/>
              <Box  hlt = {this.state.winningBoxes[7]}  value = {this.state.gameArray[2][1]} click = {()=>this.onClickHandler(2,1)}/>
              <Box  hlt = {this.state.winningBoxes[8]}  value = {this.state.gameArray[2][2]} click = {()=>this.onClickHandler(2,2)}/>                     
          </div>  
        </div>
      )
    }



}


export default App;
