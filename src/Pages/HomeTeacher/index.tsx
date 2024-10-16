import { Helmet } from "react-helmet";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

export function HomeTeacher(){
    return (
        <>
            <Helmet>
                <title>Dashboard do Professor</title>
            </Helmet>
            <Nav/>
            <div className="container">
                <h1>Bem-vindo, professor Antônio</h1>
                <p>O que deseja realizar?</p>
                <div className="action-buttons">
                    <Card
                        link="#"
                        imgSrc="/img/grupo.png"
                        imgAlt="GRUPOS"
                        title="GRUPOS"
                        description="Gerencie o trabalho das suas turmas"
                    />
                    
                    <Card
                        link="#"
                        imgSrc="/img/aptplan.png"
                        imgAlt="RELATÓRIO"
                        title="RELATÓRIO"
                        description="Acompanhe o relatório de andamento dos trabalhos"
                    />
                    
                    <Card
                        link="/alunos"
                        imgSrc="/img/alunos.png"
                        imgAlt="ALUNOS"
                        title="ALUNOS"
                        description="Verifique seus alunos"
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