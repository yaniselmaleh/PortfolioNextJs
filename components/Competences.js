import Fade from 'react-reveal/Fade'
import '../sass/components/_competences.scss'


export default function Test() {
    return (
        <section id="competences">
            <div className="container">
                <Fade left>
                    <p>- EXPERTISE -</p>
                    <h2>Compétences</h2>
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
                <a href="YanisElmaleh-CV.pdf" download title="linkedin yanis elmaleh" target="_blank">Télécharger mon CV !</a>
            </div>
      </section>
    );
}