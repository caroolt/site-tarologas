import Botao from './Botao'
import bgGridProcessos from '../assets/bg-grid-processos.svg'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

type Service = {
  title: string
  description: string
}

const servicesData: Service[] = [
  {
    title: 'Baralho Maria Padilha',
    description:
      'Maria Padilha representa coragem, empoderamento e transformação. Este baralho oferece orientação para questões de amor, prosperidade e espiritualidade, auxiliando na busca por clareza, equilíbrio e crescimento pessoal.',
  },
  {
    title: 'Baralho Cigano',
    description:
      'O Tarot Cigano conecta-se à sabedoria dos espíritos ciganos, refletindo vida cotidiana e emocional. Aborda questões afetivas, profissionais e espirituais, trazendo clareza e revelações que iluminam caminhos e desafios.',
  },
  {
    title: 'Tarot Elixires dos Cristais',
    description:
      'O Tarot Elixires dos Cristais revela quais cristais harmonizam sua energia, promovendo equilíbrio físico, mental e espiritual. Os cristais amplificam forças internas, oferecendo um caminho prático para mais harmonia em sua vida.',
  },
  {
    title: 'Baralho Maria Padilha',
    description:
      'Maria Padilha representa coragem, empoderamento e transformação. Este baralho oferece orientação para questões de amor, prosperidade e espiritualidade, auxiliando na busca por clareza, equilíbrio e crescimento pessoal.',
  },
  {
    title: 'Baralho Cigano',
    description:
      'O Tarot Cigano conecta-se à sabedoria dos espíritos ciganos, refletindo vida cotidiana e emocional. Aborda questões afetivas, profissionais e espirituais, trazendo clareza e revelações que iluminam caminhos e desafios.',
  },
  {
    title: 'Tarot Elixires dos Cristais',
    description:
      'O Tarot Elixires dos Cristais revela quais cristais harmonizam sua energia, promovendo equilíbrio físico, mental e espiritual. Os cristais amplificam forças internas, oferecendo um caminho prático para mais harmonia em sua vida.',
  },
]

function ServiceCard({ title, description }: Service) {
  return (
    <div className="bg-white-100 rounded-[10px] shadow-[7px_8px_0px_0px_#3C0008] relative px-6 md:px-10 py-5 md:py-6 min-h-[13rem] md:min-h-[15rem]">
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_-1px_0px_0px_inset_#3C0008,1px_1px_0px_0px_inset_#3C0008] rounded-[10px]" />
      <div className="relative text-black-100 leading-normal">
        <div className="font-worksans font-semibold text-lg">
          <p className="mb-0 ">{title}</p>
          <p>&nbsp;</p>
        </div>
        <p className="font-worksans text-sm text-wrap">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const row1Ref = useRef<HTMLDivElement | null>(null)
  const row2Ref = useRef<HTMLDivElement | null>(null)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  // Track viewport to decide between mobile stacked layout and desktop marquee
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setIsDesktop(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const speedSeconds = 25

    let t1: gsap.core.Tween | null = null
    let t2: gsap.core.Tween | null = null

    const startTweens = () => {
      if (!isDesktop) return
      const el1 = row1Ref.current
      const el2 = row2Ref.current
      if (!el1 || !el2) return

      // Using 3 copies per row; each loop is 33.333% of the total track
      const step = -(100 / 3) // -33.333...
      // Row 1: right -> left (0 to step)
      gsap.set(el1, { xPercent: 0 })
      t1 = gsap.to(el1, {
        xPercent: step,
        duration: speedSeconds,
        ease: 'none',
        repeat: -1,
      })

      // Row 2: left -> right (step to 0)
      gsap.set(el2, { xPercent: step })
      t2 = gsap.to(el2, {
        xPercent: 0,
        duration: speedSeconds,
        ease: 'none',
        repeat: -1,
      })
    }

    const killTweens = () => {
      t1?.kill(); t1 = null
      t2?.kill(); t2 = null
    }

    const pauseTweens = () => {
      t1?.pause()
      t2?.pause()
    }

    const resumeTweens = () => {
      t1?.resume()
      t2?.resume()
    }

    if (isDesktop) startTweens()

    const handleResize = () => {
      killTweens()
      startTweens()
    }

    // Add hover event listeners
    const row1Element = row1Ref.current
    const row2Element = row2Ref.current

    if (row1Element) {
      row1Element.addEventListener('mouseenter', pauseTweens)
      row1Element.addEventListener('mouseleave', resumeTweens)
    }

    if (row2Element) {
      row2Element.addEventListener('mouseenter', pauseTweens)
      row2Element.addEventListener('mouseleave', resumeTweens)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (row1Element) {
        row1Element.removeEventListener('mouseenter', pauseTweens)
        row1Element.removeEventListener('mouseleave', resumeTweens)
      }
      if (row2Element) {
        row2Element.removeEventListener('mouseenter', pauseTweens)
        row2Element.removeEventListener('mouseleave', resumeTweens)
      }
      killTweens()
    }
  }, [isDesktop])

  const mid = Math.floor(servicesData.length / 2)
  const firstRow = servicesData.slice(0, mid)
  const secondRow = servicesData.slice(mid)

  return (
    <section
      id="services"
      className="relative w-full py-24 pt-0 overflow-hidden border-t-3 border-black-100 "
      data-name="services"
    >
      <div
        className="absolute inset-0 opacity-50"
        aria-hidden
        style={{
          backgroundImage: `url(${bgGridProcessos})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'contain',
        }}
      />

      <div className="relative max-w-[1807px] mx-auto px-5 sm:px-10 md:px-20 ">
        <div className="w-full mt-20">
          <h2 className="font-blackmango font-bold text-red-100 text-4xl md:text-5xl lg:text-6xl *:leading-tight">Serviços</h2>
          <p className="font-worksans text-black-100 lg:w-1/2 text-xs sm:text-sm md:text-base mt-3">
            Encontre orientação e clareza para suas questões mais importantes através de consultas personalizadas e acolhedoras
          </p>
          <div className="mt-6">
            <Botao variant="primario" className="!text-base !px-8 !py-2">AGENDAR CONSULTA</Botao>
          </div>
        </div>

        {isDesktop ? (
          <>
            {/* Marquee Row 1: right -> left */}
            <div className="mt-12 relative overflow-hidden md:min-h-[20rem]">
              <div
                ref={row1Ref}
                className="flex gap-[44px] whitespace-nowrap will-change-transform"
                style={{ width: 'max-content' }}
              >
                {Array.from({ length: 3 }).map((_, copyIdx) => (
                  firstRow.map((s, idx) => (
                    <div key={`row1-c${copyIdx}-${s.title}-${idx}`} className="min-w-[270px] md:min-w-[320px] max-w-[420px]">
                      <ServiceCard {...s} />
                    </div>
                  ))
                ))}
              </div>
            </div>

            {/* Marquee Row 2: left -> right */}
            <div className="mt-2 relative overflow-hidden md:min-h-[20rem]">
              <div
                ref={row2Ref}
                className="flex gap-[44px] whitespace-nowrap will-change-transform"
                style={{ width: 'max-content' }}
              >
                {Array.from({ length: 3 }).map((_, copyIdx) => (
                  secondRow.map((s, idx) => (
                    <div key={`row2-c${copyIdx}-${s.title}-${idx}`} className="min-w-[270px] md:min-w-[320px] max-w-[420px]">
                      <ServiceCard {...s} />
                    </div>
                  ))
                ))}
              </div>
            </div>
          </>
        ) : (
          // Mobile: stacked grid for better readability
          <div className="mt-8 grid grid-cols-1 gap-4">
            {servicesData.map((s, idx) => (
              <ServiceCard key={`m-${s.title}-${idx}`} {...s} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}


