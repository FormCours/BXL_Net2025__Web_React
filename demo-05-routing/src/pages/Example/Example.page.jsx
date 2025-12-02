import { Link, Outlet } from 'react-router';

export default function ExamplePage() {

    return (
        <>
            <h1>Exemple</h1>

            <Link to=''>Index de l'exemple</Link> {' '}
            <Link to='second'>Seconde page (1)</Link> {' '}
            <Link to='second?name=Della'>Seconde page (2)</Link> {' '}
            <Link to='second?name=Gontran&job=dev'>Seconde page (3)</Link>
            <br />
            <Link to='1'>Produit 1</Link> {' '}
            <Link to='42'>Produit 42</Link> {' '}
            <Link to={'1337'}>Produit 1337</Link> {' '}
            <br />
            <Link to={-1}>Back</Link> {' '}
            <Link to={1}>Next</Link> {' '}

            <Outlet />
        </>
    )
}