import Fade from 'react-reveal/Fade'
import '../sass/components/_work.scss'


export default function Work() {
    return (
        <section id="work">
            <div className="container">
                <Fade left>
                    <p>TRAVAILLON ENSEMBLES</p>
                    <h2>Votre projet en <span>4 étapes</span>.</h2>
                </Fade>
                
                <section className="flex">
                    <section className="col-3">
                        <article>
                            <img src="https://via.placeholder.com/2000" alt=""/>
                        </article>
                        <h3>Problématique</h3>
                    </section>

                    <section className="col-3">
                        <article>
                            <img src="https://via.placeholder.com/2000" alt=""/>
                        </article>
                        <h3>Solutions</h3>
                    </section>

                    <section className="col-3">
                        <article>
                            <img src="https://via.placeholder.com/2000" alt=""/>
                        </article>
                        <h3>Conception</h3>
                    </section>

                    <section className="col-3">
                        <article>
                            <img src="https://via.placeholder.com/2000" alt=""/>
                        </article>
                        <h3>Développement</h3>
                    </section>
                </section>
            </div>
      </section>
    );
}