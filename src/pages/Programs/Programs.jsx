import './Programs.css';
import programsHeroChild from '../../assets/programs-hero-child.svg';
import studentsWorking from '../../assets/students-working.svg';
// import learnCircuits from '../../assets/learn-circuits.svg';
// import learnProgramming from '../../assets/learn-programming.svg';
import learnRobotics from '../../assets/learn-robotics.svg';
import learnDrones from '../../assets/learn-drones.svg';
import learnDrones2 from '../../assets/learn-drones2.svg';
// import learnAi from '../../assets/learn-ai.svg';
import learnInnovation from '../../assets/learn-innovation.svg';
import nsutLogo from '../../assets/nsut-logo.svg';
import aresLogo from '../../assets/ares-nsut-logo.svg';
import nsutIifLogo from '../../assets/nsut-iif-logo.svg';
// import testimonialBg from '../../assets/parent-testimonial-bg.svg';

const Programs = () => {
  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              PROGRAMS THAT SPARK<br />
              <span className="accent">YOUNG INNOVATORS</span>
            </h1>
            <p className="hero-subtitle">
              Hands-on learning designed for curious and creative minds.
            </p>
          </div>
        </div>

        <div className="hero-description-card">
          <div className="hero-desc-image">
            <img src={programsHeroChild} alt="Student learning with electronics" />
          </div>
          <div className="hero-desc-content">
            <p>
              At Vayumandal Innovations, Students Learn By Building, Exploring, And Solving Real-World
              Challenges Through Project-Based Programs. With Personal Kits And Hands-On Experiences,
              Our Drone And Robotics Courses Empower Young Minds With Practical, Future-Ready Skills.
            </p>
            <button className="btn filled demo-btn">Book a Demo Class</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">98%</span>
            <span className="stat-label">of 5-year-olds score at the "genius level" in creative thinking tests. But by age 10, that number drops to 30%, and by adulthood, it's just 2%.</span>
            <span className="stat-source">(Source: NASA creativity test by Dr. George Land)</span>
          </div>
        </div>
      </section>

      {/* Individual Kits Section */}
      <section className="kits-section">
        <div className="kits-container">
          <div className="kits-content">
            <div className="kits-text">
              <h2>INDIVIDUAL KITS FOR EVERY STUDENT !</h2>
              <p className="kits-subtitle">
                WE EQUIP EVERY STUDENT WITH A CUSTOM KIT<br />
                TO ENSURE REAL, PRACTICAL EXPERIENCE !
              </p>
              <button className="btn outline demo-btn">Book a Demo Class</button>
            </div>
            
            <div className="kits-image">
              <img src={studentsWorking} alt="Students working with individual kits" />
            </div>
          </div>
        </div>
      </section>
      <section className="learning-section">
        <div className="learning-container">
          <h2 className="learning-title">Your child will learn</h2>
          
          <div className="learning-grid">
            <div className="learning-item">
              <img src={learnDrones} alt="Drones" className="learning-icon" />
              {/* <h3>Circuits</h3> */}
              <p>Build and fly your own drones from scratch</p>
            </div>
            
            <div className="learning-item">
              <img src={learnRobotics} alt="Robotics" className="learning-icon" />
              {/* <h3>Programming</h3> */}
              <p>Design smart robotics projects with AI and IoT</p>
            </div>
            
            <div className="learning-item">
              <img src={learnDrones2} alt="Robotics" className="learning-icon" />
              {/* <h3>Robotics</h3> */}
              <p>Compete in exciting drone and robotics challenges</p>
            </div>
            
            <div className="learning-item">
              <img src={learnInnovation} alt="Drones" className="learning-icon" />
              {/* <h3>Drones</h3> */}
              <p>Learn real-world tech skills through hands-on creation</p>
            </div>
            
           
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="trusted-container">
          <h2 className="trusted-title">Trusted By</h2>
          <div className="trusted-logos">
            <div className="trusted-item">
              <img src={nsutLogo} alt="NSUT Delhi" />
              <span>NSUT, Delhi</span>
            </div>
            <div className="trusted-item">
              <img src={aresLogo} alt="ARES NSUT" />
              <span>ARES, NSUT</span>
            </div>
            <div className="trusted-item">
              <img src={nsutIifLogo} alt="NSUT IIF" />
              <span>NSUT IIF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Parents Section */}
      <section className="testimonials-section">
        
        <div className="testimonials-container">
          <h2 className="testimonials-title">Hear From The <span className="accent">Parents</span></h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "My Son Looks Forward To The Classes... He Has Performed Well In Competitions And Developed Analytical Ability And Reasoning. Highly Recommend."
              </p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                "My Twins Enrolled For Robotics And Coding. They Thoroughly Enjoy The Experience. Sessions Are Meticulously Planned, Well-Organised, With Hands-On Activities ...Engaging Future Skills That Ignite Young Minds."
              </p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                "My Twins Enrolled For Robotics And Coding. They Thoroughly Enjoy The Experience. Sessions Are Meticulously Planned, Well-Organised, With Hands-On Activities ... Engaging Future Skills That Ignite Young Minds."
              </p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Kids Not Just Acquire Hands-On Skills But Also Learn To Perform While Working With Teams. They Learn Discipline And Planning Working On Projects With Deadlines ... Robotics Competitions Gave Him Confidence And Exposure."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
