import React from 'react'
import Person from './Person'

function PersonList() {
    const persons = [
        {id: 1,
         name: 'Konj',
         age: 30,
         skill: 'React'
        },
        {id: 2,
            name: 'Tovar',
            age: 25,
            skill: 'Angular'},
        {id: 3,
            name: 'Mazga',
            age: 28,
            skill: 'Vue'}
    ]
     
const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
    <div>{personList}</div>
    )
}

export default PersonList
