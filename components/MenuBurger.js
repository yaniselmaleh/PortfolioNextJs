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
                <a className="menu-item" href="/" title="lorem">Home</a>
                <a className="menu-item" href="/about" title="lorem">About</a>
                <a className="menu-item" href="/contact" title="lorem">Contact</a>
            </Menu>
        )
    }
}

export default MenuBurger