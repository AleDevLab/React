import MiComponente from './components/MiComponente';
import Boton from './components/buttons/Boton';
import Navbar from './components/Navbar';
import Title from './components/texto/Title';
import Card from './components/interfaz/Card';
import jsImg from "./assets/js.png";
import ReaImg from "./assets/react.jpg";
import pyImg from "./assets/python.png";
import perfil from "./assets/perfil.png";
import Swal from "sweetalert2";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css'
import './CSS/Contact.css'
function App() {
  const manejarClick = () => {
    let timerInterval;
    Swal.fire({
      title: "Espero que te guste mi portafolio",
      html: "Muchas gracias por visitar mi portafolio.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
  };
  return (
   <>
      <Navbar />
      <div className="profile-section">
      {/* Nombre arriba */}
      <Title
        headingParts={[
          { text: "Flavio Alejandro Serrano", color: "white" },
          { text: " Developer", color: "rgb(109, 247, 253)" }
        ]}
        paragraph="Desarrollador | Electrónico"
      />

      {/* Contenedor de dos columnas */}
      <div className="profile-content">
        {/* Columna izquierda */}
        <div className="profile-text">
          <p>
            Me encanta combinar creatividad y tecnología para dar vida a páginas
            web elegantes y fáciles de usar. En cada proyecto busco que el diseño
            cuente una historia y que la experiencia sea clara para el usuario.
            Mi objetivo es seguir aprendiendo y compartir soluciones digitales
            que realmente aporten valor.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="profile-wrap">
          <img src={perfil} alt="Mi foto" className="profile-img" />
        </div>
      </div>
    </div>      
    <div className="cards-container">

      <Card
        title="Programación Web"
        content="Proyectos creados con HTML + Javascript + CSS + PHP + Bootstrap 3"
        image={jsImg}
      />
            <Card
        title="Actualmente estudiando"
        content="Actualmente me encuentro estudiando React, para despues aprender Tailwind y Typescript"
        image={ReaImg}
      />
      <Card
        title="Otros lenguajes"
        content="Durante mis estudios he aprendido otros lenguajes como java, Python y C++"
        image={pyImg}
      />
      </div>

      <Boton texto="Haz clic aquí" onClick={manejarClick} />

      <div className="contact-bar" id="contacto">
      <a href="mailto:ale.serranodev@gmail.com" className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span>ale.serranodev@gmail.com</span>
      </a>

      <a
        href="https://www.linkedin.com/in/flavio-alejandro-serrano-s"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaLinkedin className="contact-icon" />
        <span>linkedin.com/in/flavio-alejandro-serrano-s</span>
      </a>

      <a
        href="https://github.com/AleDevLab"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaGithub className="contact-icon" />
        <span>github.com/AleDevLab</span>
      </a>
    </div>
    </>
  );
}

export default App;
