import React, {Component} from 'react';
// import logo from '../logo.svg';
import classes from './Game.module.css'
import Box from '../components/Box/Box'
import Draw from '../components/Draw/Draw'

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
      firstPlayer : 'X',
      secondPlayer : 'O',
      winner : "None",
      scoreX : 0,
      scoreY : 0,
      numberOfClicks : 0
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
          if(mark === 'X')
          this.setState({winner : this.state.firstPlayer, winningBoxes : winningBoxesTemp,scoreX : this.state.scoreX + 1});
          else this.setState({winner : this.state.secondPlayer, winningBoxes : winningBoxesTemp, scoreY : this.state.scoreY + 1});
        }
    }

    componentDidMount(){
      this.setState({firstPlayer : this.props.location.state.firstPlayer, 
        secondPlayer : this.props.location.state.secondPlayer})
    }

    onClickHandler = (x,y)=>{
        if(this.state.winner === "None"){
          if(this.state.gameArray[x][y] === null){
            let gameArrayTemp = [...this.state.gameArray];
            let currentTurnTemp = this.state.currentTurn;
            gameArrayTemp[x][y] = currentTurnTemp;
            if(currentTurnTemp === 'X') currentTurnTemp = 'O'
            else currentTurnTemp = 'X';
            this.checkWinnerHandler(x,y,gameArrayTemp[x][y]);
            this.setState({gameArray : gameArrayTemp, currentTurn : currentTurnTemp,numberOfClicks : this.state.numberOfClicks + 1})
          }
        }
    }

    newGameHandler = ()=>{
        let gameArrayTemp = [...this.state.gameArray];
        for(let i=0;i<=2;i++)
        {
          for(let j=0;j<=2;j++) gameArrayTemp[i][j] = null;
        }
        let winningBoxesTemp = [...this.state.winningBoxes];
        for(let i = 0;i<9;i++) winningBoxesTemp[i] = null;
        this.setState({gameArray : gameArrayTemp, winner : "None", currentTurn : 'X',winningBoxes : winningBoxesTemp,numberOfClicks : 0})
    }

    resetHandler = ()=>{
      let gameArrayTemp = [...this.state.gameArray];
      for(let i=0;i<=2;i++)
      {
        for(let j=0;j<=2;j++) gameArrayTemp[i][j] = null;
      }
      let winningBoxesTemp = [...this.state.winningBoxes];
      for(let i = 0;i<9;i++) winningBoxesTemp[i] = null;
      this.setState({scoreX : 0, scoreY : 0,gameArray : gameArrayTemp, winner : "None", currentTurn : 'X',winningBoxes : winningBoxesTemp, numberOfClicks : 0})   
    }

    render(){
      const csb = [classes.button]

      const csw = [classes.winner]

      if(this.state.winner != "None")
      {
        csb.push(classes.highlightButton);
        csw.push(classes.winnerHighlight);
      }

      let csact1 = [classes.turnItems]
      let csact2 = [classes.turnItems]

      if(this.state.currentTurn === 'X')
      csact1.push(classes.green)
      else csact2.push(classes.green);
      
      let wc1 = [classes.scoreItem]
      let wc2 = [classes.scoreItem]
      if(this.state.scoreX > this.state.scoreY) wc1.push(classes.cwinner)
      else if(this.state.scoreX < this.state.scoreY) wc2.push(classes.cwinner)
      else{
        if(this.state.scoreX > 0 && this.state.scoreY > 0){
          wc1.push(classes.cwinner)
          wc2.push(classes.cwinner);
        }
      }
      
      let gridContainer = [classes.container2]
      if(this.state.numberOfClicks === 9 && this.state.winner === "None")
      {
        gridContainer.push(classes.draw)
        csb.push(classes.highlightButton);
      }

      let middleSection = <div>
        <div>
            <Draw clicks = {this.state.numberOfClicks} winner = {this.state.winner}/>
        </div> 
        <div className = {gridContainer.join(' ')}>
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



      return(
        <div className = {classes.container1}>
          <div className = {classes.heading}><h1>TIC TAC TOE</h1></div>
          <div className = {classes.winnerContainer}>
            <div className = {csw.join(' ')}> <div>Winner : {this.state.winner}</div></div>
            <div className = {csb.join(' ')} onClick = {this.newGameHandler}><div>Play-Again</div></div>
          </div>
          <div className = {classes.turn}>
              <div className = {csact1.join(' ')}>X : {this.state.firstPlayer} </div>
              <div className = {csact2.join(' ')} >O : {this.state.secondPlayer} </div>
          </div>
          {middleSection}
          <div className = {classes.scoreContainer}>
              <div className = {wc1.join(' ')}>{this.state.firstPlayer} : {this.state.scoreX}</div>
              <div className = {wc2.join(' ')}>{this.state.secondPlayer} : {this.state.scoreY}</div>
          </div>
          <div className = {classes.resetContainer}>
              <button className = {classes.reset} onClick = {this.resetHandler}>RESET</button>
          </div>  
        </div>
      )
    }
}


export default App;
