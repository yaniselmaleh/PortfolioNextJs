import Fade from 'react-reveal/Fade'
import '../sass/components/_entreprises.scss'


export default function Entreprises() {
    return (
        <section id="entreprises">
            <div className="container">
                <Fade left>
                    <p>- ENTREPRISES -</p>
                    <h2>Ils m’ont fait confiance</h2>
                </Fade>
                
                <section className="flex">
                    <Fade left cascade>
                        <article className="col-2">
                        <img src="/react.svg" alt="react"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={250}>
                        <article className="col-2">
                        <img src="/symfony.svg" alt="symfony"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={500}>
                        <article className="col-2">
                        <img src="/next-js.svg" alt="next-js"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={750}>
                        <article className="col-2">
                        <img src="/firebase.svg" alt="firebase"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={1000}>
                        <article className="col-2">
                        <img src="/wordpress.svg" alt="wordpress"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={1250}>
                        <article className="col-2">
                        <img src="/prestashop.svg" alt="prestashop"/>
                        </article>
                    </Fade>
                </section>
            </div>
      </section>
    );
}