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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU-S2yjzNmmSVXwgMXnljBmTeaOwyfFur-w&s"
        alt="Avatar"
        className="rounded-circle"
        width="125"
        height="130"
      /> 
        <h1>Hello, I’m Charlotte 👋</h1>
        <p>Aspiring Developer | Designer | Creator</p>
        <br></br>
        <a href="#projects" className="btn">View My Work</a>
      </section>
      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I’m a beginner React developer learning to build awesome apps with modern tools.
        </p>
      </section>
      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Frameworks</h2>
          <CardsComp></CardsComp>
      </section>
      {/* Contact Section */}
      <footer className="site-footer bg-dark text-light text-center py-3 mt-5" id="contact">
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
