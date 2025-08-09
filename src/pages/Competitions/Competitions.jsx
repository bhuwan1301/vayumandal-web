import './Competitions.css';
import competitionsHeroDrone from '../../assets/competitions-hero-drone.svg';
import hoverwarzDrone from '../../assets/hoverwarz-drone.svg';
import hoverwarzLogo from '../../assets/hoverwarz-logo.svg';
import suryaDronathonIcon from '../../assets/surya-dronathon-icon.svg';
import mathworksIcon from '../../assets/mathworks-icon.svg';
import isroIcon from '../../assets/isro-icon.svg';
import technoxianIcon from '../../assets/technoxian-icon.svg';
import recfIcon from '../../assets/recf-icon.svg';

const Competitions = () => {
  return (
    <div className="competitions-page">
      {/* Hero Section */}
      <section className="competitions-hero">

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              OUR FLAGSHIP <span className="accent">COMPETITIONS</span>
            </h1>
            <p className="hero-subtitle">
              Empowering Young Innovators through Real-World Tech
            </p>
          </div>
        </div>

        <div className="hero-description">
          <p>
            At Vayumandal Innovations, we believe that innovation begins early. We're on a
            mission to bring robotics and drone technology to classrooms and playgrounds,
            making it fun, accessible, and deeply educational for students from Grades 3 to 12.
          </p>
          <p>
            Founded by educators and engineers from NSUT, our programs combine DIY
            kits, expert-led sessions, and a tech-enabled learning experience. Whether it's
            building a robot, flying a drone, or presenting a project in competition, our
            students gain confidence, creativity, and skills that go beyond textbooks.
          </p>
          <p>
            We're not just teaching how to build—we're helping young minds understand
            why it works.
          </p>
        </div>
      </section>

      {/* HOVERWARZ Section */}
      <section className="hoverwarz-section">
        <div className="hoverwarz-container">
          <div className="hoverwarz-card">
            <div className="hoverwarz-content">
              <h2 className="hoverwarz-title">HOVERWARZ</h2>
              <p className="hoverwarz-description">
                Exciting challenges that push students to design, build, and
                compete regionally and nationally
              </p>
              <div className="hoverwarz-status">
                <span className="coming-soon">Coming soon ...</span>
              </div>
            </div>

            <div className="hoverwarz-visual">
              <img src={hoverwarzDrone} alt="HOVERWARZ competition drone" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Competitions Section */}
      <section className="upcoming-competitions">

        <div className="competitions-container">
          <h2 className="competitions-title">
            SOME UPCOMING DRONE <span className="accent">COMPETITIONS</span>
          </h2>

          <div className="competitions-list">
            {/* Surya Dronathon 2025 */}
            <div className="competition-card">
              <div className="card-header">
                <h3 className="competition-name">Surya Dronathon 2025</h3>
              </div>
              <p className="competition-description">
                One of India's highest-altitude drone obstacle courses, from Aug 10-24,
                promoting indigenous drone innovation and defense collaboration.
              </p>
            </div>

            {/* MathWorks Minidrone Competition */}
            <div className="competition-card">
              <div className="card-header">
                <h3 className="competition-name">MathWorks Minidrone Competition</h3>
              </div>
              <p className="competition-description">
                Design a line-following algorithm and deploy it on a Parrot Mambo drone via
                simulation and real hardware
              </p>
            </div>

            {/* ISRO Robotic Challenge */}
            <div className="competition-card">
              <div className="card-header">
                <h3 className="competition-name">ISRO Robotic Challenge (IRoC-U 2025)</h3>
              </div>
              <p className="competition-description">
                Innovate autonomous navigation systems for aerial vehicles without external
                aids—a step toward Martian drone tech.
              </p>
            </div>

            {/* Drone Rescue Challenge */}
            <div className="competition-card">
              <div className="card-header">
                <h3 className="competition-name">Drone Rescue Challenge (TechnoXian)</h3>
              </div>
              <p className="competition-description">
                Teams design drones for rescue simulations, solving real-world scenarios
                using creativity and engineering.
              </p>
            </div>

            {/* Aerial Drone Competition */}
            <div className="competition-card">
              <div className="card-header">
                <h3 className="competition-name">Aerial Drone Competition (RECF)</h3>
              </div>
              <p className="competition-description">
                An international STEM challenge where students aged 10-18 pilot and
                program drones in real-world mission scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competitions;
