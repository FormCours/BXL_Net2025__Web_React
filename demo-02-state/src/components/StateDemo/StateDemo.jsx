import { useState } from 'react';

export default function StateDemo() {

    const [text, setText] = useState(''); // Acces au variable d'état

    const handleAddText = () => {
        // Modification avec une valeur basé sur le state précedent
        console.log('Avant : ', text);
        setText(text => text + ' Zzz');  // ''     => ' Zzz'
        setText(text => text + ' Rrr');  // ' Zzz' => ' Zzz Rrr'
        console.log('Après : ', text);
    };

    const handleClearText = () => {
        // Modification avec une valeur fixe
        setText('');
    }

    console.log('Rendu : ', text);      // Chaque appel de la fonction
    return (
        <>
            <p>Donald : {text}</p>
            <button onClick={handleAddText}>🛏️</button>
            <button onClick={handleClearText}>⏰</button>
        </>
    );
}

// Rendu demander
// **************
// Afficher "Donald : "
// Ajout à la chaine "Zzz" quand on clique sur un bouton