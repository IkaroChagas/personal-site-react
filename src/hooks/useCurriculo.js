import api from "../services/api"
import { useState, useEffect } from "react"

const useCurriculo = () => {
  const [curriculo, setCurriculo] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const academicExperience = await api.get("/experiencia?type=academica")
        const professionalExperience = await api.get("/experiencia?type=profissional")
        setCurriculo({
          academicExperience: academicExperience.data,
          professionalExperience: professionalExperience.data,
        })
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { curriculo, error, isLoading }
}

export default useCurriculo