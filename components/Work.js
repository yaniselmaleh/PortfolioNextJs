import '../sass/components/_work.scss'
import '../sass/components/_line.scss'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';


export default function Work() {
    return (
        <section id="work">
            <Roll top cascade>
        <div className="line-top"></div>
            </Roll>
            <div className="container">
                <Fade top delay={500}>
                    <p>- TRAVAILLON ENSEMBLES -</p>
                    <h2>Votre projet en <span>4 étapes</span>.</h2>
                </Fade>
                
                <section className="flex">
                    
                    <section className="col-3">
                        <Slide top delay={100}>
                            <article>
                                <img src="https://via.placeholder.com/2000" alt=""/>
                            </article>
                            <h3>Problématique</h3>
                        </Slide>
                    </section>

                    <section className="col-3">
                        <Slide top delay={200}>
                            <article>
                                <img src="https://via.placeholder.com/2000" alt=""/>
                            </article>
                            <h3>Solutions</h3>
                        </Slide>
                    </section>

                    <section className="col-3">
                        <Slide top delay={300}>
                            <article>
                                <img src="https://via.placeholder.com/2000" alt=""/>
                            </article>
                            <h3>Conception</h3>
                        </Slide>
                    </section>

                    <section className="col-3">
                        <Slide top delay={400}>
                            <article>
                                <img src="https://via.placeholder.com/2000" alt=""/>
                            </article>
                            <h3>Développement</h3>
                        </Slide>
                    </section>
                </section>
            </div>
            <div className="line-bot"></div>
      </section>
    );
}