import logo from '/della.gif';                     // Dossier public
// import logo from './../../assets/della.gif';    // Dossier "src"
import style from './Header.module.css';


export default function Header() {

    return (
        <header className={style['header']}>
            <img src={logo} alt="Della logo site" />
            <h1>Demo 02</h1>
        </header>
    );
}