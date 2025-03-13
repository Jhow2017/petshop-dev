'use client';

import Image from 'next/image';
import { Check, MapPin } from 'lucide-react';

//images
import About01 from '@ds/assets/imagens/about-1.png';
import About02 from '@ds/assets/imagens/about-2.png';
import { WhatsappLogo } from '../../ui/whatsapp-logo';

export function AboutSection() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
                            <Image
                                src={About01}
                                alt="Foto do cachorro"
                                quality={100}
                                fill
                                priority
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={About02}
                                alt="Foto do gatinho"
                                quality={100}
                                fill
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>
                            Until one has loved an animal, a part of one's soul
                            remains unawakend. We belive in it and we belive in
                            easy access to thins that are good for our mind,
                            body and spirit. With a clever offering, superb
                            support and a secure checkout you're in good hands
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinarios
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é a nossa prioridade
                            </li>
                        </ul>

                        <div className="flex items-center gap-2">
                            <a
                                href="#"
                                className="
                                bg-[#E84C3D] text-white 
                                flex items-center justify-center w-fit
                                gap-2 px-4 py-2 rounded-md
                            "
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via whatsApp
                            </a>
                            <a
                                href="#"
                                className="                            
                                flex items-center justify-center w-fit
                                gap-2 px-4 py-2 rounded-md
                            "
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Contato via whatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
