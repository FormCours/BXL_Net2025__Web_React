import style from './Header.module.css';
import logo from './logo.png';


export default function Header() {

    return (
        <header className={style['header']}>
            <img src={logo} alt="logo" />
            <h1>Exercice 02</h1>
        </header>
    );
}