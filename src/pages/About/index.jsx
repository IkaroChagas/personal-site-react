import "../../styles/global.css"
import "../../styles/theme.css"

import DefaultLayout from "../../Layouts/Default"
import Section from "../../components/Section"

import useInformation from "../../hooks/useInformation"
import useCurriculo from "../../hooks/useCurriculo"

export default function About() {
  const { information, error: errorInformation, isLoading: isLoadingInformation } = useInformation()
  const { curriculo, error: errorCurriculo, isLoading: isLoadingCurriculo } = useCurriculo()

  if (isLoadingInformation || isLoadingCurriculo) {
    return <p>Carregando...</p>
  }

  if (errorInformation || errorCurriculo) {
    return <p>Ocorreu um erro ao buscar as informações.</p>
  }

  if (!information || !curriculo) {
    return null
  }

  function resumeFormatting(text) {
    if (!text) {
      return null;
    }
    
    const paragraphs = text.split('\n\n').map((paragraph, index) => {
      paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    })
  
    return paragraphs;
  }
  

  return (
    <DefaultLayout currentPage="about">
      <Section title="Olá, me chamo Ikaro! &#083530;" className="flex">
        <div className="description flex">
          {resumeFormatting(information.resume)}
        </div>
      </Section>
      <Section title="EDUCAÇÃO" className="education flex">
        <ul className="flex">
          {
            curriculo.academicExperience.map((experience, index) => (
              <li key={index}>📌 {experience.title}</li>
            ))
          }
        </ul>
      </Section>
    </DefaultLayout>
  )
}
