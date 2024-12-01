import 'primereact/resources/themes/arya-blue/theme.css';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import sellersPhoto from '../Images/sellersPhoto.jpg';


const About = () => {
  return (
    <div>
      <div className="App font" >
        <Navbar />
        <h1>About Us</h1>
        <p>Ceramic-obsessed friends who moved from East to West coast.</p>
        <img className="aboutImg" src={sellersPhoto} />
      </div>
      <Footer />
    </div>
  );
}


export default About;