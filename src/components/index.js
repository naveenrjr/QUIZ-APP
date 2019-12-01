import React, { Component } from 'react'
import Data from '../services/QuizData'
import {Container,Button,Header,Input} from './style'
import QuizCards from './QuizContainer'
export class StartGame extends Component {
    constructor(props){
        super(props)
        this.state={
          questionSet:[],
          playerName:'',
          start:false
        }
      }
      LoadFiveQuestions =() =>{
        Data.getAll()
        .then(initialData=>{
        // get any 5 randomly out of the given 20 sets
          const allData=initialData.results.sort(() => 0.5 - Math.random()).slice(0, 10)
        // store the result in the state variable QuestionSet
          this.setState({
            questionSet:allData
          })
        })
      }
      componentDidMount(){
       this.LoadFiveQuestions()

      }
      
    handleChange = (e) => {
        this.setState({
            playerName:e.target.value
        })
    }
    handleStart = () => {
        this.setState({
            start:true
        })
    }
    handleRestart =() => {
        this.setState({
            start:false,
            playerName:''
        })
        this.LoadFiveQuestions()
    }
    
    render() {
        // const {}
        // console.log(this.state.QuestionSet);
        
        const {start} = this.state    

        return (
        <Container>
          {!start &&<React.Fragment>
          <Header>QUIZZ UP</Header>
            <div className="ui focus input" style={{'marginLeft':'10%','marginRight':'10%'}}>                                                  
            <Input type='text' placeholder ="Enter your name" 
            onChange={this.handleChange}
            value={this.state.playerName}
            required={true}
            >    
            </Input>
            </div>
            <Button className="ui positive button" onClick ={this.handleStart}>Start</Button>
            </React.Fragment>}
            {this.state.questionSet.length && start ? <QuizCards playerName={this.state.playerName} start={start} restart={this.handleRestart} cards={this.state.questionSet} />:null}
            
        </Container>
     )
    }
}

export default StartGame
