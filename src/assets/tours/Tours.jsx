import { useEffect, useState } from 'react'

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

  return (
    <section className="container">
      <h2>Tours</h2>
    </section>
  )
}
export default Tours
