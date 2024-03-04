// import Background from "./Background/Ball.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import Title from "./Title/Title.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from './Skills/Skills.jsx';
// import Education from './Education/Education.jsx'
// import Contacts from './Contacts/Contacts.jsx'

function App() {
  return (
    <>
      {/* <Background /> */}
      <Header />
      <About />
      <Title sectionName="Solo-Projects:" />
      <Projects
        image="https://placehold.jp/250x250.png"
        name="Shop Tracker"
        summary="a small summary of the STS application"
      />
      <Projects
        image="https://placehold.jp/250x250.png"
        name="Research Assistant"
        summary="a small summary of the Machine Learning Research"
      />
      <Title sectionName="Class-Projects:" />
      <Projects
        image="https://placehold.jp/250x250.png"
        name="CLI Vending Machine"
        summary="a small summary of the Vending Machine Project"
      />
      <Projects
        image="https://placehold.jp/250x250.png"
        name="Capstone Project"
        summary="Summary of Capstone Group Project"
      />
      <Title sectionName="Skills:" />
      <Skills/>
      <Title sectionName="Education:" />
      {/* <Education/> */}
      <Title sectionName="Contacts:" />
      {/* <Contacts/> */}
      <Footer />
    </>
  );
}

export default App;
