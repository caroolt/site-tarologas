import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import defaultLogo from '../assets/logo.svg';
import defaultStar from '../assets/star.svg';
import type { ReactNode } from 'react';

type Testimonial = {
  title: string;
  text: string;
  tenure: string;
};

type TestimonialsProps = {
  id?: string;
  heading?: ReactNode;
  bgLogoSrc?: string;
  starSrc?: string;
  cards?: Testimonial[];
  speedSeconds?: number;
  heightClassName?: string;
  fadeColor?: string;
  containerClassName?: string;
};

const defaultCards: Testimonial[] = [
  {
    title: 'Marina Alves - Tarot de Marselha',
    text:
      'Depois de anos atendendo apenas por indicação, finalmente encontrei uma forma de alcançar pessoas que realmente valorizam meu trabalho. Em 3 meses, triplicou minha agenda e ainda mantenho minha liberdade total de horários. A plataforma entende que somos profissionais sérias.',
    tenure: '8 meses na plataforma',
  },
  {
    title: 'Carla Santos - Oráculo Cigano',
    text:
      'O que mais me impressiona é a qualidade dos consulentes. Não são pessoas curiosas ou céticas - são pessoas que chegam abertas e respeitosas. Isso faz toda diferença na qualidade das leituras. E receber 70% sem burocracias mudou minha vida financeira.',
    tenure: '1 ano e 2 meses na plataforma',
  },
  {
    title: 'Marcos Ferreira - Runas',
    text:
      'Estudei 20 anos antes de começar a atender. Aqui encontro consulentes que respeitam esse conhecimento e estão dispostos a pagar pelo que vale. É revigorante trabalhar com quem leva a prática a sério.',
    tenure: '6 meses na plataforma',
  },
];

const Testimonials = ({
  id = 'other-tarologists',
  heading = (
    <>O que outros tarólogos <br /> estão dizendo</>
  ),
  bgLogoSrc = defaultLogo,
  starSrc = defaultStar,
  cards = defaultCards,
  speedSeconds = 25,
  heightClassName = 'md:h-[100vh]',
  fadeColor = '#f3f3f3',
  containerClassName = '',
}: TestimonialsProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Only run marquee animation on desktop (md: >= 768px)
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) return;
    
    let tween: gsap.core.Tween | null = null;
    
    const startTween = () => {
      tween = gsap.to(el, {
        xPercent: -50,
        duration: speedSeconds,
        ease: 'none',
        repeat: -1,
      });
    };

    const pauseTween = () => {
      tween?.pause();
    };

    const resumeTween = () => {
      tween?.resume();
    };

    startTween();

    // Add hover event listeners
    el.addEventListener('mouseenter', pauseTween);
    el.addEventListener('mouseleave', resumeTween);

    return () => { 
      el.removeEventListener('mouseenter', pauseTween);
      el.removeEventListener('mouseleave', resumeTween);
      tween?.kill(); 
    };
  }, [speedSeconds]);

  const renderCard = (t: Testimonial, key?: string | number) => (
    <div key={key} className="bg-white-100 border-1 rounded-[16px] shadow-[7px_8px_0px_0px_#3C0008] flex-none w-[85vw] sm:w-[26rem] lg:w-[34.75rem] h-[22rem] snap-start">
      <div className="flex flex-col justify-between h-full p-6 md:p-11 gap-4">
       <div className="flex flex-col gap-6">
        <p className="font-blackmango text-black-100 text-xl leading-none">{t.title}</p>
          <p className="font-worksans text-black-100 text-base md:text-[16px] lg:max-w-[556px]">
            {t.text}
          </p>
       </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1 shrink-0" aria-label="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} alt="estrela" className="w-4 h-4" src={starSrc} />
            ))}
          </div>
          <div className="sm:border-l sm:border-[#3c0008] sm:pl-2">
            <p className="font-worksans text-black-100 text-sm sm:text-base">{t.tenure}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileCards = cards.slice(0, 5);

  return (
    <section id={id} className={`relative w-[100vw] ${heightClassName} overflow-hidden border-b-3 border-black-100 bg-[#f3f3f3] ${containerClassName}`} data-name="DEPOIMENTOS" data-node-id="125:6">
      <div className="relative py-20">
        {/* Decorative right image (desktop) */}
        <div className="hidden xl:flex absolute -left-96 top-20 opacity-10 w-[80vw] h-[80vh] items-center justify-center pointer-events-none">
          <img alt="Logo" className="block w-full h-full object-contain" src={bgLogoSrc} />
        </div>

        <h2 className=" px-10 font-blackmango text-black-100 text-4xl font-bold md:text-5xl lg:text-6xl leading-none tracking-tight" data-node-id="125:8">
          {heading}
        </h2>

        {/* Mobile: static vertical list (no animation), up to 5 cards */}
        <div className="mt-10 px-6 flex flex-col gap-4 md:hidden">
          {mobileCards.map((t, i) => (
            <div key={`m-${i}`} className="w-full">
              {renderCard(t, `m-${i}`)}
            </div>
          ))}
        </div>

        {/* Desktop: marquee horizontal loop */}
        <div className="hidden md:block mt-20 w-full relative overflow-hidden min-h-[50vh]">
          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r to-transparent z-10" style={{ backgroundImage: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l to-transparent z-10" style={{ backgroundImage: `linear-gradient(to left, ${fadeColor}, transparent)` }} />
          <div ref={trackRef as any} className="flex flex-row flex-nowrap gap-4 sm:gap-6 lg:gap-8 xl:gap-20 will-change-transform" style={{ width: 'max-content' }}>
            {cards.map((t, i) => renderCard(t, `a-${i}`))}
            {cards.map((t, i) => renderCard(t, `b-${i}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
export type { TestimonialsProps, Testimonial };
