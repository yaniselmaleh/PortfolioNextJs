import Fade from 'react-reveal/Fade'
import '../sass/components/_entreprises.scss'


export default function Entreprises() {
    return (
        <section id="entreprises">
            <div className="container">
                <Fade left>
                    <p>- ENTREPRISES -</p>
                    <h2>Ils m’ont fait <span>confiance</span>.</h2>
                </Fade>
                
                <section className="flex">

                    <Fade left cascade>
                        <article className="col-2">
                            <img src="Ministere-des-armees.png" alt=""/>
                        </article>
                    </Fade>

                    <Fade left cascade>
                        <article className="col-2">
                        <img src="/meltdown.png" alt="react"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={250}>
                        <article className="col-2">
                        <img src="/warren-walter.svg" alt="symfony"/>
                        </article>
                    </Fade>

                    {/* <Fade left cascade delay={500}>
                        <article className="col-2">
                            <img src="/AFM-TELETHON.png" alt=""/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={750}>
                        <article className="col-2">
                            <img src="c17.png" alt=""/>
                        </article>
                    </Fade> */}

                    <Fade left cascade delay={1000}>
                        <article className="col-2">
                            <img src="cap-lab.png" alt=""/>
                        </article>
                    </Fade>

                    
                </section>
            </div>
      </section>
    );
}