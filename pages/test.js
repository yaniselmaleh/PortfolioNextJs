import '../sass/components/_reset.scss'
import '../sass/components/_menu.scss'

import { elastic as Menu } from 'react-burger-menu'
import React, { Component } from 'react'

class Test extends Component{

    howSettings (event) {
        event.preventDefault();
      }
    

    render(){
        return(
            <Menu right>
                <a id="home" className="menu-item" href="/" title="lorem">Home</a>
                <a id="about" className="menu-item" href="/about" title="lorem">About</a>
                <a id="contact" className="menu-item" href="/contact" title="lorem">Contact</a>
            </Menu>
        )
    }
}

export default Test