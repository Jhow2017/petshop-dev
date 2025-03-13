//sections
import { HeroSection } from '@ds/components/hero';
import { AboutSection } from '@ds/components/about';
import { ServicesSection } from '@ds/components/services';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </div>
    );
}
