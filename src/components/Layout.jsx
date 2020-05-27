import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="app">
    {children}
    <Footer />
  </div>
);

export default Layout;