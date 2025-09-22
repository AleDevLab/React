import MiComponente from './components/MiComponente';
import Boton from './components/buttons/Boton';
import Navbar from './components/Navbar';
import Title from './components/texto/Title';
import Card from './components/interfaz/Card';
import jsImg from "./assets/js.png";
import ReaImg from "./assets/react.jpg";
import pyImg from "./assets/python.png";
import './App.css'
function App() {
    const manejarClick = () => {
    alert('¡Botón presionado! 🚀');
  };
  return (
   <>
      <Navbar />
       <Title
        headingParts={[
          { text: "Flavio Alejandro Serrano", color: "white" },
          { text: "Developer", color: "rgb(109, 247, 253)" }
        ]}
        paragraph="Bienvenido a mi portafolio de React."
      />

      <div className="cards-container">

      <Card
        title="Programación Web"
        content="Proyectos creados con HTML + Javascript + CSS + PHP + Bootstrap 3"
        image={jsImg}
        link="#"
      />
            <Card
        title="Actualmente estudiando"
        content="Actualmente me encuentro estudiando React, para despues aprender Tailwind y Typescript"
        image={ReaImg}
        link="#"
      />
      <Card
        title="Otros lenguajes"
        content="Durante mis estudios he aprendido otros lenguajes como java, Python y C++"
        image={pyImg}
        link="#"
      />
      </div>

      <MiComponente />
      <Boton texto="Haz clic aquí" onClick={manejarClick} />
    </>
  );
}

export default App;
