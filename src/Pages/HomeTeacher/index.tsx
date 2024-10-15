import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

export function HomeTeacher(){
    return (
        <>
            <Nav/>
            <div className="container">
                <h1>Bem-vindo, professor Antônio</h1>
                <p>O que deseja realizar?</p>
                <div className="action-buttons">
                    <Card
                        link="/professor/dashboard"
                        imgSrc="/img/grupo.png"
                        imgAlt="GRUPOS"
                        title="GRUPOS"
                        description="Gerencie o trabalho das suas turmas"
                    />
                    
                    <Card
                        link="/coordenador/dashboard"
                        imgSrc="/img/aptplan.png"
                        imgAlt="RELATÓRIO"
                        title="RELATÓRIO"
                        description="Acompanhe o relatório de andamento dos trabalhos"
                    />
                    
                    <Card
                        link="/adm/dashboard"
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