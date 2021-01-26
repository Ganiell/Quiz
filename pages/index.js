import React from 'react'
import db from '../db.json'
import BackgroundImg from '../src/components/BackgroundImg'
import { useRouter } from 'next/router'
import Art from '../src/components/Art'
import Container from '../src/components/Container'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState('')
  return(
      <BackgroundImg image={db.images[2]}>
        <Head>
          <title>Quiz</title>
        </Head>
        <Container>
          <Container.TituloQuiz>
            <h1>Teste seus conhecimentos!</h1>
          </Container.TituloQuiz>
          <Art>
              <p>
              Lorem lero lero l ero lero lero elero elroeero lero lero elero elroe er 
              </p>
              <form onSubmit={function (event) {
                event.preventDefault()
                router.push(`/quiz?=name=${name}`)
              }}>
                <input maxLength={20} onChange={function (event) {
                  setName(event.target.value)
                }} 
                placeholder="Diz ai seu nome ;)"/>

                <button type="submit" disabled={!name}>
                Jogar {name}</button>
              </form>
          </Art>
          <Art.Art2>
            <h2>Tem também os Quizes da Galera :)</h2>
          </Art.Art2>
        </Container>
        <iframe width="0" height="0" src="https://www.youtube.com/embed/Np8cEtbLis4?controls=0?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <GitHubCorner projectUrl="https://github.com/Ganiell"/>
      </BackgroundImg>
  )
}
