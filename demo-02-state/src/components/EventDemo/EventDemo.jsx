import style from './EventDemo.module.css';

export default function EventDemo() {

    const handleClick = () => {
        console.log('On a cliqué sur le bouton !');
    };

    const handleHover = (event) => {
        console.log(`x: ${event.clientX} / y: ${event.clientY}`);
    }

    return (
        <>
            <p>Ouvrir la console pour voir le resultat</p>
            <div className={style['hover-event']} onMouseMove={handleHover}></div>
            <button className={style['button-event']} onClick={handleClick}>Cliquer ici</button>
        </>
    )
}