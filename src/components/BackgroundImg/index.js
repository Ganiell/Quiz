import styled from 'styled-components'
import db from '../../../db.json'

let img = ''
let i = 0

// setInterval(function () {
//   if(i >= db.images.length - 1) {i = 0}
//   img = db.images[i]
//   i++
// },2000)

// img = img ? img : db.images[1]


const BackgroundImg = styled.main`
  background-image: url(${props => props.image});
  transition: opacity 800ms;
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
  transition: all 1.5s;
`
export default BackgroundImg