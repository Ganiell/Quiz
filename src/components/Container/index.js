import styled from 'styled-components'
import db from '../../../db.json'


const Container = styled.section`
  background-color: #683ab765;
  width: 500px;
  /* @media screen and (max-width: 600px) {
    width: 320px;
    margin: 0 auto;
  } */
  margin: 20px 0;
  min-height: 600px;
  border-radius: 20px;
  border: 3px solid #50b3e0;
  box-shadow: 0px 0px 10px 4px #50b3e0;
  transition: all 0.5s;
`
Container.TituloQuiz = styled.div`
    min-height: 40px;
    width: 100%;
    text-align: center;
    padding: 0px 10px;
`

export default Container