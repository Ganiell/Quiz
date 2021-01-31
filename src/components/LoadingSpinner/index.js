import styled from "styled-components"


export default function LoadingSpinner(){
    return(
        <Preloader>
            <Preloader.loader>
                <Preloader.loader style={{width: "20px", height: "20px"}}>
                </Preloader.loader>
            </Preloader.loader>
        </Preloader>
    )
}

const Preloader = styled.div`
    
`
Preloader.loader = styled.div`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: purple;
    -webkit-animation: spin 0.5s linear infinite;
    animation: spin 0.5s linear infinite;
    :before {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #BA55D3;
        -webkit-animation: spin 0.5s linear infinite;
        animation: spin 0.5s linear infinite;
        }
    :after {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #FF00FF;
        -webkit-animation: spin 0.5s linear infinite;
        animation: spin 0.5s linear infinite;
    }
    @-webkit-keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`