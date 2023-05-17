import "./style.css"

export default function Input({ title, labelFor, ...rest }) {
  return (
    <div className="input-wrapper flex">
      <label htmlFor={labelFor}>{title}</label>
      <input {...rest} />
    </div>
  )
}
