import "../../CSS/Navbar.css"; // Importamos los estilos

export default function Navbar() {
  return (
    <nav className="navbar">
      <>✨ Bienvenidos</>
      <ul className="nav-links">
        <li>
          <a
            href="#sobre-mi"
            onClick={(e) => {
              e.preventDefault(); // evita que el navegador haga un salto brusco
              document
                .getElementById("sobre-mi")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sobre mí
          </a>
        </li>

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
