import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { ReactComponent as Menu } from 'assets/img/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
            <nav id="sidebar">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div id="dismiss" className="mt-4">
                            <Link to={''}>
                                <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" aria-label="Close" className="fs-2" style={{color: "#272727"}} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="m-3">
                    <ul className="list-unstyled components navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-close" href="#home" rel="noreferrer">
                                <h4>Home</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link texto-grande nav-close" href="#projects" rel="noreferrer">
                                <h4>Projetos</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link texto-grande nav-close" href="#certified" rel="noreferrer">
                                <h4>Certificados</h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link texto-grande nav-close" href="#about" rel="noreferrer">
                                <h4>Sobre</h4> 
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
                <div className="container">
                    <Link to="/"><Logo width={90} height={90} className="logo" /></Link>
                    <button itemType="button" id="sidebarCollapse" className="btn d-lg-none ml-auto" data-bs-toggle="collapse">
                        <Menu width={75}/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link texto-grande nav-close pe-5" href="#home" rel="noreferrer">
                                        Home
                                    </a>
                                </li>
                            <li className="nav-item">
                                    <a className="nav-link texto-grande nav-close pe-5" href="#projects" rel="noreferrer">
                                        Projetos
                                    </a>
                                </li>
                            <li className="nav-item">
                                <a className="nav-link texto-grande nav-close pe-5" href="#certified" rel="noreferrer">
                                    Certificados
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-grande nav-close" href="#about" rel="noreferrer">
                                    Sobre
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}