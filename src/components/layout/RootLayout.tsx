import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
