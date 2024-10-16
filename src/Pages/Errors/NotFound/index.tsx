import { Helmet } from 'react-helmet'
import { Footer } from '../../../components/Footer'
import { Nav } from '../../../components/Nav'
import './style.css'

export function NotFound(){
    return (
        <>
            <Helmet>
                <title>Erro 404</title>
            </Helmet>
            <Nav/>
            <div className='container-404 container'>
                <h1>Rota não encontrada</h1>
                <a className='link-404' href="/">Ir para Home</a>
            </div>
            <Footer/>
        </>
    )
}