import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

export default function App(){
    const [contador, setContador] = useState(0)
    return(
        <>
            <Main setContador={setContador} contador={contador}></Main>
            <Footer contador={contador}></Footer>
        </>
    )
}