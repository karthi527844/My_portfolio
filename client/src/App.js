import Layout from "./components/Layout/Layout";
import { useTheme } from "./Context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkEx from "./pages/WorkEx/WorkEx";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkEx />
          <Contact />
        </div>
        <div className="footer mt-5 mb-3 pb-3 ms-3">
          <h3 className="text-center">
            <Tada>
              Made with 👉 @karthi527844 &copy; 2025
            </Tada>
          </h3>
        </div>
      </div>
      <ScrollToTop smooth color="#fff" style={{ backgroundColor: "#000", borderRadius: "50%" }} />
    </>
  );
}

export default App;
