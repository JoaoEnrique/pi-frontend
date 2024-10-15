import './Footer.css'

export function Footer(){
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h4>ACADEMIC SYNC</h4>
                    <ul>
                        <li>Academic Sync é uma plataforma gerenciadora de trabalhos de graduação...</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>MAPA DO SITE</h4>
                    <ul>
                        <li><a href="#">Xxxxxxx</a></li>
                        <li><a href="#">Xxxxxxx</a></li>
                        <li><a href="#">Xxxxxxx</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>CONTATO</h4>
                    <ul>
                        <li>(11) 2058-4585</li>
                        <li>academicsync@gmail.com</li>
                        <li>Rua Xxxx Xxxx, 787</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>PRECISA DE SUPORTE?</h4>
                    <ul>
                        <li><a href="#">Chat online</a></li>
                        <li><a href="#">E-mail</a></li>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">Fóruns</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; AcademicSync 2024 | Todos os direitos reservados
            </div>
        </footer>
    )
}