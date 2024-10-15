import { Footer } from "../components/Footer/index";
import { Nav } from "../components/Nav/index"
import { Card } from '../components/Card/index'
import './Index.css'

export function Index(){
    return (
        <>
            <Nav/>
            <div className="container">
                <h1>Escolha sua visão</h1>
                <p>O que deseja realizar?</p>
                <div className="action-buttons">
                    
                    <Card
                        link="/professor/dashboard"
                        imgSrc="img/grupo.png"
                        imgAlt="Grupos"
                        title="PROFESSORES"
                        description="Visão do professor"
                    />
                    
                    
                    <Card
                        link="/coordenador/dashboard"
                        imgSrc="img/aptplan.png"
                        imgAlt="Coordenador"
                        title="COORDENADOR"
                        description="Visão coordenador"
                    />

                    
                    <Card
                        link="/adm/dashboard"
                        imgSrc="img/aptplan.png"
                        imgAlt="Visão de ADM"
                        title="ADM"
                        description="Visão de ADM"
                    />
                </div>
                <div className="main-image">
                    <img src="/img/illustration.png" alt="Ilustração"/>
                </div>
                <p>Gerencie trabalhos de graduação de onde você estiver!</p>
            </div>
            
            <Footer/>
        </>
    );
}