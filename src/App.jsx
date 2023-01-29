
import { BrowserRouter as Router, Routes, Route, Await } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import WorkExperience from './Components/WorkExperience';
import AwardsAndCertificates from './Components/AwardsAndCertificates';
import ContactMe from './Components/Contact';
import Footer from './Components/Footer';
import "./scss/index.scss";


const App = () => {



  return (
    <Router>
      <Header />
      <Container >
        <main>
          <Landing />
          <Experience />
          <Project />
          <WorkExperience />
          <AwardsAndCertificates />
          <ContactMe />
        </main>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
