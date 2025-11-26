
export default function CountBtnArea({ stepValue = 1, onPlus, onMinus }) {

    const handlePlusBtn = () => {
        onPlus(stepValue);
    }

    return (
        <div>
            <button onClick={handlePlusBtn}>+ {stepValue}</button>
            <button onClick={() => onMinus(stepValue)}>- {stepValue}</button>
        </div>
    );
}
