import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <div className="">
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Slavi, a full-stack developer living in beautiful Bulgaria.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
