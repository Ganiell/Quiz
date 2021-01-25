import styled from 'styled-components'
import db from '../../../db.json'

const BackgroundImg = styled.main`
  background-image: url(${db.bg});
  @media screen and (max-width: 500px) {
    background-image: url(${db.bgGif});
  }
  flex: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 7%;
`
export default BackgroundImg