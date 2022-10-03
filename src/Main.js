import perguntas from './Perguntas'
import styled from 'styled-components'
import logo from './img/logo.png'

export default function Main() {

    return(
        <ScreenContainer>
            <LogoConatiner>
                <img src={logo} alt={logo}></img>
                <h1>ZapRecall</h1>
            </LogoConatiner>
            {perguntas.map((p) => <h1>{p.Q}</h1>)}
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const LogoConatiner = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`