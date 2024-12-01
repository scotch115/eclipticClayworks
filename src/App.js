import './App.css';
import 'primereact/resources/themes/arya-blue/theme.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import wheel from './Images/wheel.jpg';
import raku from './Images/raku.JPG';
import lavender from './Images/lavender.JPG';
import matchStriker from './Images/matchStriker.JPG';

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="title">Ecliptic Clayworks</div>
        <p className="mainText font">
          Seattle-based pottery studio 
          <br />
          <br />
          <div style={{ display: 'block', justifyContent: 'space-evenly', width: '80vw'}} >
            <img src={wheel} alt="wheel" />
            <img src={raku} alt="wheel" />
            <img src={lavender} alt="wheel" />
            <img src={matchStriker} alt="wheel" />
          </div>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App; 
