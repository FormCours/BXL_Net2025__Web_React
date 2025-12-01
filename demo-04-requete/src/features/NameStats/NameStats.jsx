import { useState } from 'react';
import NameForm from '../../components/Form/NameForm';


export default function NameStats() {

    const [searchName, setSearchName] = useState()

    const handleSearchName = async (name) => {
        setSearchName(name);
    };

    return (
        <>
            <NameForm onSearchName={handleSearchName} />
            <p>{searchName}</p>
        </>
    )
} 