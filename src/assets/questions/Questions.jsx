import SingleQuestion from './SingleQuestions'
import { useState } from 'react'
import data from './data'

const Questions = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
      })}
    </section>
  )
}
export default Questions
