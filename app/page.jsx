// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Servicesnew from '@/components/ServicesNEW';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Servicesnew />
      <Reviews />
      <Cta />
    </main>
  );
}
