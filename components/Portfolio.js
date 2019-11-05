import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import '../sass/components/_portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio">

                    <p>- UX/UI - DEV - PWA -</p>
                    <h2>Derniers projets</h2>

                    <div id="contain">
            <StackGrid
                columnWidth={250}
                gutterWidth={15}
                gutterHeight={15}
                itemComponent="section"
            >

                    <article key="key1">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Yunt" target="_blank">
                            <img src="https://via.placeholder.com/500x1000.png?text=Yunt" alt="Yunt"/>
                        </a>
                    </article>

                    <article key="key2">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="WaveRadio" target="_blank">
                            <img src="https://via.placeholder.com/500x500.png?text=WaveRadio" alt="WaveRadio"/>
                        </a>
                    </article>

                    <article key="key3">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Baskerville" target="_blank">
                            <img src="https://via.placeholder.com/500x1000.png?text=Baskerville" alt="Baskerville"/>
                        </a>
                    </article>

                    <article key="key4">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Warner France" target="_blank">
                            <img src="https://via.placeholder.com/500x500.png?text=Warner+France" alt="Warner France"/>
                        </a>
                    </article>

                    <article key="key5">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Marvel" target="_blank">
                            <img src="https://via.placeholder.com/500x1000.png?text=Marvel" alt="Marvel"/>
                        </a>
                    </article>

                    <article key="key6">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Géode" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Geode" alt="Géode"/>
                        </a>
                    </article>

                    <article key="key7">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Jetetienaucourant" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Jetetienaucourant" alt="Jetetienaucourant"/>
                        </a>
                    </article>

                    <article key="key8">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Accor hotel" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=AccorHotel" alt="Accor Hotel"/>
                        </a>
                    </article>

                    <article key="key9">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Bzity" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Bzity" alt="Bzity"/>
                        </a>
                    </article>

                    <article key="key10">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Alternatiba" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Alternatiba" alt="Alternatiba"/>
                        </a>
                    </article>

                    <article key="key11">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Anglais" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Anglais" alt="Anglais"/>
                        </a>
                    </article>

                    <article key="key12">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Cap-Lab" target="_blank">
                            <img src="https://via.placeholder.com/500x800.png?text=Cap-Lab" alt="Cap-Lab"/>
                        </a>
                    </article>

                    <article key="key13">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Harrasment Analytic" target="_blank">
                            <img src="https://via.placeholder.com/500x500.png?text=Harrasment+Analytic" alt="Harrasment Analytic"/>
                        </a>
                    </article>

                    <article key="key14">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Elveo" target="_blank">
                            <img src="https://via.placeholder.com/500x500.png?text=Elveo" alt="Elveo"/>
                        </a>
                    </article>

                    <article key="key15">
                        <a href="https://linkedin.com/in/yaniselmaleh" title="Elveo" target="_blank">
                            <img src="https://via.placeholder.com/500x500.png?text=Elveo" alt="Elveo"/>
                        </a>
                    </article>

                    {/* <a href="YanisElmaleh-CV.pdf" download title="linkedin yanis elmaleh" target="_blank">Télécharger mon CV !</a> */}
            </StackGrid>
                </div>
        </section>
);
  }
}

export default Portfolio;