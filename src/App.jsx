import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Certifications from "./pages/Certifications";
import SocialLinks from "./components/SocialLinks";
import EcommerceAssistant from "./pages/projects/EcommerceAssistant";
import HealthcareBot from "./pages/projects/HealthcareBot";
import FinancialAdvisorBot from "./pages/projects/FinancialAdvisorBot";

function MainLayout() {
  return (
    <Box as="main">
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box minH="100vh">
        <Navbar />
        <Routes>
          <Route path="/rabin-portfolio" element={<MainLayout />} />
          <Route
            path="/rabin-portfolio/projects/ecommerce-assistant"
            element={<EcommerceAssistant />}
          />
          <Route
            path="/rabin-portfolio/projects/healthcare-bot"
            element={<HealthcareBot />}
          />
          <Route
            path="/rabin-portfolio/projects/financial-advisor-bot"
            element={<FinancialAdvisorBot />}
          />
        </Routes>
        <SocialLinks variant="default" />
        <SocialLinks variant="footer" />
      </Box>
    </Router>
  );
}

export default App;
