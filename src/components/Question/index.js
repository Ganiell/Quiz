import styled from 'styled-components'
import Button from '../Button'
import BackLinkArrow from '../BackLinkArrow'
import React from 'react'
import { motion } from 'framer-motion'
import { delBasePath } from 'next/dist/next-server/lib/router/router'

const QuestionBase = styled.a`
    background: #146f99b8;
    border-radius: 10px;
    font-size: 1.3em;
    border: solid 2px #146f99;
    box-shadow: 0px 0px 6px 2px #146f99;
    padding: 10px;
    display: block;
    width: 80%;
    margin: 15px auto;    
    cursor: pointer;
    transition: all 0.3s;
    :hover{
        background: #157aa8da;
    }
    @media screen and (max-width: 600px) {
        font-size: 1.2em;
        :hover {
            background-color: none;
        }
    }
`
const FormBase = styled.form`
    label {
        &[data-selected="true"] {
            background: #5d34a3c4;
            width: 83%;
            padding: 13px;
            transition: all 0.3s;
            &[data-status="SUCCESS"] {
            background: rgba(0, 128, 73, 0.878);
            border: solid 2px rgba(0, 128, 73);
            box-shadow: 0px 0px 6px 2px rgb(0, 128, 79);
        }
        &[data-status="ERROR"] {
            background: rgba(255, 0, 89, 0.823);
            border: solid 2px rgba(255, 0, 89);
            box-shadow: 0px 0px 6px 2px rgba(255, 0, 89);
        }
        }
    }
`

const NumQuestion = styled.div`
  height: 43px; 
  margin: 15px auto;
  background-color: #007ab279;
  width: 90%;
  border-radius: 15px;
  border: 1px solid white;
  box-shadow: 0px 0px 4px 1px;
  p {
    font-size: 1.2em; 
    margin: 0; 
    padding: 6px 20px;
    font-weight: bold; 
  }
`
const DescriptionBase = styled.div`
    text-align: center;
    h2 {
        font-size: 1.3em;
        text-align: center;
        padding: 0 20px;
        @media screen and (max-width: 600px) {
            padding: 0 10px;            
        }
    }
    p {
        font-size: 1.2em;
        text-align: center;
        padding: 0 20px;
        @media screen and (max-width: 600px) {
            padding: 0 10px;            
        }
    }
    img {
        width: 300px;
        border-radius: 20px;
        border: solid 3px teal;
        box-shadow: 0 0 7px 2px teal;
        @media screen and (max-width: 600px) {
            width: 200px;
        }
    }
`


export default function Questions({
    question,
    questionIndex,
    totalQuestion,
    onSubmit,
    addResult
}) { 
    const [selectAlternative, setSelectAlternative] = React.useState(undefined);
    const questionId = `qustion-${questionIndex}`
    const isCorrect = selectAlternative === question.answer
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false)
    const hasQuestionSubmited = selectAlternative !== undefined
    const errorImg = 'https://media0.giphy.com/media/USUIWSteF8DJoc5Snd/giphy.gif'

    return(
        <section>
            <NumQuestion>
                
                <p>
                <BackLinkArrow href="/"/> pergunta {questionIndex + 1} de {totalQuestion}
                </p>
            </NumQuestion>
            <DescriptionBase>
                {errorImg !== question.image && <img srcSet={question.image}/>}
                {/* {screenState === screenStates.LOADING && <QuestionLoad/>} */}
                <h2>{question.title}</h2>
                <p>{question.description}</p>
            </DescriptionBase>

            <FormBase
            onSubmit ={ infosEvent => {
            infosEvent.preventDefault()
            setIsQuestionSubmited(true)
            setTimeout(() => {
                setIsQuestionSubmited(false)
                setSelectAlternative(undefined)
                addResult(isCorrect)
                onSubmit()
            },1 * 1600)
            }}
            >
                {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative_${alternativeIndex}`
                    const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
                    const isSelected = selectAlternative === alternativeIndex

                    return(
                        <QuestionBase 
                        as="label"
                        key={alternativeId}
                        htmlFor={alternativeId}
                        data-selected={isSelected}
                        data-status={isQuestionSubmited && alternativeStatus}
                        >
                            <input 
                            style={{display: "none"}} 
                            name={questionId} 
                            id={alternativeId}
                            onChange={() => setSelectAlternative(alternativeIndex)} 
                            type="radio"></input>
                            {alternative}
                        </QuestionBase>     
                    )
                })}
                <Button  as={"button"} 
                type="submit" disabled={!hasQuestionSubmited} >Confirmar</Button>
            </FormBase>

        </section>
       
    )
}



