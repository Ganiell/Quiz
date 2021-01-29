import React from 'react'
import Quizscreen from '../../src/screens/Quiz'
import BackgroundImg from '../../src/components/BackgroundImg'
import { ThemeProvider } from 'styled-components'
export default function QuizDaGaleraPage({ dbExterno }) {


    return(
        <div>
            <ThemeProvider theme={dbExterno}>
                {/* <BackgroundImg image={dbExterno.bg}> */}
                    <Quizscreen externalQuestions={dbExterno.questions} />
                {/* </BackgroundImg> */}
            </ThemeProvider>
        </div>
    )

}

export async function getServerSideProps(contex) {
    const [projectName, gitHubUser] = contex.query.id.split('__')
    console.log("teste " + contex.query.id)
    console.log(projectName + " - " + gitHubUser)
    const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`) // https://internet-quiz.johnmaroeli.vercel.app/
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json()
        }
        throw new Error('Falha em pegar os dados')
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
        console.error(err)
    })

    return{
        props: {
            dbExterno,
        },
    }
}