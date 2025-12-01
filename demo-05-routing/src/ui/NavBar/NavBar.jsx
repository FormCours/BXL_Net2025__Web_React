import { Link } from 'react-router';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/example">Exemple</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    )
}