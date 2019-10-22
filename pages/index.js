import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_home.scss'
import '../sass/components/_grid.scss'
import '../sass/components/_propos.scss'
import '../sass/components/_mouse.scss'
import '../sass/components/_portfolio.scss'

import Pulse from 'react-reveal/Pulse'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
// import {Spring} from 'react-spring/renderprops'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'core-js/stable'

const Index = () => (
    <section>
      <section id="home">
        <div className="flex-center">
        <Pulse duration={2000}>
          <h1>Yanis Elmaleh Développeur <span>Freelance</span>.</h1>
          </Pulse>
          
          <p>Disponible</p>

          <Jump duration={1000}>
          <div class="mouse"></div>
            {/* <span id="bar"></span> */}
          </Jump>

          <div>
            <a href="https://linkedin.com/in/yaniselmaleh" title="linkedin yanis elmaleh" target="_blank" className="flex-rs1">
              <img src="/linkedin.svg" alt="linkedin yanis elmaleh"/>
            </a>

            <a href="https://github.com/yaniselmaleh" title="github yanis elmaleh" target="_blank" className="flex-rs2">
              <img src="/github.svg" alt="github yanis elmaleh"/>
            </a>
          </div>
          <div className="flex under">
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
            <div className="gutter"></div>
          </div>
        </div>
      </section>

      <section id="propos">
        <div className="container">
          <Fade left>
          <h2>Plus qu'un métier, une <span>passion</span>.</h2>

          </Fade>
          <p>Je projette de continuer dans le domaine du numérique et d’approfondir mes connaissances techniques tout en restant connecté avec l’évolution et les tendances technologiques.
            <br/><br/>
            Si vous souhaitez en savoir plus, n’hésitez pas à me joindre sur Linkedin. 
          </p>

          

          {/* <div id="test"></div> */}
          
          <div className="flex under2">
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
            <div className="gutter2"></div>
          </div>

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

      {/* <section id="portfolio">
          <Portfolio/>
      </section> */}
      

    </section>
  );
  
  export default Index;

































// ---

// This is the Link API


// import Header from '../components/Header';

// export default function Index() {
//   return (
//     <div>
//       <Header />
//       <p>Hello Next.js</p>
//     </div>
//   );
// }

// ---

// import Layout from '../components/MyLayout';

// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   );
// }




// import withLayout from '../components/MyLayout';

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);


// import Layout from '../components/MyLayout';
// import Link from 'next/link';

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }
