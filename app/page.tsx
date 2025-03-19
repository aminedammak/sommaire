import CTASection from '@/components/home/CTA-section';
import DemoSection from '@/components/home/demo-section';
import HeroSection from '@/components/home/hero-section';
import HowItWorksSection from '@/components/home/how-it-works-section';
import PricingSection from '@/components/home/pricing-section';

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
      </div>
      <CTASection />
    </div>
  );
}
