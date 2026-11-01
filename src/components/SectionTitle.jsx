export default function SectionTitle({ index, eyebrow, title, text }) {
  return <div className="section-heading">
    <div className="section-index">{index} <span>/</span> {eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}
