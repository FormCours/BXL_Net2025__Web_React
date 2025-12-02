import { useParams } from 'react-router'

export default function ExampleDataPage() {

    const { id } = useParams();

    return (
        <>
            <h2>L'id est : {id}</h2>
        </>
    )
}