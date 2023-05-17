import "./style.css"

export default function Section({ title, children, ...rest }) {
  return (
    <section {...rest}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
