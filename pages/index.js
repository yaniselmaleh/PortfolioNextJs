import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_home.scss'
import '../sass/components/_grid.scss'
import '../sass/components/_propos.scss'

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable'

const Index = () => (
    <section>
      <section id="home">
        <div className="flex-center">
          <h1>Yanis Elmaleh Développeur <span>Freelance</span>.</h1>
          <p>Disponible</p>

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
          <h2>À Propos, aujourd’hui étudiant passionné<br></br> mais également <span>Freelance</span>.</h2>
          <p>Je projette de continuer dans le domaine du numérique et d’approfondir mes connaissances techniques tout en restant connecté avec l’évolution et les tendances technologiques.</p>

          <section className="flex">
            <article className="col-3">lorem</article>
            <article className="col-3">lorem</article>
            <article className="col-3">lorem</article>
            <article className="col-3">lorem</article>
          </section>
        </div>
      </section>

      

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
