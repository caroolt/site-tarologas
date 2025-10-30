import bgRedGridCtaDefault from '../assets/bg-red-grid-cta.png';
import checkSvgDefault from '../assets/check.svg';
import Botao from './Botao';
import type { ReactNode } from 'react';

type SecondCtaProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  bullets?: string[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  bgSrc?: string;
  iconSrc?: string;
  heightClassName?: string; // e.g., h-[120vh]
  containerClassName?: string;
  cardClassName?: string;
};

const defaultBullets = ['Clientes pré-qualificados', 'Pagamentos garantidos'];

const SecondCTA = ({
  eyebrow = 'clientes satisfeitos te esperam',
  title = 'Tenha Clientes Como Estes Todos os Dias',
  subtitle = 'junte-se às taróloga que já conquistaram uma base sólida de clientes fiéis e transformaram seu dom em uma renda estável',
  bullets = defaultBullets,
  buttonLabel = 'QUERO CONQUISTAR MEUS CLIENTES',
  onButtonClick,
  bgSrc = bgRedGridCtaDefault,
  iconSrc = checkSvgDefault,
  heightClassName = 'h-[120vh]',
  containerClassName = '',
  cardClassName = '',
}: SecondCtaProps) => {
  return (
    <section className={`relative w-full ${heightClassName} flex items-center justify-center bg-white-100 overflow-hidden border-b-3 border-black-100 ${containerClassName}`}>
      {/* Background red grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`bg-white-100 border-1 rounded-[9px] shadow-[7px_8px_0px_0px_#000000] p-6 sm:p-10 lg:p-16 ${cardClassName}`}>
          {/* Eyebrow */}
          <p className="font-blackmango text-sm text-black-100/80 mb-3">{eyebrow}</p>

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

export default SecondCTA;
export type { SecondCtaProps };

