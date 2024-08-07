import { useState } from 'react'

import Person from './Person'
import data from '../../data'

const List = () => {
  const [people, setPeople] = useState(data)
  return (
    <section className="container">
      <h3>{people.length} birthday today</h3>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
      <button
        type="button"
        className="btn btn-block"
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </section>
  )
}
export default List
