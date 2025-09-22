import "../CSS/Navbar.css"; // Importamos los estilos

export default function Navbar() {
  return (
    <nav className="navbar">
      <>✨ Bienvenidos</>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // evita que el navegador haga un salto brusco
              document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contacto
          </a>
        </li>

      </ul>
    </nav>
  );
}
