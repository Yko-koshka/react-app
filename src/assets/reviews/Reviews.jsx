import { useState } from 'react'
import people from './data'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return <main></main>
}

export default Reviews
