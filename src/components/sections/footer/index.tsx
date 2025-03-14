import Image from 'next/image';
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';

//images
import golden from '@images/golden.png';
import royal from '@images/royal.png';
import primier from '@images/primier.png';
import whiskas from '@images/whiskas.png';
import natural from '@images/natural.png';

const brands = [
    { name: 'Royal Canin', logo: royal },
    { name: 'Golden', logo: golden },
    { name: 'Primier', logo: primier },
    { name: 'Formula Natural', logo: natural },
    { name: 'Whiskas', logo: whiskas },
    { name: 'Golden', logo: golden },
];

export function FooterSection() {
    return (
        <section className="bg-[#E84C3D] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">
                        Marcas que trabalhamos
                    </h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg flex items-center justify-center"
                            >
                                <Image
                                    src={item?.logo}
                                    alt={item?.name}
                                    width={100}
                                    height={50}
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
