import './style.css'

export function Nav(){
    return (
        <div>
            <div className="menus">
                <header className="header">
                    <div className="headernav">
                        <a href="/">
                            <img src="/img/logo.png" alt="Logo"/>
                        </a>
                        <div className="header-icons">
                            <img src="img/notifi.png" alt="Notificações"/>
                            <img src="img/user.png" alt="Perfil"/>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}