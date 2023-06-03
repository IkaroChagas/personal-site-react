import React from "react"
import "./ItemPortfolio.css"

const ItemPortfolio = (props) => {
  return (
    <div className="item-portfolio">
      <a href={props.link} target="_blank">
        <img src={props.image} />
        <p>{props.title}</p>
      </a>
    </div>
  )
}

export default ItemPortfolio
