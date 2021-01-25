import styled from 'styled-components'
import db from '../../../db.json'


const Container = styled.section`
  background-color: #683ab765;
  width: 450px;
  height: 600px;
  border-radius: 20px;
  border: 3px solid #50b3e0;
  box-shadow: 0px 0px 10px 4px #50b3e0;
`
Container.TituloQuiz = styled.div`
    height: 40px;
    width: 100%;
    h1 {
      text-align: center;
    }
`

export default Container