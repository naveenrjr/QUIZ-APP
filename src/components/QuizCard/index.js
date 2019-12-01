import React from 'react'
import {Option,Button} from './style'
import LeaderBoard from './LeaderBoard'

class Card extends React.Component  {
    constructor(props) {
        super(props)
    
        this.state = {
            leaderBoard:[],
            showBoard:false
        }
    }

    
    
    
    render(){
        const {leaderBoard,showBoard}= this.state
        
        const{restart,options,playerName,score} = this.props;
        console.log(options)
        
        return (
            

            <div className="ui center aligned container">
                 <h1>Your Score is  </h1>
                <div class="ui statistic">
                <div class="value">{score}</div>
                </div>
                <h1>Game Over</h1>
                <h1>{playerName}</h1>
               
                <button onClick={()=>alert("coming soon")} className="ui purple button"  >See LeaderBoard</button>
                <button onClick={restart} className="ui positive button">Restart</button>
                
            </div>
          
          )
    }

}

export default Card

