import '../sass/components/_reset.scss'
import '../sass/components/_menu.scss'

import { elastic as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

class MenuBurger extends Component{

    howSettings (event) {
        event.preventDefault();
      }
    

    render(){
        return(
            <Menu right>
                <a className="menu-item" href="/" title="lorem">Accueil</a>
                <a className="menu-item" href="/about" title="lorem">Compétences</a>
                <a className="menu-item" href="/contact" title="lorem">Freelance</a>
                <a className="menu-item" href="/contact" title="lorem">Projets</a>
                <a className="menu-item" href="/contact" title="lorem">Linkedin</a>
                <a className="menu-item" href="/contact" title="lorem">Github</a>
            </Menu>
        )
    }
}

export default MenuBurger