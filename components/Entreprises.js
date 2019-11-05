import Fade from 'react-reveal/Fade'
import '../sass/components/_line.scss'
import '../sass/components/_entreprises.scss'


export default function Entreprises() {
    return (
        <section id="entreprises">
            <div className="container">
                <Fade top>
                    <p>- ENTREPRISES -</p>
                    <h2>Ils m’ont fait <span>confiance</span>.</h2>
                </Fade>
                
                <section className="flex">  
                    <p>lorem</p>
                </section>
            </div>
            <div className="line-bot"></div>
      </section>
    );
}