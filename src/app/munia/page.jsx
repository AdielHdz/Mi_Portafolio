import "./munia.css";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCalendar, AiFillStar } from "react-icons/ai";
const Munia = () => {
  return (
    <section className="section">
      <div className="container">
        <FaUserAlt className="icon" />
        <h3 className="route">Agendar</h3>
      </div>
      <div className="container">
        <AiOutlineCalendar className="icon" />
        <h3 className="route">Mis citas</h3>
      </div>
      <section className="view_window">
        <div className="window">
          <h2 className="title ">Agendar tu cita</h2>
          <div className="window__container2">
            <p className="window__paragraph subtitle">Sesiones restantes</p>
            <section className="window__body">
              <div className="calendar"></div>
              <div className="calendar category">
                <div className="category__select">
                  Seleccionar categorias
                  <IoIosArrowDown className="arrowIcon" />
                </div>
              </div>
              <div className="window__consulta">
                <label htmlFor="consulta" className="consulta__label ">
                  Razón de la consulta
                </label>
                <textarea className="consulta__input" />
              </div>
            </section>
            <h2 className=" subtitle">Profesional seleccionado</h2>
          </div>
          <section className="section2">
            <div className="section2__container">
              <div className="section2__containerImage">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                  alt="psicologo"
                  className="section2__img"
                />
              </div>
              <div className="section2__data">
                <h5>
                  <b>Maria Agustina Lahitou</b>
                </h5>
                <p className="section2__paragraph">
                  Enfoque: <b>Integrativo</b>
                </p>
                <p className="section2__paragraph">
                  Nacionalidad: <b>Argentina</b>
                </p>
                <p className="section2__paragraph">
                  Cedula: <b>54678</b>
                </p>
              </div>
              <div className="section2__rating">
                <AiFillStar className="starIcon" />
                <p className="section2__paragraph">
                  <b>3.9 / 5.0</b>
                </p>
              </div>
            </div>
          </section>
          <button className="window__btn">Confirmar</button>
        </div>
      </section>
    </section>
  );
};

export default Munia;
