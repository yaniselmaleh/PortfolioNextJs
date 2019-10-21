import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_home.scss'
import '../sass/components/_grid.scss'
import '../sass/components/_propos.scss'
import '../sass/components/_portfolio.scss'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Bounce from 'react-reveal/Bounce';

import Portfolio from '../components/Portfolio'

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable'

const Index = () => (
    <section>
      <section id="home">
        <div className="flex-center">
        <Pulse duration={2000}>
          <h1>Yanis Elmaleh Développeur <span>Freelance</span>.</h1>
          </Pulse>
          
          <Tada delay={3000}>
          <p>Disponible</p>
          </Tada>

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
            Si vous souhaitez en savoir plus, n’hésitez pas à me joindre sur Linkedin ou via mon adresse email. 
          </p>

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
          <Bounce left cascade delay={500}>
            <article className="col-2">
              <img src="/react.svg" alt="react"/>
            </article>
          </Bounce>

          <Bounce left cascade delay={1000}>
            <article className="col-2">
              <img src="/symfony.svg" alt="symfony"/>
            </article>
          </Bounce>

            <Bounce left cascade delay={1500}>
              <article className="col-2">
                <img src="/next-js.svg" alt="next-js"/>
              </article>
            </Bounce>

            <Bounce left cascade delay={2000}>
              <article className="col-2">
                <img src="/firebase.svg" alt="firebase"/>
              </article>
            </Bounce>

            <Bounce left cascade delay={2500}>
              <article className="col-2">
                <img src="/wordpress.svg" alt="wordpress"/>
              </article>
            </Bounce>

            <Bounce left cascade delay={3000}>
              <article className="col-2">
                <img src="/prestashop.svg" alt="prestashop"/>
              </article>
            </Bounce>
            
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
