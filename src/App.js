import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import "./styles.css";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <div className="scroll-section">
        <Hero />
      </div>
      <div className="scroll-section">
        <Header content={"Projects"} />
        <Projects />
      </div>
      <div className="scroll-section">
        <Header content={"About"} />
        <About />
      </div>
    </div>
  );
}

export default App;
