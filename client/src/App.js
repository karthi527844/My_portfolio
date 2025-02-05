import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkEx from "./pages/WorkEx/WorkEx";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkEx />
        <Contact />
      </div>
      <div className="footer mb-3">
        <h4>Made with 👉 @karthi527844 &copy; 2025</h4>
      </div>
    </>
  );
}

export default App;
