import React, { Component } from 'react'
import Card from '../QuizCard'
import {ActionsContainer,NextButton,PrevButton} from './style'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export class QuizCards extends Component {
    constructor(props){
        super(props);
        this.state={
            score:0,
            userAnswer:null,
            currentQuestion:0,
            options:[],
            questions:[],
            answers:[],
            quizEnd:false,
            correctAnswer:'',
            disabled:true,
        }
    }

    loadQuiz = () => {
        const{cards,playerName} = this.props
        console.log(cards)

            const {currentQuestion} = this.state;
            this.setState(
                {
                    questions:cards[currentQuestion].question,
                    options:cards[currentQuestion].incorrect_answers.concat(cards[currentQuestion].correct_answer),
                    correctAnswer:cards[currentQuestion].correct_answer
                }
            
    
            )
        }
    componentDidMount(){
        this.loadQuiz();
    }
    handleCardChange = (e) =>{
      
        const {userAnswer,correctAnswer,score} = this.state
        this.setState({
            disabled:true,
            currentQuestion:this.state.currentQuestion + 1
        })
        if(correctAnswer===userAnswer){
            this.setState({
                score:this.state.score+1
            })
        }
    }
    componentDidUpdate(prevProps, prevState){
        const{cards} = this.props;
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion!== prevState.currentQuestion){
            this.setState(()=>{
                return{
                  disabled:true,
                  questions:cards[currentQuestion].question,
                  options:cards[currentQuestion].incorrect_answers.concat(cards[currentQuestion].correct_answer),
                  correctAnswer:cards[currentQuestion].correct_answer
                }
            })
        }
    }


   handleActive = answer => {
       this.setState({
           userAnswer:answer,
           disabled:false
       })
   } 

   finishHandler =() =>{
       const {userAnswer,correctAnswer,score} = this.state
       const{cards} = this.props
       if(this.state.currentQuestion===cards.length-1){
           this.setState({
               quizEnd:true
           })
       }
       if(correctAnswer===userAnswer){
        this.setState({
            score:this.state.score+1
        })
    }
   }
    render() {
        const{cards,restart,playerName} = this.props
        const{currentQuestion,questions,options,userAnswer,quizEnd,score}=this.state
        
        if(quizEnd){
            return(
                <div>
                    <Card restart={restart}score={score} playerName={playerName}/>
                </div>
            )
        }
        return (
            <Container maxWidth="sm">

                {/* <Card currentCard={currentQuestion} question={questions} options ={options} total={cards.length} /> */}
                <div>

                <h2> {questions}</h2>
                <h4>{`Question ${currentQuestion} out of ${cards.length-1}`}</h4>
                {options.map(option =>(
                    <p key={option} onClick={()=>this.handleActive(option)} 
                    className={`ui floating message 
                    ${userAnswer === option?"selected":null}
                    `}
                     >   
                    {option} 
                    
                    </p>
                )
                )}
                </div>
                <ActionsContainer>
                    {currentQuestion !== cards.length-1 && 
                    <NextButton disabled={this.state.disabled}  onClick={this.handleCardChange} >Next</NextButton>}
                    {currentQuestion === cards.length-1 &&
                    <PrevButton className="ui purple button"
                    onClick={this.finishHandler}
                    >Finish
                    </PrevButton>}
                </ActionsContainer>
            </Container>
        )
    }
}

export default QuizCards
