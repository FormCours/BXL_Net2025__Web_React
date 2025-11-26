import { useState } from 'react';
import style from './Calculatrice.module.css';

const CALC_OPERATION = [
    { id: 'plus', symbole: '+', cb: (nb1, nb2) => (nb1 + nb2).toFixed(2) },
    { id: 'minus', symbole: '-', cb: (nb1, nb2) => (nb1 - nb2).toFixed(2) },
    { id: 'multi', symbole: 'x', cb: (nb1, nb2) => (nb1 * nb2).toFixed(2) },
    {
        id: 'div', symbole: '/', cb: (nb1, nb2) => {
            return nb2 !== 0 ? (nb1 / nb2).toFixed(2) : 'Division par zéro';
        }
    },
];

/**
 * Correction de la Calculatrice avec des composants contrôlés + Bonus
 */
export default function CalculatriceV3() {

    // Les states dédiés aux elements du formulaire
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('');
    const [res, setRes] = useState('');

    // Le state pour le bonus
    const [history, setHistory] = useState([]);

    // Méthode pour traiter la saisie de l'utilisateur
    const handleNumberInput = (event, setNumber) => {
        const value = event.target.value;

        if (/^-?[0-9]*([,.][0-9]*)?$/.test(value)) {
            setNumber(value.replace(',', '.'));
        }
    }

    // Méthode pour traiter le submit du formulaire
    const handleCalcSubmit = (event) => {
        // Annulation de l'event de base
        event.preventDefault();

        // Traitement
        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        //* Utilisation des callback en alternative à un switch 🤯
        const selectedOperation = CALC_OPERATION.find(elem => elem.id === op);
        if (selectedOperation && selectedOperation.cb) {
            const result = selectedOperation.cb(val1, val2);
            setRes(result);

            // Ajout dans calcul dans l'historique
            const historyLine = `${nb1} ${selectedOperation.symbole} ${nb2} = ${result}`;
            setHistory(prevHistory => [...prevHistory, historyLine])
        }
        else {
            setRes('Operation non supporté !')
        }
    }

    // Rendu avec des composants controlé (input et select liée au state)
    return (
        <form className={style['calculatrice']} onSubmit={handleCalcSubmit}>
            <div>
                <label htmlFor='input-nb1'>Nombre 1 : </label>
                <input id='input-nb1' type='text'
                    value={nb1} onChange={e => handleNumberInput(e, setNb1)} />
            </div>
            <div>
                <label htmlFor="input-op">Opération : </label>
                <select id="input-op" value={op} onChange={(e) => setOp(e.target.value)}>
                    <option value="" hidden>Veuillez selection l'opération</option>
                    {CALC_OPERATION.map((op) => (
                        <option key={op.id} value={op.id}> {op.symbole} </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor='input-nb2'>Nombre 2 : </label>
                <input id='input-nb2' type='text'
                    value={nb2} onChange={e => handleNumberInput(e, setNb2)} />
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor='input-res'>Resultat : </label>
                <input id='input-res' type='text' readOnly value={res} />
            </div>
            {history.length > 0 && (
                <div>
                    <label htmlFor="list-history">Historique : </label>
                    <ul id='list-history' className={style['history']}>
                        {history.map((line, idx) => (
                            <li key={idx}>{line}</li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
}