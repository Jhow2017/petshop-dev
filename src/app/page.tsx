//sections
import {
    HeroSection,
    AboutSection,
    FooterSection,
    ServicesSection,
    TestimonialsSection,
} from '@ds/components/sections';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <FooterSection />
        </div>
    );
}
