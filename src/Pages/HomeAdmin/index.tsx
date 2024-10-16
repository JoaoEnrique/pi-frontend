import { Helmet } from "react-helmet";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

export function HomeAdmin(){
    return (
        <>
            <Helmet>
                <title>Dashboard do Admin</title>
            </Helmet>
            <Nav/>
            <div className="container">
                <h1>Bem-vindo, admin</h1>
                <p>O que deseja realizar?</p>
                <div className="action-buttons">
                    <Card
                        link="/professores"
                        imgSrc="../img/grupo.png"
                        imgAlt="Professores"
                        title="Professores"
                        description="Gerencie os Professores"
                    />
                    
                    <Card
                        link="/coordenadores"
                        imgSrc="/img/alunos.png"
                        imgAlt="Coordenadores"
                        title="Coordenadores"
                        description="Verifique seus Coordenadores"
                    />
                </div>
                <div className="main-image">
                    <img src="/img/illustration.png" alt="Ilustração"/>
                </div>
                <p>Gerencie trabalhos de graduação de onde você estiver!</p>
            </div>
            <Footer/>
        </>
    )
}