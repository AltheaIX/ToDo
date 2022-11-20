import Navbar from './Home/Navbar';
import { Hero } from './Home/Hero';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Sora:wght@600&family=Source+Sans+Pro:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="bg-hero h-[680px]">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </HelmetProvider>
  );
}
