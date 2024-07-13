import React from 'react';
import Link from 'next/link';
import withAuth from '../components/withAuth';


const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link href="/">
        Home
      </Link>
    </div>
  );
};

export default withAuth(AboutPage);
