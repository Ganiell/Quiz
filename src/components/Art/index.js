import styled from 'styled-components'
import db from '../../../db.json'


const Art = styled.article`
  background-color: #007ab279;
  width: 90%;
  margin: 25px auto 0px auto;
  height: 43%;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px;
  }
  border: 1px solid white;
  box-shadow: 0px 0px 6px 2px;
`
Art.Art2 = styled.article`
  background-color: #007ab279;
  width: 90%;
  margin: 40px auto 0px auto;
  height: 31%;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px;
  }
  border: 1px solid white;
  box-shadow: 0px 0px 6px 2px;
`

export default Art