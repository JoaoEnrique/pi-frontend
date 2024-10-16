import { Helmet } from "react-helmet";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

export function HomeCoordinator(){
    return (
        <>
            <Helmet>
                <title>Dashboard do Coordenador</title>
            </Helmet>
            <Nav/>
            <div className="container">
                <h1>Bem-vindo, Coodernador</h1>
                <p>O que deseja realizar?</p>

                <div className="action-buttons">
                    <Card
                        link="/turmas"
                        imgSrc="/img/aptplan.png"
                        imgAlt="Turmas"
                        title="Turmas"
                        description="Acompanhe e gerencie os cursos disponiveis"
                    />
                    
                    <Card
                        link="/cursos"
                        imgSrc="/img/aptplan.png"
                        imgAlt="Curso"
                        title="Curso"
                        description="Acompanhe o relatório de andamento dos trabalhos"
                    />
                    
                    <Card
                        link="/alunos"
                        imgSrc="/img/alunos.png"
                        imgAlt="Alunos"
                        title="Alunos"
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