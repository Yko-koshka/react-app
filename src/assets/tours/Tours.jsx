import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tour from './Tour'

import './Tour.css'

const url = 'https://www.course-api.com/react-tours-project'

const Tours = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      console.log(tours)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <section className="container">
      <div className="title">
        <h3>our tours</h3>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
export default Tours
