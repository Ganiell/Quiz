import styled from 'styled-components'
import db from '../../../db.json'


const Art = styled.article`
  background-color: #007ab279;
  width: 90%;
  margin: 20px auto 0px auto;
  min-height: 43%;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px;
  }
  border: 1px solid white;
  box-shadow: 0px 0px 6px 2px;
  p {
    font-size: 1.2em;
    font-weight: bold; 
    padding: 0 25px;
    /* text-align: justify; */
  }
  form {
    /* background: red; */
    padding: 5px 10px 0 10px;
    button {
      display: block;
      margin: 20px auto 20px auto;
      min-width: 70%;
      max-width: 90%;
      border-radius: 10px;
      padding: 12px;
      font-size: 1.4em;
      background:  #6a3db8;
      color: #85e0ec;
      transition:all 0.3s;
      border: none;
      font-weight: bolder;
      border-bottom: 5px solid #38127a;
    }
    button:hover{
      background: #7a4bca;
      color: white;
      transition:all 0.3s;
      border-bottom: 5px solid #58309e;
      cursor: pointer;
    }
    button:focus{
      border: 2px solid rgba(255, 255, 255, 0.623);
      box-shadow: 0px 0px 7px 2px rgba(255, 255, 255, 0.623);
      outline: 0;
      resize: none;
      transition: all 0.15s;
      cursor: pointer;
    }
    button:disabled{
      background: #6b5394be;
      color: rgba(169, 169, 169, 0.342);
      border: none;
      cursor: no-drop;
    }
  }
  transition: all 0.5s;
`

Art.Quizes = styled.a`
    display: block;
    border-radius: 8px;
    border: #4f2891 solid 4px;
    padding: 5px 10px;
    background: #6946a5a9;
    font-size: 1.3em;
    color: white;
    text-decoration: none;
`

Art.Art2 = styled.article`
  background-color: #007ab279;
  width: 90%;
  padding-bottom: 10px;
  margin: 30px auto 20px auto;
  min-height: 31%;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    border: 1px solid white;
    box-shadow: 0px 0px 6px 1px;
  }
  border: 1px solid white;
  box-shadow: 0px 0px 6px 2px;
  h2 {
    font-size: 1.3em;
    text-align: center;
  }
  transition: all 0.5s;
  ul {
    li {
      a {
        display: block;
        border-radius: 8px;
        border: #4f2891 solid 4px;
        padding: 5px 10px;
        background: #6946a5a9;
        font-size: 1.3em;
        color: white;
        text-decoration: none;
      }
    }
  }
`

export default Art