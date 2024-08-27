import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
    return (
        <header>
            <h1><Link to="/">Epom Gourmet</Link></h1>
            <div className="links">
                <ul>
                    <li><a href="#">reservar</a></li>
                    <li><a href="#">conheça nosso chefe</a></li>
                </ul>
                <div class="dropdown">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="menu.svg" alt=""/>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default Header;