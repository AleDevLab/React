import Boton from './components/buttons/Boton';
import Navbar from './components/interfaz/Navbar';
import Title from './components/texto/Title';
import Card from './components/interfaz/Card';
import jsImg from "./assets/js.png";
import ReaImg from "./assets/react.jpg";
import pyImg from "./assets/python.png";
import perfil from "./assets/perfil.png";
import Swal from "sweetalert2";
import './App.css'
import './CSS/Contact.css'
import AboutMe from './components/texto/AboutMe';
import Foot from './components/interfaz/Foot';
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
      <h1>Hola</h1>
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

      <AboutMe />
      <Boton texto="Haz clic aquí" onClick={manejarClick} />
      <Foot />
    </>
    
  );
}

export default App;
