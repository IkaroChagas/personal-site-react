import { Link } from "react-router-dom"

export default function NavigationItem({
  path,
  isActive = false,
  text,
  ...rest
}) {
  return (
    <Link to={path} {...rest}>
      <li className={isActive ? "active" : "hvr-underline-from-left"}>
        {text}
      </li>
    </Link>
  )
}
