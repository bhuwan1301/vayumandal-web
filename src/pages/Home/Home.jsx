import './Home.css';
import heroChild from '../../assets/hero-child.svg';
import orbitRing from '../../assets/orbit-ring.svg';
import orbitRing2 from '../../assets/orbit2.svg';
import starsSoft from '../../assets/stars-soft.svg';
import studentsGroup from '../../assets/students-group.svg';
import flightSeedsIcon from '../../assets/flight-seeds-icon.svg';
import skyCadetsIcon from '../../assets/sky-cadets-icon.svg';
import nextgenPilotsIcon from '../../assets/nextgen-pilots-icon.svg';
import flightSeedsBg from '../../assets/flight-seeds-bg.svg';
import skyCadetsBg from '../../assets/sky-cadets-bg.svg';
import nextgenPilotsBg from '../../assets/nextgen-pilots-bg.svg';
import handsOnIcon from '../../assets/hands-on-icon.svg';
import mentorsIcon from '../../assets/mentors-icon.svg';
import globalIcon from '../../assets/global-icon.svg';
import burdenIcon from '../../assets/burden-icon.svg';
import curriculumIcon from '../../assets/curriculum-icon.svg';
import certificationIcon from '../../assets/certification-icon.svg';
import robotMascot from '../../assets/robot-mascot.svg';
import studentsHappy from '../../assets/students-happy.svg';
import successGroupPhoto from '../../assets/success-group-photo.svg';
import successClassroom from '../../assets/success-classroom.svg';
import project1 from '../../assets/project-1.svg';
import project2 from '../../assets/project-2.svg';
import project3 from '../../assets/project-3.svg';
import project4 from '../../assets/project-4.svg';
import project5 from '../../assets/project-5.svg';
import project6 from '../../assets/project-6.svg';
import faqPlusIcon from '../../assets/faq-plus-icon.svg';

const Home = () => {
  return (
    <div className="home">
      {/* Existing hero section */}
      <section className="hero">
        {/* <img className="hero-stars" src={starsSoft} alt="" aria-hidden="true" /> */}

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">WELCOME TO VAYUMANDAL INNOVATIONS</p>

            <h1 className="hero-title">
              WHERE <span className="accent">YOUNG MINDS</span><br />
              TAKE FLIGHT
            </h1>

            <p className="hero-sub">
              Bringing 21st Century Skills For Students Worldwide
            </p>

            <div className="cta-row">
              <a href="/trial" className="btn outline">Book a Trial Class</a>
              <a href="/programs" className="btn filled">Explore our Programs</a>
            </div>
          </div>

          <div className="hero-visual">
            <img className="hero-child" src={heroChild} alt="Student building a drone" />
            <img className="orbit" src={orbitRing} alt="" aria-hidden="true" />
            <img className="orbit" src={orbitRing2} alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Existing mission section */}
      <section className="mission">
        <div className="mission-inner">
          <div className="mission-text">
            <h2 className="mission-heading">Our Mission</h2>
            <p className="mission-para">
              At Vayumandal Innovations, we believe innovation starts young. We bring robotics and drone technology
              into learning spaces, making STEM education hands‑on, engaging, and future‑focused. By combining DIY kits,
              expert mentorship, and immersive tech‑driven experiences, we help students explore not just how things
              work, but why they work.
            </p>
            <p className="mission-para">
              Our programs are designed to spark curiosity, build real‑world skills, and support the transformation of
              the Indian education system through accessible, project‑based learning.
            </p>
          </div>

          <div className="mission-media">
            <img src={studentsGroup} alt="Group of happy students" />
          </div>
        </div>
      </section>

      {/* Existing programs section */}
      <section className="programs">
        
        <div className="programs-inner">
          <h2 className="programs-heading">Our <span className="accent">flagship</span> programs</h2>
          
          <div className="programs-grid">
            {/* Your existing program cards */}
            <div className="program-card flight-seeds">
              <div className="card-ribbon">20% OFF</div>
              <div className="card-header">
                <img className="card-icon" src={flightSeedsIcon} alt="" aria-hidden="true" />
                <h3 className="card-title">FLIGHT SEEDS</h3>
                <p className="card-age">For class 3rd - 5th</p>
                <p className="card-level">Foundational Level</p>
              </div>
              
              <div className="card-features">
                <ul>
                  <li>12 Sessions</li>
                  <li>7+ New Projects</li>
                  <li>Certification Day</li>
                  <li>Exciting Prize Distributions</li>
                  <li>Practical Learning</li>
                </ul>
              </div>
              
              <div className="card-footer">
                <a href="/programs/flight-seeds" className="btn-explore">
                  Explore Now
                  <span className="arrow">→</span>
                </a>
              </div>
              
              <img className="card-bg-image" src={flightSeedsBg} alt="" aria-hidden="true" />
            </div>

            <div className="program-card sky-cadets">
              <div className="card-ribbon">20% OFF</div>
              <div className="card-header">
                <img className="card-icon" src={skyCadetsIcon} alt="" aria-hidden="true" />
                <h3 className="card-title">SKY CADETS</h3>
                <p className="card-age">For class 6th - 8th</p>
                <p className="card-level">Advance Level</p>
              </div>
              
              <div className="card-features">
                <ul>
                  <li>14 Sessions</li>
                  <li>10+ Capstone Projects</li>
                  <li>Own customized kit</li>
                  <li>Flight Simulations + AI Integration Modules</li>
                  <li>Competitions Accessibility</li>
                </ul>
              </div>
              
              <div className="card-footer">
                <a href="/programs/sky-cadets" className="btn-explore">
                  Explore Now
                  <span className="arrow">→</span>
                </a>
              </div>
              
              <img className="card-bg-image" src={skyCadetsBg} alt="" aria-hidden="true" />
            </div>

            <div className="program-card nextgen-pilots">
              <div className="card-ribbon">20% OFF</div>
              <div className="card-header">
                <img className="card-icon" src={nextgenPilotsIcon} alt="" aria-hidden="true" />
                <h3 className="card-title">NEXTGEN PILOTS</h3>
                <p className="card-age">For class 9th - 12th</p>
                <p className="card-level">Expert Level</p>
              </div>
              
              <div className="card-features">
                <ul>
                  <li>14 Master Sessions</li>
                  <li>10+ Competitive Projects</li>
                  <li>AI-Powered</li>
                  <li>Drone Navigation & Sensor Mapping</li>
                  <li>Industry-Sim Toolkits</li>
                </ul>
              </div>
              
              <div className="card-footer">
                <a href="/programs/nextgen-pilots" className="btn-explore">
                  Explore Now
                  <span className="arrow">→</span>
                </a>
              </div>
              
              <img className="card-bg-image" src={nextgenPilotsBg} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart section */}
      <section className="features">
        <div className="features-inner">
          <h2 className="features-heading">What Sets <span className="accent">Us</span> Apart</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <img className="feature-icon" src={handsOnIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Hands-On Tech Learning</h3>
              <p className="feature-desc">Students build & fly real drones, not just theory.</p>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={mentorsIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Expert Mentors</h3>
              <p className="feature-desc">Led by engineers from tier 1 engineer college - NSUT, and mentors.</p>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={globalIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Global-Ready Exposure</h3>
              <p className="feature-desc">We prep kids for international-level competitions & innovation platforms.</p>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={burdenIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Zero Burden for School</h3>
              <p className="feature-desc">We bring all materials, tools & trainers. We Provide Strict safety and accountability protocols</p>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={curriculumIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Project-Based Curriculum</h3>
              <p className="feature-desc">Custom-designed to align with NEP 2020, ATL goals & future skills.</p>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={certificationIcon} alt="" aria-hidden="true" />
              <h3 className="feature-title">Certifications & Recognition</h3>
              <p className="feature-desc">Students get participation & achievement certificates, great for their portfolios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bring the Future of Learning section */}
      <section className="future-learning">
        <div className="future-inner">
          <div className="future-content">
            <h2 className="future-heading">
              Bring the Future of<br />
              Learning to <span className="accent">Your School</span>
            </h2>
            <p className="future-desc">
              <strong>Want To Bring Drone Learning To Your School?</strong> Launch Drone & Robotics
              Labs That Inspire Young Minds And Build Real-World Skills
            </p>
            <p className="future-sub">
              Partner with <strong>Vayumandal Innovations</strong> to bring hands-on robotics and drone education to your classrooms.
            </p>
            <div className="future-buttons">
              <a href="/partnership" className="btn filled">Partnership with Us →</a>
              <a href="/workshop" className="btn outline">Book a Workshop →</a>
            </div>
          </div>
          
          <div className="future-visual">
            <img className="students-image" src={studentsHappy} alt="Happy students" />
            <img className="robot-mascot" src={robotMascot} alt="Robot mascot" />
          </div>
        </div>
      </section>

      {/* Success Stories section */}
      <section className="success">
        <div className="success-inner">
          <h2 className="success-heading"><span className="accent">Success</span> Stories</h2>
          
          <div className="success-photos">
            <img src={successGroupPhoto} alt="Students and mentors group photo" />
            <img src={successClassroom} alt="Classroom full of students" />
          </div>
          
          <div className="success-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Workshops</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Schools</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form section */}
      <section className="contact-form">
        
        <div className="form-inner">
          <h2 className="form-heading">
            We aim to help students discover<br />
            the <span className="accent">joy of learning</span>.
          </h2>
          <p className="form-subtext">Ready for your child's future? Book a demo class now.</p>
          
          <form className="demo-form">
            <input type="text" placeholder="Student Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email ID" required />
            <input type="text" placeholder="School Name" required />
            <input type="text" placeholder="State & City" required />
            <button type="submit" className="btn filled form-submit">Submit</button>
          </form>
        </div>
      </section>
       <section className="projects-gallery">
        <div className="gallery-inner">
          <h2 className="gallery-heading"><span className="accent">Projects</span> Gallery</h2>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={project1} alt="Student robotics project 1" />
            </div>
            <div className="gallery-item">
              <img src={project2} alt="Student drone project 2" />
            </div>
            <div className="gallery-item">
              <img src={project3} alt="Student robotics project 3" />
            </div>
            <div className="gallery-item">
              <img src={project4} alt="Student drone project 4" />
            </div>
            <div className="gallery-item">
              <img src={project5} alt="Student robotics project 5" />
            </div>
            <div className="gallery-item">
              <img src={project6} alt="Student robotics project 6" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs section */}
      <section className="faqs">
        <div className="faqs-inner">
          <h2 className="faqs-heading">FAQs</h2>
          
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">
                <span>Do students need any prior experience?</span>
                <img src={faqPlusIcon} alt="" aria-hidden="true" className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>No prior experience is required! Our programs are designed for complete beginners. We start with basic concepts and gradually build up skills. Our expert mentors guide students through every step of the learning process.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>How are the offline classes conducted?</span>
                <img src={faqPlusIcon} alt="" aria-hidden="true" className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>Our offline classes are conducted in small groups with hands-on activities. Each student gets their own kit to work with. Classes include theory, practical building sessions, and flying practice in safe, supervised environments.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Can I build my own robot or drone?</span>
                <img src={faqPlusIcon} alt="" aria-hidden="true" className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>Absolutely! Building your own robot or drone is a core part of our curriculum. Students progress from assembling pre-designed kits to creating their own custom projects with guidance from our mentors.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Can I take the kits home?</span>
                <img src={faqPlusIcon} alt="" aria-hidden="true" className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>Yes! In our advanced programs, students receive take-home kits that they can continue working on. This allows for extended learning and practice outside of class hours.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                <span>Is it safe to fly drones?</span>
                <img src={faqPlusIcon} alt="" aria-hidden="true" className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>Safety is our top priority. All drone flying activities are conducted in controlled environments with safety protocols. We use beginner-friendly drones with protective features and provide proper safety training before any flight activities.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;