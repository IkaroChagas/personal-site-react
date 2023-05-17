import DefaultLayout from "../../Layouts/Default"
import ProjectItem from "../../components/ProjectItem"

import usePortfolio from "../../hooks/usePortfolio"

export default function Projects() {
  const { portfolio, error, isLoading } = usePortfolio()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar as informações.</p>
  }

  if (!portfolio) {
    return null
  }

  return (
    <DefaultLayout currentPage="projects">
      {portfolio.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          imgSrc={project.demonstration}
          githubHref={project.github}
          deployHref={project.deploy}
        />
      ))}
    </DefaultLayout>
  )
}
