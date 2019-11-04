import React, { Component } from 'react'
class Test2 extends Component{

    constructor(props) {
        super(props);
        this.state = { isLoad: true };
    }
    
      render() {
        if (this.state.isLoad == false) {
          return <h1>Hello World</h1>;
        }

        return <p>{this.state.isLoad ? 'Masquer' : 'Afficher'}</p>
      }
    }

export default Test2;