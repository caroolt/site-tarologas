import bgGridHeroDefault from '../assets/bg-grid-hero.svg';
import imagemHeroDefault from '../assets/imagem-hero-container.svg';
import Botao from './Botao';
import type { ReactNode } from 'react';

type HeroCta = {
  label: string;
  onClick?: () => void;
};

type HeroProps = {
  title?: ReactNode;
  subtitle?: string;
  supportingNote?: ReactNode;
  cta?: HeroCta;
  bgSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const defaultTitle = (
  <>
    Você <span className="text-red-100 inline-block">não precisa </span> mais{' '}
    <span className="text-red-100 inline-block">esperar</span> por clientes
  </>
);

const Hero = ({
  title = defaultTitle,
  subtitle = 'Criada por tarólogos para tarólogos: conectamos você com clientes que valorizam seu trabalho.',
  cta = { label: 'Conquistar clientes' },
  bgSrc = bgGridHeroDefault,
  imageSrc = imagemHeroDefault,
  imageAlt = 'Taróloga profissional realizando consulta de tarot',
  className = '',
  supportingNote = (<> Vagas <span className="font-semibold">limitadas</span> para manter qualidade do serviço</>)
}: HeroProps) => {
  return (
    <section className={`relative min-h-screen bg-white-100 overflow-hidden border-b-3 border-black-100 ${className}`}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 w-full lg:w-[883px]">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-full md:max-w-[90%] font-blackmango font-black text-black-100 leading-tight">
                {title}
              </h1>
              
              <p className="text-base md:text-lg text-black-80 font-worksans leading-relaxed max-w-full md:max-w-[85%]">
              {subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {cta?.label && (
                <Botao variant="primario" className="!text-base !px-8 sm:!px-12 lg:!px-16 !py-3" onClick={() => cta?.onClick?.()}>
                  {cta.label}
              </Botao>
              )}
            </div>

            {/* Supporting note below primary CTA (from Figma) */}
            <p className="text-sm text-black-60 font-worksans leading-normal">
              {supportingNote}
            </p>

       
          </div>

          {/* Right Column - Hero Image */}
          <div className="hidden lg:flex relative items-center justify-end overflow-visible">
            <div className="relative z-10 w-full lg:w-[980px] xl:w-[1280px] 2xl:w-[1500px] lg:h-auto xl:mr-[calc((100vw-100%)/3.5*-1)]">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export type { HeroProps };
