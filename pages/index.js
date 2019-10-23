import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_home.scss'
import '../sass/components/_grid.scss'
import '../sass/components/_mouse.scss'
import '../sass/components/_portfolio.scss'

import Competences from '../components/Competences'
import Work from '../components/Work'
import Entreprise from '../components/Entreprises'
import Hackathon from '../components/Hackathon'
import Portfolio from '../components/Portfolio'

import Pulse from 'react-reveal/Pulse'
import Jump from 'react-reveal/Jump'

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
          <div className="mouse"></div>
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

      <Competences/>
      <Work/>
      <Entreprise/>
      <Portfolio/>
      <Hackathon/>

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
