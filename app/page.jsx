import HeroSection from './hero/HeroSection';
import BottleMotion from "@/components/BottleMotion"
import Footer from './hero/Footer';
import Backimg from './hero/Backimg';
export default function HomePage() {
  return (
    <>
      <BottleMotion />
      <HeroSection />
      <Backimg/>
      <Footer/>
    </>
  );
}
