import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-smartmed-50">
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}