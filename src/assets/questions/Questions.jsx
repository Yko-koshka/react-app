import { useState } from 'react'
import data from './data'

const Questions = () => {
  const [question, setQuestions] = useState(data)

  return (
    <section className="container">
      <h1>Questions</h1>
    </section>
  )
}
export default Questions
