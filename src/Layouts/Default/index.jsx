import { BsGithub, BsLinkedin } from "react-icons/bs"

import "./style.css"

import NavigationItem from "../../components/NavigationItem"

import useInformation from "../../hooks/useInformation"

export default function Default({ currentPage, children }) {
  const { information, error, isLoading } = useInformation()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar as informações.</p>
  }

  if (!information) {
    return null
  }

  return (
    <>
      <header className="flex">
        <div className="profile-wrapper flex">
          <img src={information.profilePic} alt="Foto de Íkaro" />
          <div className="text-wrapper flex">
            <h1>{information.name}</h1>
            <p>
              <em>{information.office}</em>
            </p>
          </div>
          <ul>
            <li>
              <a href="https://github.com/IkaroChagas" target="_blank"><BsGithub /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ikaro-chagas/" target="_blank"><BsLinkedin /></a>
            </li>
          </ul>
        </div>

        <nav>
          <ul className="flex">
            <NavigationItem
              path="/"
              isActive={currentPage === "about"}
              text="Sobre"
            />
            <NavigationItem
              path="/projetos"
              isActive={currentPage === "projects"}
              text="Projetos"
            />
            <NavigationItem
              path="/contato"
              isActive={currentPage === "contact"}
              text="Contato"
            />
          </ul>
        </nav>
      </header>

      <main className="flex">{children}</main>

      <footer>
        <span>Developed with ❤ by <u>{information.name}</u>.</span>

      </footer>
    </>
  )
}
