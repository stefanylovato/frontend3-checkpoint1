/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/noun_Abstract mark_1348458.svg'
import './style.scss';

const Header = () => {

    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-center me-3"></img>Stefany Lovato</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#banner">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                    
                            <li className="nav-item active">
                            <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    )

}

export default Header;