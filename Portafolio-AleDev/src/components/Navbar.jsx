import "../CSS/Navbar.css"; // Importamos los estilos

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">✨React</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Fin</a></li>
      </ul>
    </nav>
  );
}
