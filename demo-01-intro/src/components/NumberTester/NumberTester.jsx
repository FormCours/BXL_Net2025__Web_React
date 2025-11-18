
export default function NumberTester({ nb }) {

    if(isNaN(nb)) {
        return (
            <p>Le nombre est invalide ! ┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻</p>
        )
    }

    return (
        <p>Test du nombre {nb} est {nb % 2 === 0 ? 'paire' : 'impaire'}</p>
    )
}