import "../../CSS/Card.css"; // Importamos los estilos
export default function Card({ title, content, image}) {
  return (
    <div className="tarjeta">
      <div className="titulo">{title}</div>
      <div className="cuerpo">
        {image && <img src={image} alt={title} className="imagen" />}
        <p>{content}</p>
      </div>
    </div>
  );
}
