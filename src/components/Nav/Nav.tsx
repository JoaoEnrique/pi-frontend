import logo from '../../assets/logo.png'
import notifi from '../../assets/notifi.png'
import user from '../../assets/user.png'
import './Nav.css'

export function Nav(){
    return (
        <div>
            <div className="menus">
                <header className="header">
                    <div className="headernav">
                        <a href="index.html">
                            <img src={logo} alt="Logo"/>
                        </a>
                        <div className="header-icons">
                            <img src={notifi} alt="Notificações"/>
                            <img src={user} alt="Perfil"/>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}