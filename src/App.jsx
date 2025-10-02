import "./styles/main.scss";
import NavComp from './Components/NavComp';
import CardsComp from "./Components/CardsComp";

function App() {
  return (
      <div>
              <NavComp></NavComp>
        {/* Hero Section */}
      <section className="hero">
      <img
        src="https://images.pexels.com/photos/52718/angel-wings-love-white-52718.jpeg"
        alt="Avatar"
        className="rounded-circle"
        width="125"
        height="130"
      /> 
        <h1>Hello, I’m Charlotte 👋</h1>
        <p>Aspiring Developer | Designer | Creator</p>
        <br />
        <a href="#projects" className="btn">See My Work</a>
      </section>
      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
        I am an aspiring web developer with a strong interest in front-end, back-end programming and modern frameworks such as React. I am passionate about designing clean, responsive, and user-friendly applications while continuously improving my technical skills. My long-term goal is to grow into a well-rounded developer who can contribute to innovative projects and deliver impactful digital solutions.
        </p>
      </section>
      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Frameworks and Build tool</h2>
          <CardsComp></CardsComp>
      </section>
      {/* Contact Section */}
      <footer className="site-footer" id="contact">
  <div className="footer-inner container">
    <p className="mb-2">&copy; 2025 Charlotte Nkuna. All Rights Reserved.</p>
    <p className="mb-2">
      Contact me: <a href="mailto:cnkuna920@gmail.com" className="text-light">cnkuna920@gmail.com</a>
    </p>
  </div>
</footer>
      </div>
  );
}

export default App
