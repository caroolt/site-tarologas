import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Botao from './Botao'
import bgTarologos from '../assets/bg-tarologos.png'
import defaultAvatar from '../assets/imagem_usuario.png'
import starIcon from '../assets/star.svg'

type Tarologist = {
  name: string
  specialties: string
  avatar?: string
  totalConsultas?: number
}

const tarologists: Tarologist[] = [
  { name: 'Gabriela', specialties: 'Autoconhecimento, Relacionamentos', avatar: defaultAvatar, totalConsultas: 2000 },
  { name: 'Gabriela', specialties: 'Autoconhecimento, Relacionamentos', avatar: defaultAvatar, totalConsultas: 2000 },
  { name: 'Gabriela', specialties: 'Autoconhecimento, Relacionamentos', avatar: defaultAvatar, totalConsultas: 2000 },
]

function Rating({ count = 5, totalConsultas = 2000 }: { count?: number; totalConsultas?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
        ))}
      </div>
      <span className="font-worksans text-black-60 text-[10px] text-nowrap">+ {totalConsultas} consultas</span>
    </div>
  )
}

function TarologistCard({ name, specialties, avatar = defaultAvatar, totalConsultas = 2000 }: Tarologist) {
  return (
    <div className="relative bg-white-100 rounded-[1rem] border border-red-100 p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#3C0008] flex-none w-[90vw] sm:w-[26rem] lg:w-[34.75rem] snap-start">
      <div className="flex items-start gap-3 sm:gap-6">
        <img src={avatar} alt={name} className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full object-cover flex-shrink-0" />
        <div className="flex-1 mt-2 sm:mt-10">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <h3 className="font-worksans text-black-100 text-lg sm:text-xl md:text-2xl leading-tight">{name}</h3>
            <div className="hidden md:block">
              <Rating totalConsultas={totalConsultas} />
            </div>
          </div>
          <p className="font-worksans text-black-80 text-xs sm:text-xs md:text-base mt-1 leading-relaxed">{specialties}</p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <Botao variant="primario" className="w-full !text-xs sm:!text-sm md:!text-base !py-2 sm:!py-2 md:!py-3">CONHECER {name.toUpperCase()}</Botao>
      </div>

      <div className="md:hidden mt-2 sm:mt-3">
        <Rating totalConsultas={totalConsultas} />
      </div>
    </div>
  )
}

export default function OurTarologists() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    
    let tween: gsap.core.Tween | null = null;
    
    const isDesktopOrTablet = window.matchMedia('(min-width: 768px)').matches
    
    const startTween = () => {
      tween = gsap.to(el, {
        xPercent: -50,
        duration: 25,
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

    if (isDesktopOrTablet) {
      startTween();
      // Add hover event listeners only on desktop/tablet
      el.addEventListener('mouseenter', pauseTween);
      el.addEventListener('mouseleave', resumeTween);
    }

    return () => { 
      el.removeEventListener('mouseenter', pauseTween);
      el.removeEventListener('mouseleave', resumeTween);
      tween?.kill(); 
    };
  }, [])

  const renderCard = (t: Tarologist, key?: string | number) => (
    <TarologistCard key={key} {...t} />
  )
  return (
    <section id="tarologists" className="relative w-full py-16 sm:py-20 md:py-24 pt-8 sm:pt-10 md:pt-12 overflow-hidden border-t-3 border-b-3 border-black-100">
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage: `url(${bgTarologos})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-[1807px] mx-auto ">
        <div className="w-full mb-8 sm:mb-10 md:mb-14 mt-6 px-4 sm:px-6 md:px-20">
          <h2 className="font-blackmango font-bold text-red-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Nossas tarólogas</h2>
          <p className="font-worksans text-black-100 text-xs sm:text-xs md:text-sm lg:text-base mt-2 sm:mt-3 md:mt-4 w-full sm:w-[80%] md:w-[50%]">
            Escolha a profissional ideal para você: tarólogas experientes especializadas em diferentes métodos e áreas para atender suas necessidades
          </p>
        </div>
        {/* Marquee track */}
        <div className="mt-4 sm:mt-6 w-full relative overflow-x-auto sm:overflow-hidden min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem] snap-x snap-mandatory">
          {/* Side fades */}
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-10 md:w-16 z-10" style={{ backgroundImage: 'linear-gradient(to right, #f3f3f3, transparent)' }} />
          <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 md:w-16 z-10" style={{ backgroundImage: 'linear-gradient(to left, #f3f3f3, transparent)' }} />
          <div ref={trackRef as any} className="flex flex-row flex-nowrap gap-4 sm:gap-6 md:gap-8 xl:gap-20 will-change-transform px-4" style={{ width: 'max-content' }}>
            {tarologists.map((t, i) => renderCard(t, `a-${i}`))}
            {tarologists.map((t, i) => renderCard(t, `b-${i}`))}
          </div>
        </div>
      </div>
    </section>
  )
}


