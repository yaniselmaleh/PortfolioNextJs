import '../sass/components/_reset.scss'
import '../sass/components/_menu.scss'
import { Link, animateScroll as scroll } from "react-scroll";

import { elastic as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

class MenuBurger extends Component{

    howSettings (event) {
        event.preventDefault();
      }

    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    

    render(){
        return(
            <Menu right>
                <Link className="menu-item" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration= {1500} title="Accueil">Accueil</Link>
                <Link className="menu-item" activeClass="active" to="competences" spy={true} smooth={true} offset={-70} duration= {1500} title="Compétences">Compétences</Link>
                <Link className="menu-item" activeClass="active" to="competences" spy={true} smooth={true} offset={-70} duration= {1500} title="Freelance">Freelance</Link>
                <Link className="menu-item" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration= {1500} title="Projet">Projet</Link>
                <Link className="menu-item" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration= {1500} title="Linkedin">Linkedin</Link>
                <Link className="menu-item" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration= {1500} title="Github">Github</Link>
            </Menu>
        )
    }
}

export default MenuBurger