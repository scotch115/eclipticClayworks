import './App.css';
import 'primereact/resources/themes/arya-blue/theme.css';
import { Menubar } from 'primereact/menubar';
import { About } from './Pages/About';

const menuItems = [
  {
    label: "Home",
    command: (e) => {
      console.log("Return Home");
    },
  },
  {
    label: "Shop",
    command: (e) => {
      console.log("Open Shop");
    },
  },
  {
    label: "About",
    command: (e) => {
      console.log("Show About Page");
    },
  },
];

const App = () => {
  return (
    <div className="App">
      <Menubar model={menuItems}/>
      <div className="title">We Do Pottery Sometimes</div>
      <p className="mainText">
        Lorem ipsum ur mom asdlfkj asdf alkjsdf alkjasdf lkjgwoiertuq c,mvno xcvklnmzxvoi wert,mnx cvoiqertkjnzdosivuh weijkh vcoiuhwe iucv wenbvoxciuh wexcivuhnweiouh fiuhsd fwijfhaslkjf wepriuh sdlkjnwe9ourh suifh wefiuweh flkjnxcvmnb kjghbvb yuiggyhu sdjknasdv sd s fe roi23h5jn56 kjl1b234 12 4986 hbscv8o7gyb 3h2jnewc dx87tgyhbu jbnw xc67yh vgbnm6 n645 3ertgfcv
      </p>
    </div>
  );
}

export default App; 
