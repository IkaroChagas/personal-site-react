import githubIcon from "../../assets/github.svg"
import clickIcon from "../../assets/click.svg"
import "./style.css"

export default function ProjectItem({
  title,
  description,
  imgSrc,
  githubHref,
  deployHref,
  ...rest
}) {
  return (
    <div className="card flex" {...rest}>
      <div className="textWrapper">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="wrapper flex">
        <iframe
          title="YouTube Video"
          src={imgSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <div className="buttons flex">
          <button>
            <a href={githubHref} className="flex" target="_blank">
              <img src={githubIcon} alt="Logo do Github" />
              Github
            </a>
          </button>
          <button>
            <a href={deployHref} className="flex" target="_blank">
              <img src={clickIcon} alt="Ícone de uma seta do mouse clicando" />
              Deploy
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
