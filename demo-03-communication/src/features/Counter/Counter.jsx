import { useState } from 'react';
import CountBtnArea from '../../components/CountBtnArea/CountBtnArea';
import CounterView from '../../components/CounterView/CounterView';


export default function Counter() {

    const [count, setCount] = useState(0);

    const handlePlus = (step) => {
        setCount(prevCount => prevCount + step);
    }

    const handleMinus = (step) => {
        setCount(prevCount => prevCount - step);
    }

    return (
        <div>
            <h2>Le compteur</h2>
            <CounterView countValue={count} />
            <CountBtnArea onPlus={handlePlus} onMinus={handleMinus} />
            <CountBtnArea onPlus={handlePlus} onMinus={handleMinus} stepValue={3} />
        </div>
    )
}