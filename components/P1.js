import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_grid.scss'
import '../sass/components/_projettest.scss'
import '../sass/components/_font.scss'
import MenuBurger from '../components/MenuBurger'


export default function P1() {
    return (
      <>
      <React.Fragment>
        <MenuBurger/>
      </React.Fragment>

      <section id="projettest">
            <article>
                <p>UX/UI - DEV - PWA</p>
                <h2>Projet Accor Hotel</h2>
                <hr/>

                <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent congue arcu viverra quam ullamcorper fringilla. 
                <br/>
                <br/>

                Proin ac massa ultricies, venenatis lectus sed, vestibulum 
                sem. 
                Sed ultrices egestas suscipit. Integer mollis ante in dapibus 
                pharetra nullam at congue dolor, non vestibulum diam. </p>

                <a href="toto" title="Accueil">En savoir plus ?</a>

            </article>

            <aside>
                <img src="/accortest.png" alt="Accor"/>
            </aside>
      </section>

        <div>
            <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank" className="flex-rs1"  style={{backgroundColor:"red"}}>
              <img src="/linkedin.svg" alt="linkedin yanis elmaleh"/>
            </a>

            <a href="https://github.com/yaniselmaleh" title="github yanis elmaleh" target="_blank" className="flex-rs2"  style={{backgroundColor:"red"}}>
              <img src="/github.svg" alt="github yanis elmaleh"/>
            </a>
          </div>

      </>
    );
  }