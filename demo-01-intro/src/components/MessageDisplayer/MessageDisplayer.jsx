
export default function MessageDisplayer({ msg, visible = true }) {

    return (
        <p>
            <span>Message : </span>
            {visible && (
                <span>{msg || 'Pas de message... 😭'}</span>
            )}
        </p>
    )

}