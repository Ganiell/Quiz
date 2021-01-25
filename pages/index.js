import styled from 'styled-components'
import db from '../db.json'
import BackgroundImg from '../src/components/BackgroundImg'
import Art from '../src/components/Art'
import Container from '../src/components/Container'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
  return(
    <BackgroundImg>
      <Container>
        <Container.TituloQuiz>
          <h1>Bla bla bla</h1>
        </Container.TituloQuiz>
        <Art></Art>
        <Art.Art2></Art.Art2>
      </Container>
      <GitHubCorner projectUrl="https://github.com/Ganiell"/>
    </BackgroundImg>
  )
}
