import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <ul>
                <li>
                    <NavLink to ="/">ACCUEIL</NavLink>
                </li>
                <li>
                    <a>LIVRES</a>
                </li>
                <li>
                    <a>NINJAS</a>
                </li>
                <li>
                    <a>MILITAIRE</a>
                </li>
                <li>
                    <NavLink to ="/villagespage">VILLAGES</NavLink>
                </li>
                <li>
                    <a>CARTE</a>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;