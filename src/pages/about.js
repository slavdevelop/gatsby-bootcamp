import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <p>I currently do everything what I want.</p>
    <p>
      <Link to="/contact">Want to work with me?</Link>
    </p>
  </Layout>
);

export default AboutPage;
