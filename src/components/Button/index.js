import styled from 'styled-components'

const Button = styled.button`
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
:hover{
    background: #7a4bca;
    color: white;
    transition:all 0.3s;
    border-bottom: 5px solid #58309e;
    cursor: pointer;
}
:focus{
    border: 2px solid rgba(255, 255, 255, 0.623);
    box-shadow: 0px 0px 7px 2px rgba(255, 255, 255, 0.623);
    outline: 0;
    resize: none;
    transition: all 0.15s;
    cursor: pointer;
}
:disabled{
    background: #6b5394be;
    color: rgba(169, 169, 169, 0.342);
    border: none;
    cursor: no-drop;
}
`

export default Button

