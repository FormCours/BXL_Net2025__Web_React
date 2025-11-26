import { useActionState } from 'react';
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
 * Correction de la Calculatrice le mecanisme d'action
 */
const initialState = {
    data: null,
    result: ''
}

export default function CalculatriceV2() {

    // Méthode action pour traiter l'operation
    const actionCalcul = async (_state, formData) => {

        // Récuperation des valeurs du formulaires
        const data = {
            nb1: formData.get('act-nb1'),
            nb2: formData.get('act-nb2'),
            op: formData.get('act-op')
        };

        // Traitement
        const val1 = parseFloat(data.nb1);
        const val2 = parseFloat(data.nb2);
        const selectedOperation = CALC_OPERATION.find(elem => elem.id === data.op);

        let result;
        if (selectedOperation && selectedOperation.cb) {
            result = selectedOperation.cb(val1, val2);
        }
        else {
            result = 'Operation non supporté !';
        }

        // La valeur data du state permet : 
        //  - Si connu  : Conserver les valeurs du formulaire via le "defaultValue"
        //  - Si "null" : Effacer le valeur du formulaire

        // ↓ L'action doit renvoyer la nouvelle valeur de state
        return { data, result };
    };

    // Hook qui permet de manipuler l'action synchronisé avec un state
    const [state, handleCalcul] = useActionState(actionCalcul, initialState);

    return (
        <form className={style['calculatrice']} action={handleCalcul}>
            <div>
                <label htmlFor='input-nb1'>Nombre 1 : </label>
                <input id='input-nb1' type='text' name='act-nb1'
                    pattern='^-?[0-9]*([,.][0-9]*)?$' required
                    defaultValue={state.data?.nb1} />
                {/* Le "null operator (?.)" permet d'éviter un bug, si data est "null" */}
            </div>
            <div>
                <label htmlFor="input-op">Opération : </label>
                <select id="input-op" required name='act-op'
                    key={state.data?.op} defaultValue={state.data?.op}>
                    <option value="" hidden>Veuillez selection l'opération</option>
                    {CALC_OPERATION.map((op) => (
                        <option key={op.id} value={op.id}> {op.symbole} </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor='input-nb2'>Nombre 2 : </label>
                <input id='input-nb2' type='text' name='act-nb2'
                    pattern='^-?[0-9]*([,\.][0-9]*)?$' required
                    defaultValue={state.data?.nb2} />
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor='input-res'>Resultat : </label>
                <input id='input-res' type='text' readOnly value={state.result} />
                {/* ↑ Un composant controlé pour afficher le resultat ! */}
            </div>
        </form>
    );
}