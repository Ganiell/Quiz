import db from '../db.json'
import BackgroundImg from '../src/components/BackgroundImg'
import Art from '../src/components/Art'
import Container from '../src/components/Container'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Button from '../src/components/Button'
import styled from 'styled-components'
import Questions from '../src/components/Question'
import { useState } from 'react'


const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

export default function Quiz(){
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const [results, setResults] = useState([])
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]
    const totalQuestion = db.questions.length

    function addResult(result) {
        setResults([...results, result])
    }

    // React chama de: Effects
    // Nasce === didMount
    // atualizado == willUpdate
    // morre == willUnmount 

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 1000)
        // nasce === didMount
     })

     console.log(screenState)


    function handleSubmit() {
        const nextQuestion = questionIndex + 1
        if(nextQuestion < totalQuestion) {
            setCurrentQuestion(nextQuestion)
        } else {
            setScreenState(screenStates.RESULT)
        }
    }



    return(
        <BackgroundImg.ContainerBase>
            <Head>
                <title>Quiz</title>
            </Head>
            <Container>
                {screenState === screenStates.QUIZ && (
                    <Questions
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestion={totalQuestion}
                        onSubmit={handleSubmit}
                        addResult={addResult}
                    />
                )}
                {screenState === screenStates.LOADING && <QuestionLoad/>}
                {screenState === screenStates.RESULT && <Result results={results}/>}
            </Container>
            <GitHubCorner/>
        </BackgroundImg.ContainerBase>
    )
}



const LoadBase = styled.div`
    margin: 35% 0;
    img{
        display: block;
        margin: 20px auto;  
        transition: all 0.5s;      
    }
    transition: all 0.5s;
`

function QuestionLoad() {
    return(
        <LoadBase style={{height: "80%"}}>
            <img width="100" srcSet="https://media.giphy.com/media/mC2DZt4XbniTMDXRZj/giphy.gif"></img>
            <img width="200"  srcSet="https://media1.giphy.com/media/PPG0driJ3lSOwty9KF/giphy.gif"></img>
        </LoadBase>

    )
}

function Result( { results } ){
    return(
        <ResultBase>
            <span>Acertou {results.filter((x) => x).length}  
            {` `} e Errou {results.filter((x) => !x).length} </span>

            <ul>
                {results.map((result, resultIndex) => (
                    <li key={`result__${resultIndex}`}>
                        Q. {resultIndex + 1} {result === true ? `Errou ❌` : 'Acertou ✔️'}
                    </li>
                ))}                     
            </ul>
            <Button>Refazer o Quiz</Button>
        </ResultBase>
    )
}

const ResultBase = styled.article`
    width: 90%;
    margin: 30px auto;
    span {
        font-size: 2em;
        font-weight: bolder;
    }
    ul{
        background: #37b2c2a9;
        border-radius: 15px;
        padding: 20px;
        border: solid 2px #fff;
        box-shadow: 0 0 5px 2px #fff;
        li {
            font-size: 1.5em;
            list-style: none;
            padding: 5px;
        }
    }
`