import { NavLink } from "react-router-dom";
import {  } from "semantic-ui-react";
import '../css/navegacion.css'

const Navegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >Name
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav">
                        <NavLink to="/vite">
                            Vite
                        </NavLink>
                    </li>
                    <li className="nav">
                        <NavLink to="/formulario">
                            Formulario
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navegacion;
