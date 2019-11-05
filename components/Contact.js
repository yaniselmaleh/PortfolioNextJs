import React, { Component } from "react";
import Pulse from 'react-reveal/Pulse'
import '../sass/components/_contact.scss'


export default function Contact() {
    return (

        <section id="contact">
        <div className="flex-center">
          <Pulse duration={2000}>
            <h2>contact@yaniselmaleh.fr</h2>
          </Pulse>
  
          <p>Contacts</p>

          <div>
            <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank" className="flex-rs1">
              <img src="/linkedin.svg" alt="linkedin yanis elmaleh"/>
            </a>

            <a href="https://github.com/yaniselmaleh" title="github yanis elmaleh" target="_blank" className="flex-rs2">
              <img src="/github.svg" alt="github yanis elmaleh"/>
            </a>
          </div>
          
          <div className="flex under">
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
          </div>
        </div>
      </section>

);
}