import { useState } from "react"
import styled from "styled-components"
import play from './img/seta_play.png'
import vira from './img/seta_virar.png'
import certo from './img/icone_certo.png'
import errado from './img/icone_erro.png'
import quase from './img/icone_quase.png'

export default function Card({idx, Q, R, setContador, contador}){

    const [ativo, setAtivo] = useState(false)
    const [exibe, setExibe] = useState(Q)
    const [final, setFinal] = useState(false)
    const [icone, setIcone] = useState(play)
    const [cor, setCor] = useState('#333333')

    function finaliza(){
        setExibe(R)
        setFinal(true)
    }

    function responde(resp){
        setContador(contador + 1)
        if (resp === 'errado') {
            setIcone(errado)
            setCor('#FF3030')
        } else if (resp === 'quase') {
            setIcone(quase)
            setCor('#FF922E')
        } else if (resp === 'certo') {
            setIcone(certo)
            setCor('#2FBE34')
        }
        setAtivo(false)
    }

    return(
        <Carta ativo={ativo}>
            <Cover cor={cor} ativo={ativo}>
                <p>Pergunta {idx+1}</p>
                <img onClick={() => setAtivo(!ativo)} src={icone} alt={icone}></img>
            </Cover>
            <Cover2 final={final} ativo={!ativo}>
                <Info>
                    <p>{exibe}</p>
                    <img onClick={finaliza} src={vira} alt={vira}></img>
                </Info>
                <ContainerBotoes>
                    <button onClick={() => responde('errado')}>Não Lembrei</button>
                    <button onClick={() => responde('quase')}>Quase não lembrei</button>
                    <button onClick={() => responde('certo')}>Zap!</button>
                </ContainerBotoes>
            </Cover2>
            
        </Carta>
    )
}

const Carta = styled.div`
    width: 300px;
    height: ${props => props.ativo ? '100px' : '35px'};
    background-color: ${props => props.ativo ? '#FFFFD5' : '#FFFFFF'};
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const Cover = styled.div`
    display: ${props => props.ativo ? 'none' : 'flex'};
    justify-content: space-between;
    width: 100%;
    img {
        display: ${props => props.final ? 'none' : 'initial'};
        width: 20px;
        cursor: pointer;
    }
    p {
        color: ${props => props.cor};
        text-decoration: ${props => props.cor !== '#333333' ? 'line-through' : 'initial'};
    }
`

const Cover2 = styled(Cover)`
    flex-direction: ${props => props.ativo ? 'initial' : 'column'};
    p {
        text-decoration: none;
    }
`

const Info = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ContainerBotoes = styled.div`
    display: flex;
    //width: 80%;
    justify-content: space-between;
    //margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        padding:5px;
        cursor: pointer;
    }
    button:nth-child(1) {
        background: #FF3030;
    }
    button:nth-child(2) {
        background: #FF922E;
    }
    button:nth-child(3) {
        background: #2FBE34;
    }
`