import api from "../services/api"
import { useState, useEffect } from "react"

const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const response = await api.get("/portfolio")
        const data = await response.data
        setPortfolio(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { portfolio, error, isLoading }
}

export default usePortfolio