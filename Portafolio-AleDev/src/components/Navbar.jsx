import "../CSS/Navbar.css"; // Importamos los estilos

export default function Navbar() {
  return (
    <nav className="navbar">
      <>✨ Bienvenidos</>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Fin</a></li>
      </ul>
    </nav>
  );
}
