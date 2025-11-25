import { useState } from 'react'


const INITIAL_COUNT = 0;

export default function Compteur({ incr = 1 }) {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () => {
        setCount(prevCount => prevCount + incr);
    }

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <div>
            <p>Compteur : {count}</p>
            <div>
                <button onClick={handleIncr}>+{incr}</button>
                {count != INITIAL_COUNT && (
                    <button onClick={handleReset}>Reset</button>
                )}
            </div>
        </div>
    )
}