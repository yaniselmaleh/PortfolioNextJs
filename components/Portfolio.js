import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import '../sass/components/_reset.scss';

class Portfolio extends Component {
  render() {
    return (
        <section>

        <StackGrid
        columnWidth={350}
        gutterWidth={20}
        gutterHeight={20}
        itemComponent="section"
      >
        <article key="key1">
            {/* <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank" className="flex-rs1"> */}
                <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="yunt"/>
            {/* </a> */}
        </article>

        <article key="key2">
            <img src="http://yaniselmaleh.fr/img/webradio.png" alt="WaveRadio"/>
        </article>

        <article key="key3">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Baskerville"/>
        </article>

        <article key="key4">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Warner France"/>
        </article>

        <article key="key5">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Warner France"/>
        </article>

        <article key="key6">
            <img src="http://yaniselmaleh.fr/img/marvel.png" alt="Marvel"/>
        </article>

        <article key="key7">
            <img src="http://yaniselmaleh.fr/img/geode.png" alt="Géode"/>
        </article>

        <article key="key8">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Jetetienaucourant"/>
        </article>

        <article key="key9">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Accor Hotel"/>
        </article>

        <article key="key10">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Bzity"/>
        </article>

        <article key="key11">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Maison Jaune"/>
        </article>

        <article key="key12">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Maison Jaune"/>
        </article>

        <article key="key13">
            <img src="http://yaniselmaleh.fr/img/alternatiba.png" alt="Alternatiba"/>
        </article>

        <article key="key14">
            <img src="http://yaniselmaleh.fr/img/baskerville.png" alt="Anglais"/>
        </article>

        <article key="key15">
            <img src="http://yaniselmaleh.fr/img/cap-lab.png" alt="Cap-Lab"/>
        </article>

        <article key="key16">
            <img src="" alt="Harrasment Analytic"/>
        </article>

        <article key="key17">
            <img src="" alt="Elveo"/>
        </article>

      </StackGrid>
    
        </section>
);
  }
}

export default Portfolio;