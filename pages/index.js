import '../sass/components/_reset.scss'
import '../sass/components/_font.scss'
import '../sass/components/_home.scss'
import '../sass/components/_grid.scss'

const Index = () => (
    <section id="home">
      <div className="flex-center">
        <h1>Yanis Elmaleh Développeur <span>Freelance</span>.</h1>
        <p>Disponible</p>

        <div className="flex under">
          <div className="gutter"></div>
          <div className="gutter"></div>
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
