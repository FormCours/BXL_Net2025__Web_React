import zaza from './../../assets/images/zaza-vanderquack.gif';
import style from './Header.module.css';

export default function Header() {

    return (
        <header className={style['header']}>
            <div className={style['logo-container']}>
                <div className={style['logo']}>
                    <div className={style['logo-front']}>
                        <img className={style['header-img']} src={zaza} alt='Zaza' />
                    </div>
                    <div className={style['logo-back']}>
                        <img className={style['header-img']} src={zaza} alt='Zaza' />
                    </div>
                    <div className={style['logo-edge-front']}></div>
                    <div className={style['logo-edge']}></div>
                    <div className={style['logo-edge-back']}></div>
                </div>
            </div>
            <h1>Todo List</h1>
        </header>
    )
} 