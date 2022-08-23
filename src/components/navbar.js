export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sala de Controle</a>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://cor.rio/">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/institucional">Institucional</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/boletim">Boletins</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/previsao-do-tempo">Previsão do Tempo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/noticias">Notícias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/parcerias">Parcerias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/perguntas">Perguntas Frequentes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="http://cor.rio/pmv">Programa Municipal de
                                    Monitoramento</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target='_blank'
                                   href="https://app.powerbi.com/view?r=eyJrIjoiNmEyZTM3ZTUtZjM3Ni00MDc4LWJiMzctNzI2MDE3ZjY3NDY1IiwidCI6IjhkYzFiNzM0LTEyYTYtNDNmZC1iMjdkLWE3Yzg0ZmQ0MzdkMiJ9" rel="noreferrer">Painel
                                    de Enguiço</a>
                            </li>
                        </ul>
                        {/*<form className="d-flex">*/}
                        {/*    <input className="form-control me-2" type="search" placeholder="Search"*/}
                        {/*           aria-label="Search"/>*/}
                        {/*    <button className="btn btn-outline-success" type="submit">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </nav>
        </>
    )
}