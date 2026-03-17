import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
