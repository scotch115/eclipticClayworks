import React from 'react';
import '../App.css';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router';
import logo from '../Images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      className: "font",
      command: () => {
        navigate('/');
      },
    },
    {
      label: "About",
      className: "font",
      command: () => {
        navigate('/about');
      },
    },
    {
      label: "Shop",
      className: "font",
      command: () => {
        window.location.href = 'https://ecliptic-clayworks.square.site'
      },
    },
    {
      label: "Socials",
      className: "font",
      command: () => {
        window.location.href = "https://linktree.com/eclipticclayworks"
      },
    },
  ];

  const start = () => (
    <a href="/"><img src={logo} width={100} /></a>
  );

  return (
    <Menubar className="navbar" start={start} model={menuItems}/>
  );
}

export default Navbar;