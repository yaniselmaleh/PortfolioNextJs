import React, { Component } from 'react'
import '../sass/components/_reset.scss'

import { ParallaxProvider } from 'react-scroll-parallax';
import Test2 from "../components/Test2"
class Test extends Component{
    

    render(){
        return(
            <ParallaxProvider>
                <Test2/>
            </ParallaxProvider>
        )
    }
}

export default Test