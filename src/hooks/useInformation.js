import api from "../services/api"
import { useState, useEffect } from "react"

const useInformation = () => {
  const [information, setInformation] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const response = await api.get("/informacoes/")
        const data = await response.data
        setInformation(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { information, error, isLoading }
}

export default useInformation
