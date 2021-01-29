import React from 'react'
import db from '../db.json'
import { useRouter } from 'next/router'

import BackgroundImg from '../src/components/BackgroundImg'
import Art from '../src/components/Art'
import Container from '../src/components/Container'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Input from '../src/components/Input'
import Button from '../src/components/Button'


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')



  


//   let arrayImg = db.images
//   let i = 0 
//   setInterval(function () {
//   i++
//   console.log(i)
//   if(i >= arrayImg.length - 1) {i = 0}
//   setImg(arrayImg[i]) 
//   },1 * 7000)





  return(
      <div>
        <Head>
          <title>Quiz</title>
        </Head>
        <Container>
          <Container.TituloQuiz>
            <h1>{db.title}</h1>
          </Container.TituloQuiz>
          <Art>
              <p>
                {db.description} 
              </p>
              <form onSubmit={function (event) {
                event.preventDefault()
                router.push(`/quiz?=name=${name}`)
              }}>
                <Input 
                  maxLength={20}
                  onChange={(event) => setName(event.target.value)} 
                  placeholder="Diz ai seu nome ;)"
                  name="nomeDoUsuario"
                  value={name}
                />
                <Button 
                  type="submit" 
                  disabled={!name}>
                  Jogar {name}
                </Button>
              </form>
          </Art>
          <Art.Art2>
            <h2>Tem também os Quizes da Galera :)</h2>
          </Art.Art2>
        </Container>
        <GitHubCorner projectUrl="https://github.com/Ganiell"/>
      </div>
  )
}

