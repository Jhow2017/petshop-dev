import useEmblaCarousel from 'embla-carousel-react';

interface CarouselOptions {
    loop?: boolean;
    align?: 'start' | 'center' | 'end';
    slidesToScroll?: number;
    breakpoints?: {
        [key: string]: {
            slidesToScroll?: number;
        };
    };
}

export function useCarousel(options?: CarouselOptions) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        ...options,
    });

    const scrollPrev = () => {
        emblaApi?.scrollPrev();
    };

    const scrollNext = () => {
        emblaApi?.scrollNext();
    };

    return {
        emblaRef,
        emblaApi,
        scrollPrev,
        scrollNext,
    };
} 