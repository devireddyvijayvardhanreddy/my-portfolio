import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devireddy Vijay Vardhan Reddy - Portfolio</title>
        <meta name="description" content="Full Stack Developer | CDAC | BTech IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>DVR</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Devireddy Vijay Vardhan Reddy</h1>
            <p className={styles.subtitle}>Full Stack Developer | CDAC | BTech IT</p>
            <p className={styles.description}>
              Passionate about building scalable applications with modern technologies.
              Specializing in full-stack development, DevOps, and cloud infrastructure.
            </p>
           <div className={styles.ctaButtons}>
  <button
    className={`${styles.btn} ${styles.btnPrimary}`}
    onClick={() =>
      window.open(
        "https://drive.google.com/file/d/1Ti02BM4xRQ1_DLuTtWrDR1chY_DKzGp1/view?usp=drive_link",
        "_blank",
        "noopener,noreferrer"
      )
    }
  >
    Download Resume
  </button>


</div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>
            I'm a recent B.Tech graduate from VJIT and CDAC trainee specializing in full-stack web development
            and DevOps. With hands-on experience in modern web frameworks and cloud technologies, I'm passionate
            about creating efficient, scalable solutions that solve real-world problems.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className={styles.section}>
          <h2>Tech Stack</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h3>Frontend</h3>
              <p>React.js, Next.js, Tailwind CSS</p>
            </div>
            <div className={styles.techCard}>
              <h3>Backend</h3>
              <p>Node.js, Express.js, Java</p>
            </div>
            <div className={styles.techCard}>
              <h3>Databases</h3>
              <p>MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div className={styles.techCard}>
              <h3>DevOps</h3>
              <p>Docker, Linux, AWS, Azure</p>
            </div>
            <div className={styles.techCard}>
              <h3>Tools & Platforms</h3>
              <p>Git, GitHub, GitHub Actions</p>
            </div>
            <div className={styles.techCard}>
              <h3>Other Skills</h3>
              <p>Shell Scripting, REST APIs, Microservices</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <h3>Online Course Management System</h3>
              <p className={styles.projectTech}>React.js • Node.js • MySQL</p>
              <p>A comprehensive platform for managing online courses with user authentication,
              course creation, and progress tracking.</p>
              <div className={styles.projectLinks}>
                <a href="#">View Project →</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Agricultural Prediction System</h3>
              <p className={styles.projectTech}>Machine Learning • Python • Web</p>
              <p>ML-based system for predicting crop yields and providing recommendations
              to farmers for optimal agricultural practices.</p>
              <div className={styles.projectLinks}>
                <a href="#">View Project →</a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h3>Student Performance Evaluation</h3>
              <p className={styles.projectTech}>Full Stack • Data Analytics • SQL</p>
              <p>Dashboard for tracking and analyzing student performance metrics with
              visualizations and predictive insights.</p>
              <div className={styles.projectLinks}>
                <a href="#">View Project →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h2>Let's Connect</h2>
          <p className={styles.contactSubtitle}>
            I'm always interested in hearing about new opportunities and exciting projects.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:vijayvardhan218@gmail.com" className={styles.contactLink}>
              📧 Email
            </a>
            <a href="https://linkedin.com/in/vijayvardhan12" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/devireddyvijayvardhanreddy" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              💻 GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2025 Devireddy Vijay Vardhan Reddy. All rights reserved.</p>
          <p>Built with Next.js • Deployed on Vercel</p>
        </footer>
      </div>
    </>
  );
}
