import style from './Bienvenue.module.css';
// { 'bienvenue-msg' : '_bienvenue-msg_5ktqc_1', 'bienvenue-age': '_bienvenue-age_5ktqc_1'  }

export default function Bienvenue({ nom, age = 18 }) {

    return (
        <>
            <p className={style['bienvenue-msg']}>
                Bienvenue {nom} sur l'application React
            </p>
            <p className={style['bienvenue-age']}>
                Vous avez {age} ans !
            </p>
        </>
    );
}