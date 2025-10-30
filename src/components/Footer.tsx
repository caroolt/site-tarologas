import logo from '../assets/logo.svg';
import Botao from './Botao';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

type FooterNavLink = { label: string; href: string };

type FooterProps = {
  className?: string;
  description?: string;
  navTitle?: string;
  socialTitle?: string;
  navLinks?: FooterNavLink[];
  instagramUrl?: string;
  ctaQuestion?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultNavLinks: FooterNavLink[] = [
  { label: 'Processo', href: '#processo' },
  { label: 'Tarólogas', href: '#tarologists' },
  { label: 'Clientes', href: '#clients' },
  { label: 'FAQ', href: '#faq' },
];

const Footer = ({
  className = '',
  description = 'Conectamos tarólogas a clientes que valorizam seu trabalho, com acolhimento e profissionalismo.',
  navTitle = 'Navegação',
  socialTitle = 'Redes Sociais',
  navLinks = defaultNavLinks,
  instagramUrl = 'https://www.instagram.com/gnp_tarologas/',
  ctaQuestion = 'Pronta para dar o próximo passo?',
  ctaLabel = 'Conhecer o processo',
  ctaHref = '#processo',
}: FooterProps) => {
  gsap.registerPlugin(ScrollToPlugin);

  const handleSmoothScroll = (selector: string) => {
    const target = document.querySelector(selector);
    if (!target) return;
    gsap.to(window, {
      duration: 0.8,
      ease: 'power2.out',
      scrollTo: { y: target as Element, offsetY: 64 },
    });
  };
  return (
    <footer className={`bg-white-100 border-t border-black-100/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="GNP Tarólogas" className="h-9 w-auto" />
              <span className="font-blackmango text-xl text-black-100">GNP Tarólogas</span>
            </div>
            <p className="text-sm text-black-60 font-worksans max-w-sm">{description}</p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 gap-6 md:justify-items-center">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-black-100 font-worksans">{navTitle}</h3>
              <ul className="space-y-2 text-sm font-worksans">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-black-80 hover:text-red-100 transition-colors"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleSmoothScroll(link.href);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-black-100 font-worksans">{socialTitle}</h3>
              <ul className="space-y-2 text-sm font-worksans">
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black-80 hover:text-red-100 transition-colors"
                    aria-label="Instagram GNP Tarólogas"
                  >
                    {/* Instagram glyph */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* CTA */}
          <div className="md:text-right space-y-3 flex items-end justify-end flex-col">
            <p className="text-sm text-black-60 font-worksans">{ctaQuestion}</p>
            <Botao
              variant="primario"
              className="!text-sm !px-5 !py-2 !min-h-auto "
              onClick={() => {
                if (ctaHref.startsWith('#')) {
                  handleSmoothScroll(ctaHref);
                }
              }}
            >
              {ctaLabel}
            </Botao>
          </div>
        </div>
      </div>
      <div className="border-t border-black-100/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black-60 font-worksans">© {new Date().getFullYear()} GNP Tarólogas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-xs font-worksans">
            <a href="#" className="text-black-60 hover:text-red-100 transition-colors">Termos</a>
            <span className="text-black-60">•</span>
            <a href="#" className="text-black-60 hover:text-red-100 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export type { FooterProps };
