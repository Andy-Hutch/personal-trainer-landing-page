import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials'; // Fixed typo here
import Pricing from '../../components/Pricing';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials /> {/* Add the Testimonials section here */}
      <Pricing />
    </div>
  );
}


