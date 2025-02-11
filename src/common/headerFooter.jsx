import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";

export function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><Link to="/">Inicio</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link to="/downloads">Descargas</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}
export function Footer(){
  return(
    <footer>
      <div className="menu-foot">
        <p>All of this content is under CC-BY-SA license</p>
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">
          <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt=""></img>
        </a>
        
      </div>
    </footer>
  );

}

