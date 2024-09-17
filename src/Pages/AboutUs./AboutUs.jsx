import './AboutUs.css'; // Import CSS for styling
//import Logo from '../../assets/th.jpeg'
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="header-image">
        <h1>About Us</h1>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          {/*<img src= {Logo} alt="GMP Logo" className="intro-image" />*/}
          <div className="intro-text">
            <h2>Mobilizing Muslim Professionals for Positive Change</h2>
            <p>
              The Guild of Muslim Professionals for Peace and Development is a non-profit making, non-political, non-tribal organization
              formed with the core objects to exclusively create a platform for the Muslim Professionals in the area of networking, mentoring,
              building of icons, and entrepreneurship among the members.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To be an outstanding source of professionalism in the Ummah and a benchmark for leadership skills and resources in the country.</p>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To mobilize Nigerian Muslim Professionals for change using effective networking techniques, mentoring, and relevant technologies within permissible Islamic principles.</p>
          </div>
        </div>
      </section>

      <section className='goals-container'>
        <div className="goals-values-section">
          <div className="goals">
            <h3>Goals</h3>
            <ul>
              <li>Raising the next generation of professionals with leadership acumen and connection to the Islamic base.</li>
              <li>Presenting a platform of unity among professionals to identify with.</li>
              <li>Providing resources for mentoring and improving leadership skills for the next generation of professionals.</li>
              <li>Providing a database of Muslim professionals and connections as a resource for national development.</li>
            </ul>
          </div>

          <div className="core-values">
            <h3>Core Values</h3>
            <ul>
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Leadership</li>
              <li>Creativity</li>
              <li>Resourcefulness</li>
              <li>Social Impact</li>
            </ul>
          </div>

          <div className="objectives">
            <h3>Aims and Objectives</h3>
            <ul>
              <li>To mobilize Nigerian Muslim professionals for positive change through networking.</li>
              <li>To repopulate Muslims in and to lead in all professional spheres in Nigeria.</li>
              <li>To grow, attract, and promote Muslim icons for positive change in Nigeria.</li>
              <li>To create an economic structure that will enrich members and make the group financially sufficient.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;