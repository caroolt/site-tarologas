import bgGridCtaDefault from '../assets/bg-grid-cta.svg';
import Botao from './Botao';
import checkSvgDefault from '../assets/check.svg';
import type { ReactNode } from 'react';

type FirstCtaProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  bullets?: string[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  bgSrc?: string;
  iconSrc?: string;
  containerClassName?: string;
  cardClassName?: string;
  heightClassName?: string; // e.g., h-[120vh]
};

const defaultBullets = [
  'Processo 100% online e gratuito',
  'Sem mensalidades ou taxas escondidas',
  'Aprove seu perfil e comece a receber solicitações',
];

const FirstCTA = ({
  eyebrow = 'pronto para organizar seus atendimentos?',
  title = 'Faça Parte de Uma Plataforma Feita Para Tarólogas',
  subtitle = 'selecionamos apenas tarólogas experientes para garantir a qualidade que nossos clientes merecem',
  bullets = defaultBullets,
  buttonLabel = 'QUERO FAZER PARTE DA PLATAFORMA',
  onButtonClick,
  bgSrc = bgGridCtaDefault,
  iconSrc = checkSvgDefault,
  containerClassName = '',
  cardClassName = '',
  heightClassName = 'h-[120vh]',
}: FirstCtaProps) => {
  return (
    <section className={`relative w-full ${heightClassName} border-b-3 border-t-3 border-black-100 bg-white-100 overflow-hidden flex items-center justify-center ${containerClassName}`}>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-5xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`bg-white-100 border-1 rounded-[9px] shadow-[7px_8px_0px_0px_#000000] p-6 sm:p-10 lg:p-16 ${cardClassName}`}>
          {/* Eyebrow */}
          <p className="font-blackmango text-sm text-black-100/80 mb-3">
            {eyebrow}
          </p>

          {/* Title */}
          <h2 className="font-bold font-blackmango text-red-100 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="font-worksans text-black-60 text-lg mt-4 max-w-3xl">
            {subtitle}
          </p>

          {/* Button */}
          {buttonLabel && (
            <div className="mt-6">
              <Botao variant="primario" className="!px-12 !py-3 !text-sm shadow-[3px_3px_0_0_#000]" onClick={onButtonClick}>
                {buttonLabel}
              </Botao>
            </div>
          )}

          {/* Bullets */}
          {bullets?.length ? (
            <ul className="mt-10 space-y-3 font-worksans text-sm text-black-80">
              {bullets.map((b, i) => (
                <li key={`${b}-${i}`} className="flex items-center gap-2">
                  <img src={iconSrc} alt="check" className="inline-block w-[14px] h-[14px]" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default FirstCTA;
export type { FirstCtaProps };

