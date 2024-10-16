import { Link } from 'react-router-dom';
import './style.css'

export function Nav(){
    return (
        <div>
            <div className="menus">
                <header className="header">
                    <div className="headernav">
                        <Link to="/">
                            <img src="/img/logo.png" alt="Logo"/>
                        </Link>
                        <div className="header-icons">
                            <img src="/img/notifi.png" alt="Notificações"/>
                            <img src="/img/user.png" alt="Perfil"/>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export function NavLeft(){
    return (
        <div className="sidebar">
            <ul>
                <li> <Link to="/students"><img src="/img/students-icon.png" alt="Alunos"/>Alunos</Link></li>
                <li><img src="/img/groups-icon.png" alt="Grupos"/> Grupos</li>
                <li><img src="/img/report-icon.png" alt="Relatório"/> Relatório</li>
                <li><img src="/img/plan-icon.png" alt="Plano Aditivo"/> Plano Aditivo</li>
                <li><img src="/img/tasks-icon.png" alt="Tarefas"/> Tarefas</li>
            </ul>
        </div>
    );
}