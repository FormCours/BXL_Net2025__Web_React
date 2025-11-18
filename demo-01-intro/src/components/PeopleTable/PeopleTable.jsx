function PeopleTableHeader() {
    return (
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Date de naissance</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

function PeopleTableRow({ firstName, lastName, birthDate, email}) {

    let formatedDate = null
    if(birthDate) {
        formatedDate = new Date(birthDate).toLocaleDateString('fr-be', {
             dateStyle: ('long') 
        });
    }
        
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{formatedDate || '❌'}</td>
            <td>{email || '❌'}</td>
        </tr>
    );
}

export default function PeopleTable({ people = [] }) {

    // const peopleJSX = people.map(person => (
    //     <PeopleTableRow key={person.id} 
    //         firstName={person.firstName}
    //         lastName={person.lastName}
    //         birthDate={person.birthDate}
    //         email={person.email}
    //         />
    // ));

        const peopleJSX = people.map(person => (
        <PeopleTableRow key={person.id} {...person} />
    ));

    return (
        <table>
            <PeopleTableHeader />
            <tbody>{peopleJSX}</tbody>
        </table>
    )
}