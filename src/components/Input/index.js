import styled from 'styled-components'

const InputBase = styled.input`
    color: white;
    width: 90%;
    padding: 10px;
    display: block;
    margin: 10px auto;
    border-radius: 10px;
    font-size: 1.3em;
    border: 2px solid #481c92;
    box-shadow: 0px 0px 5px 2px #481c92;
    background: #683ab7ce;
    transition:all 0.7s;
  :focus{
    box-shadow: none;
    outline: 0;
    resize: none;
    border: 2px solid rgba(255, 255, 255, 0.623);
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.623);
    transition:all 0.7s;
}
  ::placeholder{
    color: rgba(255, 255, 255, 0.6);
    padding-left: 5px;
    }
`

export default function Input(props){ 
    return(
        <div>
            <InputBase 
                onChange={props.onChange} 
                maxLength={props.maxLength}
                placeholder={props.placeholder}
            />
        </div>
    )
}

