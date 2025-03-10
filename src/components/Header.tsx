import imagen from '../assets/arteIdeas.jpg';

function Header() {
    // Cambiar className por className
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={imagen} alt="ArteIdeas" width={134} height={51} />
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-dark" type="submit">Marcos Galería</button>
            </div>
        </nav>
    )
}

// Siempre va esta exportación
export default Header;