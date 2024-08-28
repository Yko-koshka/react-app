import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
      </article>
    </main>
  )
}

export default Reviews
