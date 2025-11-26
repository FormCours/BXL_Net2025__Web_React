import zaza from './../../assets/images/zaza-vanderquack.gif';
import style from './Header.module.css';

export default function Header() {

    return (
        <header className={style['header']}>
            <img className={style['header-img']} src={zaza} alt='Zaza' />
            <h1>Todo List</h1>
        </header>
    )
} 