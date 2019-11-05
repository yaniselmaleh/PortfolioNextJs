import Fade from 'react-reveal/Fade'
import '../sass/components/_line.scss'
import '../sass/components/_entreprises.scss'
// import Testloader from './loader/Testloader'


export default function Hackathon() {
    return (
        <section id="hackathon">
            <div className="line-top"></div>
            <div className="container">
                <Fade left>
                    <p>- CHALLENGES -</p>
                    <h2>Hackathon</h2>
                </Fade>
                
                <section className="flex">
                    <Fade left cascade>
                        <article className="col-3">
                        {/* <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank"> */}
                            <img src="/accor.svg" alt="accor"/>
                        {/* </a> */}

                        </article>
                    </Fade>

                    <Fade left cascade delay={250}>
                        <article className="col-3">
                            <img src="/warner.svg" alt="warner"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={500}>
                        <article className="col-3">
                            <img src="/resoneo.svg" alt="resoneo"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={750}>
                        <article className="col-3">
                            <img src="/grt-gaz.svg" alt="grt-gaz"/>
                        </article>
                    </Fade>

                    {/* <Fade left cascade delay={1000}>
                        <article className="col-3">
                        <img src="/wordpress.svg" alt="wordpress"/>
                        </article>
                    </Fade>

                    <Fade left cascade delay={1250}>
                        <article className="col-3">
                        <img src="/prestashop.svg" alt="prestashop"/>
                        </article>
                    </Fade> */}
                </section>

                {/* <Testloader/> */}
            </div>
            <div className="line-bot"></div>
      </section>
    );
}