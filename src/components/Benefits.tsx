import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Goal from '../assets/Goal.png';
import DollarBag from '../assets/Dollar Bag.png';
import Mobile from '../assets/Mobile.png';
import AlarmClock from '../assets/Alarm Clock.png';
import Project from '../assets/Project.png';

type BenefitItem = { icon: string; alt: string; label: string };

const defaultItems: BenefitItem[] = [
  { icon: Goal, alt: 'Meta', label: 'Agenda Sempre Cheia' },
  { icon: DollarBag, alt: 'Pagamento', label: 'Pagamentos Assegurados' },
  { icon: Mobile, alt: 'Tecnologia', label: 'Tecnologia na Palma da Mão' },
  { icon: AlarmClock, alt: 'Flexibilidade', label: 'Flexibilidade Total' },
  { icon: Project, alt: 'Crescimento', label: 'Crescimento Garantido' },
];

type BenefitsProps = {
  items?: BenefitItem[];
  durationSeconds?: number; // time to slide one full set
  showEdgeMask?: boolean;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
};

const Benefits = ({
  items = defaultItems,
  durationSeconds = 20,
  showEdgeMask = true,
  className = '',
  trackClassName = '',
  itemClassName = '',
}: BenefitsProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;

    let tween: gsap.core.Tween | null = null;

    const setAnimation = () => {
      gsap.killTweensOf(el);
      const distance = el.scrollWidth / 2; // width of one sequence
      tween = gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -distance,
          duration: durationSeconds,
          ease: 'none',
          repeat: -1,
        },
      );
    };

    const pauseTween = () => {
      tween?.pause();
    };

    const resumeTween = () => {
      tween?.resume();
    };

    setAnimation();

    // Add hover event listeners
    el.addEventListener('mouseenter', pauseTween);
    el.addEventListener('mouseleave', resumeTween);

    const onResize = () => setAnimation();
    window.addEventListener('resize', onResize);
    return () => {
      el.removeEventListener('mouseenter', pauseTween);
      el.removeEventListener('mouseleave', resumeTween);
      window.removeEventListener('resize', onResize);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <section className={`w-full border-b border-black-100/20 overflow-hidden ${className}`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div
          className="relative overflow-hidden"
          style={
            showEdgeMask
              ? {
                  WebkitMaskImage:
                    'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 60px, rgba(0,0,0,1) calc(100% - 60px), rgba(0,0,0,0))',
                  maskImage:
                    'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 60px, rgba(0,0,0,1) calc(100% - 60px), rgba(0,0,0,0))',
                }
              : undefined
          }
        >
          <div ref={trackRef} className={`flex gap-10 lg:gap-20 items-center w-[max-content] ${trackClassName}`}>
            {[...items, ...items].map((item, idx) => (
              <div key={`${item.label}-${idx}`} className={`flex items-center gap-2 shrink-0 ${itemClassName}`}>
                <img src={item.icon} alt={item.alt} className="w-8 h-8 object-contain" />
                <p className="font-worksans text-black-100 text-base lg:text-nowrap">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
export type { BenefitsProps, BenefitItem };

