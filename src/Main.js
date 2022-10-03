import perguntas from './Perguntas'
import styled from 'styled-components'
import logo from './img/logo.png'
import Card from './Card'

export default function Main({setContador, contador}) {

    return(
        <ScreenContainer>
            <LogoConatiner>
                <img src={logo} alt={logo}></img>
                <h1>ZapRecall</h1>
            </LogoConatiner>
            {perguntas.map((p, idx) => <Card setContador={setContador} contador={contador} key={idx} idx={idx} Q={p.Q} R={p.R}></Card>)}
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
    margin: 0 auto;
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