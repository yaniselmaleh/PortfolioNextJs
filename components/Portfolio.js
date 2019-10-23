import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import '../sass/components/_portfolio.scss';


class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio">

                    <p>UX/UI - DEV - PWA</p>
                    <h2>Derniers projets</h2>

                    <div id="contain">
            <StackGrid
            columnWidth={300}
            gutterWidth={25}
            gutterHeight={25}
            itemComponent="section"
            >

                    <article key="key1">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/500x1000" alt="yunt"/>
                        </a>
                    </article>

                    <article key="key2">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="WaveRadio"/>
                        </a>
                    </article>

                    <article key="key3">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/500x800" alt="Baskerville"/>
                        </a>
                    </article>

                    <article key="key4">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="Warner France"/>
                        </a>
                    </article>

                    <article key="key5">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/500x1000" alt="Warner France"/>
                        </a>
                    </article>

                    <article key="key6">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="Marvel"/>
                        </a>
                    </article>

                    <article key="key7">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/500x800" alt="Géode"/>
                        </a>
                    </article>

                    <article key="key8">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="Jetetienaucourant"/>
                        </a>
                    </article>

                    <article key="key9">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="Accor Hotel"/>
                        </a>
                    </article>

                    <article key="key10">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="Bzity"/>
                        </a>
                    </article>

                    <article key="key11">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/500x500" alt="yunt"/>
                        </a>
                    </article>

                    <article key="key12">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank">
                            <img src="https://via.placeholder.com/1000" alt="WaveRadio"/>
                        </a>
                    </article>
            </StackGrid>

            <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank" id="cta">En savoir plus ?</a>

                </div>
        </section>
);
  }
}

export default Portfolio;