import "./App.css"

function App() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#inicio" className="logo">
            <img
              src="/favicon.svg"
              alt="Logo Milena Vargas"
              className="logoImage"
            />

            <div className="logoText">
              MV<span>.</span>
            </div>
          </a>

          <div className="navLinks">
            <a href="#inicio">Inicio</a>
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#estudios">Estudios</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a
            href="/ACMilena_Vargas_CV.pdf"
            download
            className="cvButton"
          >
            Descargar CV
          </a>
        </nav>
      </header>

      <main>

        {/* INICIO */}
        <section id="inicio" className="hero">
          <div className="heroContent">

            <p className="heroLabel">
              INGENIERA DE SISTEMAS
            </p>

            <h1>
              Hola, soy <br />
              <span>Milena Vargas.</span>
            </h1>

            <h2>
              Software Developer | Backend Developer
            </h2>

            <p className="heroDescription">
              Ingeniera de Sistemas con más de 3 años de experiencia
              en desarrollo de software, APIs REST, microservicios,
              bases de datos y aseguramiento de calidad.
            </p>

            <div className="heroButtons">
              <a href="#proyectos" className="primaryButton">
                Ver mis proyectos
              </a>

              <a href="#experiencia" className="secondaryButton">
                Mi experiencia
              </a>
            </div>

          </div>

          <div className="heroDecoration">
            <div className="codeBox">
              <span>&lt;developer&gt;</span>

              <p>
                Java · APIs · Backend
              </p>

              <span>&lt;/developer&gt;</span>
            </div>
          </div>
        </section>


        {/* PERFIL */}
        <section id="perfil" className="about">

          <div className="sectionTitle">
            <p>SOBRE MÍ</p>
            <h2>Perfil profesional</h2>
          </div>

          <div className="aboutContent">

            <div className="aboutText">
              <p>
                Soy Ingeniera de Sistemas con experiencia en desarrollo,
                soporte de aplicaciones y aseguramiento de calidad.
              </p>

              <p>
                He trabajado en desarrollo con Java y PHP, integración
                y validación de APIs REST, arquitectura basada en
                microservicios y bases de datos como Oracle PL/SQL
                y SQL Server.
              </p>

              <p>
                Me interesa continuar desarrollándome profesionalmente
                en el área de desarrollo de software, especialmente
                en soluciones backend y construcción de APIs.
              </p>
            </div>

            <div className="aboutStats">

              <div className="stat">
                <strong>3+</strong>
                <span>Años de experiencia</span>
              </div>

              <div className="stat">
                <strong>REST</strong>
                <span>APIs & Microservicios</span>
              </div>

              <div className="stat">
                <strong>Java</strong>
                <span>Backend Development</span>
              </div>

            </div>

          </div>

        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="experience">

          <div className="sectionTitle">
            <p>MI TRAYECTORIA</p>
            <h2>Experiencia profesional</h2>
          </div>

          <div className="timeline">

            {/* NEORIS */}
            <article className="experienceItem">

              <div className="experienceDate">
                <span>Jun 2023</span>
                <span>Dic 2024</span>
              </div>

              <div className="timelineMarker">
                <div className="timelineDot"></div>
              </div>

              <div className="experienceCard">

                <div className="experienceHeader">
                  <div>
                    <h3>Software Developer Analyst</h3>
                    <h4>NEORIS</h4>
                  </div>

                  <span className="experienceType">
                    Desarrollo
                  </span>
                </div>

                <p>
                  Desarrollo y mantenimiento de aplicaciones, integración
                  de servicios backend y participación en el ciclo de
                  desarrollo y calidad de software.
                </p>

                <ul>
                  <li>Desarrollo y mantenimiento con Java y PHP.</li>
                  <li>Desarrollo, integración y validación de APIs REST.</li>
                  <li>Participación en arquitectura de microservicios.</li>
                  <li>Consultas y procedimientos con Oracle PL/SQL y SQL.</li>
                  <li>Pruebas funcionales, smoke y regresión.</li>
                  <li>Trabajo bajo metodologías Scrum y Kanban.</li>
                </ul>

                <div className="experienceTags">
                  <span>Java</span>
                  <span>PHP</span>
                  <span>REST API</span>
                  <span>Microservices</span>
                  <span>Oracle PL/SQL</span>
                  <span>SQL</span>
                </div>

              </div>
            </article>


            {/* SILICE */}
            <article className="experienceItem">

              <div className="experienceDate">
                <span>Feb 2022</span>
                <span>Jun 2023</span>
              </div>

              <div className="timelineMarker">
                <div className="timelineDot"></div>
              </div>

              <div className="experienceCard">

                <div className="experienceHeader">
                  <div>
                    <h3>Consultor Chat Developer</h3>
                    <h4>Silice SI</h4>
                  </div>

                  <span className="experienceType">
                    Desarrollo
                  </span>
                </div>

                <p>
                  Desarrollo de soluciones conversacionales e integración
                  de chatbots con servicios y sistemas backend.
                </p>

                <ul>
                  <li>Desarrollo e implementación de chatbots.</li>
                  <li>Desarrollo e integración de APIs.</li>
                  <li>Integración con sistemas backend mediante APIs REST.</li>
                  <li>Consumo de servicios para gestión de información.</li>
                  <li>Ejecución de pruebas funcionales.</li>
                  <li>Documentación técnica.</li>
                </ul>

                <div className="experienceTags">
                  <span>REST API</span>
                  <span>Microservices</span>
                  <span>Postman</span>
                  <span>Jira</span>
                </div>

              </div>
            </article>


            {/* SITIC */}
            <article className="experienceItem">

              <div className="experienceDate">
                <span>Nov 2020</span>
                <span>Ene 2022</span>
              </div>

              <div className="timelineMarker">
                <div className="timelineDot"></div>
              </div>

              <div className="experienceCard">

                <div className="experienceHeader">
                  <div>
                    <h3>Analista de Soporte y Pruebas</h3>
                    <h4>Sitic SAS</h4>
                  </div>

                  <span className="experienceType">
                    QA & Soporte
                  </span>
                </div>

                <p>
                  Soporte de aplicaciones, administración de información
                  y ejecución de pruebas para validación de soluciones.
                </p>

                <ul>
                  <li>Administración de bases de datos SQL Server.</li>
                  <li>Soporte técnico a usuarios.</li>
                  <li>Validación de archivos XML y JSON.</li>
                  <li>Implementaciones básicas en Python.</li>
                  <li>Ejecución de pruebas en ambiente QA.</li>
                </ul>

                <div className="experienceTags">
                  <span>SQL Server</span>
                  <span>Python</span>
                  <span>QA</span>
                  <span>XML</span>
                  <span>JSON</span>
                </div>

              </div>
            </article>

          </div>

        </section>

        {/* TECNOLOGÍAS */}
        <section id="tecnologias" className="technologies">

          <div className="sectionTitle">
            <p>STACK TECNOLÓGICO</p>
            <h2>Tecnologías y habilidades</h2>
          </div>

          <p className="technologiesIntro">
            Tecnologías y herramientas con las que he trabajado durante
            mi experiencia profesional y proyectos de desarrollo.
          </p>

          <div className="technologyGrid">

            {/* BACKEND */}
            <article className="technologyCard">
              <div className="technologyIcon">
                {"</>"}
              </div>

              <h3>Backend</h3>

              <p>
                Desarrollo y mantenimiento de aplicaciones y servicios backend.
              </p>

              <div className="technologyTags">
                <span>Java</span>
                <span>PHP</span>
                <span>Python</span>
                <span>Flask</span>
                <span>Spring Boot</span>
              </div>
            </article>


            {/* APIs */}
            <article className="technologyCard">
              <div className="technologyIcon">
                API
              </div>

              <h3>APIs & Integraciones</h3>

              <p>
                Desarrollo, consumo, integración y validación de servicios.
              </p>

              <div className="technologyTags">
                <span>REST APIs</span>
                <span>Microservicios</span>
                <span>JSON</span>
                <span>XML</span>
                <span>Postman</span>
              </div>
            </article>


            {/* DATABASE */}
            <article className="technologyCard">
              <div className="technologyIcon">
                DB
              </div>

              <h3>Bases de datos</h3>

              <p>
                Consultas, procedimientos y gestión de información.
              </p>

              <div className="technologyTags">
                <span>Oracle PL/SQL</span>
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>SQL</span>
              </div>
            </article>


            {/* QA */}
            <article className="technologyCard">
              <div className="technologyIcon">
                QA
              </div>

              <h3>Quality Assurance</h3>

              <p>
                Validación funcional de aplicaciones, servicios y APIs.
              </p>

              <div className="technologyTags">
                <span>Functional Testing</span>
                <span>Smoke Testing</span>
                <span>Regression Testing</span>
                <span>API Testing</span>
              </div>
            </article>


            {/* HERRAMIENTAS */}
            <article className="technologyCard">
              <div className="technologyIcon">
                DEV
              </div>

              <h3>Herramientas</h3>

              <p>
                Herramientas utilizadas en desarrollo y gestión de proyectos.
              </p>

              <div className="technologyTags">
                <span>Git</span>
                <span>GitHub</span>
                <span>Jira</span>
                <span>Postman</span>
                <span>Docker</span>
              </div>
            </article>


            {/* METODOLOGÍAS */}
            <article className="technologyCard">
              <div className="technologyIcon">
                AG
              </div>

              <h3>Metodologías</h3>

              <p>
                Experiencia trabajando en equipos de desarrollo ágiles.
              </p>

              <div className="technologyTags">
                <span>Scrum</span>
                <span>Kanban</span>
                <span>Agile</span>
                <span>CI/CD</span>
              </div>
            </article>

          </div>

        </section>
        {/* EDUCACIÓN Y FORMACIÓN */}
        <section id="estudios" className="education">

          <div className="sectionTitle">
            <p>FORMACIÓN</p>
            <h2>Educación y aprendizaje continuo</h2>
          </div>

          <p className="educationIntro">
            Mi formación combina estudios en Ingeniería de Sistemas con
            capacitación continua en desarrollo de software, Java,
            desarrollo web, APIs e inglés.
          </p>

          <div className="educationLayout">

            {/* EDUCACIÓN FORMAL */}
            <div className="formalEducation">

              <h3 className="educationSubtitle">
                Educación
              </h3>

              <article className="degreeCard">

                <div className="degreeYear">
                  2022
                </div>

                <div className="degreeContent">

                  <span className="degreeType">
                    TÍTULO PROFESIONAL
                  </span>

                  <h3>
                    Ingeniería de Sistemas
                  </h3>

                  <h4>
                    Corporación Unificada Nacional CUN
                  </h4>

                  <p>
                    Formación profesional orientada al desarrollo de
                    soluciones tecnológicas, software, bases de datos
                    y sistemas de información.
                  </p>

                </div>

              </article>


              <article className="degreeCard">

                <div className="degreeIcon">
                  IT
                </div>

                <div className="degreeContent">

                  <span className="degreeType">
                    FORMACIÓN TÉCNICA
                  </span>

                  <h3>
                    Técnico en Mantenimiento y Soporte de Cómputo
                  </h3>

                  <h4>
                    Corporación Unificada Nacional CUN
                  </h4>

                  <p>
                    Formación técnica en soporte, mantenimiento y
                    fundamentos de infraestructura tecnológica.
                  </p>

                </div>

              </article>

            </div>


            {/* FORMACIÓN COMPLEMENTARIA */}
            <div className="additionalEducation">

              <h3 className="educationSubtitle">
                Formación complementaria
              </h3>


              <article className="courseCard">

                <div className="courseNumber">
                  01
                </div>

                <div>
                  <h3>
                    Desarrollo de aplicaciones con Java
                  </h3>

                  <p>
                    Diplomado en desarrollo de aplicaciones de software
                    orientadas a objetos con Java.
                  </p>

                  <div className="courseTags">
                    <span>Java</span>
                    <span>POO</span>
                  </div>
                </div>

              </article>


              <article className="courseCard">

                <div className="courseNumber">
                  02
                </div>

                <div>
                  <h3>
                    Desarrollo Web Full Stack
                  </h3>

                  <p>
                    Bootcamp orientado al desarrollo de aplicaciones web
                    y tecnologías frontend y backend.
                  </p>

                  <div className="courseTags">
                    <span>Full Stack</span>
                    <span>Web Development</span>
                  </div>
                </div>

              </article>


              <article className="courseCard">

                <div className="courseNumber">
                  03
                </div>

                <div>
                  <h3>
                    API Testing Fundamentals
                  </h3>

                  <p>
                    Formación en fundamentos de pruebas de APIs utilizando
                    Postman.
                  </p>

                  <div className="courseTags">
                    <span>Postman</span>
                    <span>API Testing</span>
                  </div>
                </div>

              </article>


              <article className="courseCard">

                <div className="courseNumber">
                  04
                </div>

                <div>
                  <h3>
                    English B1
                  </h3>

                  <p>
                    Formación en inglés en International Language Institute,
                    Washington D.C.
                  </p>

                  <div className="courseTags">
                    <span>English</span>
                    <span>B1</span>
                  </div>
                </div>

              </article>

            </div>

          </div>

        </section>

        {/* CONTACTO */}
        <section id="contacto" className="contact">

          <div className="contactContainer">

            <div className="contactInfo">

              <p className="contactLabel">
                CONTACTO
              </p>

              <h2>
                ¿Hablamos sobre una <span>oportunidad?</span>
              </h2>

              <p className="contactDescription">
                Estoy interesada en oportunidades relacionadas con
                desarrollo de software y backend, donde pueda aportar
                mi experiencia y continuar creciendo profesionalmente.
              </p>

              <div className="contactLinks">

                <a
                  href="mailto:milenavargas098@gmail.com"
                  className="contactItem"
                >
                  <div className="contactIcon">
                    @
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>milenavargas098@gmail.com</strong>
                  </div>
                </a>


                <a
                  href="https://www.linkedin.com/in/milenaumbarila/"
                  target="_blank"
                  rel="noreferrer"
                  className="contactItem"
                >
                  <div className="contactIcon">
                    in
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>Milena Vargas</strong>
                  </div>
                </a>


                <a
                  href="https://github.com/MilenaVU"
                  target="_blank"
                  rel="noreferrer"
                  className="contactItem"
                >
                  <div className="contactIcon">
                    GH
                  </div>

                  <div>
                    <span>GitHub</span>
                    <strong>MilenaVU</strong>
                  </div>
                </a>

              </div>

            </div>


            {/* TARJETA DERECHA */}

            <div className="contactCard">

              <span className="contactCardLabel">
                DISPONIBLE PARA NUEVOS RETOS
              </span>

              <div className="location">
                <span>Ubicación</span>
                <strong>Bogotá, Colombia</strong>
              </div>

            </div>

          </div>

        </section>

      </main>
      <footer className="footer">

        <div className="footerContent">

          <a href="#inicio" className="footerLogo">
            MV<span>.</span>
          </a>

          <p>
            Software Developer · Backend Developer
          </p>

          <div className="footerLinks">

            <a
              href="https://github.com/MilenaVU"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/milenaumbarila/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:milenavargas098@gmail.com">
              Email
            </a>

          </div>

        </div>

        <div className="footerBottom">

          <p>
            © 2026 Milena Vargas. Todos los derechos reservados.
          </p>

          <a href="#inicio">
            Volver arriba ↑
          </a>

        </div>

      </footer>
    </>
  )
}

export default App