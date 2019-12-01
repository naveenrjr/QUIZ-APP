import React from 'react'

const  LeaderBoard = (props) => {
    
    const {board:{playerName,score}} = props;
    
    return (
        <div style={{'display':'flex'}}> 
           {playerName}
           {score} 
        </div>
    )
}

export default LeaderBoard;


