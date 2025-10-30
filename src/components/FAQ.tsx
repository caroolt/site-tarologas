import { useEffect, useRef, useState } from 'react';
import bgGridCtaDefault from '../assets/bg-grid-cta.svg';
import type { ReactNode } from 'react';

type FaqItem = {
  question: string;
  answer?: string;
};

type FAQProps = {
  id?: string;
  heading?: ReactNode;
  items?: FaqItem[];
  bgSrc?: string;
  initialOpenIndex?: number; // -1 for none
  singleOpen?: boolean; // if false, allow multi-open
  heightClassName?: string;
  containerClassName?: string;
};

const defaultItems: FaqItem[] = [
  {
    question: 'Preciso ter experiência prévia?',
    answer:
      'Sim, buscamos tarólogas com experiência mínima de 2 anos para garantir a qualidade dos atendimentos.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Os pagamentos são processados pela plataforma e repassados após cada atendimento concluído não é imediatamente.',
  },
  {
    question: 'Posso definir meus próprios horários?',
    answer:
      'Sim. Você controla totalmente sua agenda e pode alterar seus horários quando quiser.',
  },
  {
    question: 'Há algum custo para se cadastrar?',
    answer:
      'O cadastro é gratuito. Somente uma taxa de serviço é aplicada em cada atendimento concluído.',
  },
  {
    question: 'Quantas consultas posso fazer por dia?',
    answer:
      'Não há limite fixo. Você atende conforme sua disponibilidade e demanda dos clientes.',
  },
  {
    question: 'E se eu não souber usar a tecnologia?',
    answer:
      'Oferecemos suporte e passo a passo para você configurar tudo com segurança e praticidade.',
  },
];

const FAQ = ({
  id = 'faq',
  heading = 'Perguntas que outras tarólogas fizeram',
  items = defaultItems,
  bgSrc = bgGridCtaDefault,
  initialOpenIndex = 0,
  singleOpen = true,
  heightClassName = 'pt-20 py-10',
  containerClassName = '',
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number>(initialOpenIndex);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set(initialOpenIndex >= 0 ? [initialOpenIndex] : []));

  const toggle = (idx: number) => {
    if (singleOpen) {
      setOpenIndex((prev) => (prev === idx ? -1 : idx));
    } else {
      setOpenSet((prev) => {
        const next = new Set(prev);
        if (next.has(idx)) next.delete(idx); else next.add(idx);
        return next;
      });
    }
  };

  const isOpenAt = (idx: number) => (singleOpen ? openIndex === idx : openSet.has(idx));

  return (
    <section id={id} className={`relative w-full ${heightClassName} flex items-center justify-center bg-white-100 overflow-visible md:overflow-hidden border-b-3 border-black-100 ${containerClassName}`}>
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

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-bold font-blackmango text-black-100 text-4xl md:text-5xl lg:text-[64px] leading-none tracking-tight max-w-[70ch]">
          {heading}
        </h2>

        <div className="mt-20 space-y-6">
          {items.map((it, idx) => {
            const isOpen = isOpenAt(idx);
            const contentRef = useRef<HTMLDivElement | null>(null);
            const [maxHeight, setMaxHeight] = useState<number>(isOpen ? 200 : 0);
            useEffect(() => {
              const el = contentRef.current;
              if (!el) return;
              const target = isOpen ? el.scrollHeight : 0;
              setMaxHeight(target);
            }, [isOpen]);
            return (
              <div key={idx} className={`bg-white-100 border-1 rounded-[9px] transition-shadow duration-300 ${isOpen ? 'shadow-[0_0_0_0_#0000]' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between p-3 lg:p-6"
                >
                  <p className="font-worksans font-semibold text-base text-black-100">
                    {it.question}
                  </p>
                  <span className={`ml-6 text-black-100 text-2xl font-semibold select-none transition-transform duration-300`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  ref={contentRef}
                  style={{ maxHeight }}
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out px-6 lg:px-11"
                >
                  {it.answer && (
                    <p className={`font-worksans text-sm text-black-100 pb-6 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'} transition-all duration-300 max-w-[52rem]`}>
                      {it.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
export type { FAQProps, FaqItem };

