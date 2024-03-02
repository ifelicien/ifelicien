import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import Title from "./Title/Title.jsx";
import Projects from "./Projects/Projects.jsx";
// import Skills from './Footer/Skills.jsx'
// import Education from './Footer/Education.jsx'
// import Contacts from './Footer/Contacts.jsx'

function App() {
  return (
    <>
      <Header />
      <About />
      <Title sectionName="Solo-Projects" />
      <Projects
        image="https://placehold.jp/200x200.png"
        name="Shop Tracker"
        summary="a small summary of the STS application"
      />
      <Projects
        image="https://placehold.jp/200x200.png"
        name="Research Assistant"
        summary="a small summary of the Machine Learning Research"
      />
      <Title sectionName="Class-Projects" />
      {/* <Skills/> */}
      {/* <Education/> */}
      {/* <Contacts/> */}
      <Footer />
    </>
  );
}

export default App;
