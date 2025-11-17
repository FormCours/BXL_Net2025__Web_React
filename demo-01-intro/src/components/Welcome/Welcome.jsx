import style from './Welcome.module.css';
// style -> { ['demo-exemple']: '_demo-exemple_1tmbk_1' }

export default function Welcome({ firstname, lastname = 'Dupont' }) {

    return (
        <p className={style['demo-exemple']}>
            Hello {firstname} {lastname}
        </p>
    );

}