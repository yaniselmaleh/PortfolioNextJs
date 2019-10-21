// import Header from '../components/Header';

// export default function About() {
//     return (
//       <div>
//         <Header />
//         <p>This is the about page</p>
//       </div>
//     );
//   }
  

// pages/about.js
// ---
// import Layout from '../components/MyLayout';

// export default function About() {
//   return (
//     <Layout>
//       <p>This is the about page</p>
//     </Layout>
//   );
// }

// ---

// pages/about.js

import withLayout from '../components/MyLayout';

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);
