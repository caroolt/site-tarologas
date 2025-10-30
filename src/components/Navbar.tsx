import { useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import defaultLogo from '../assets/logo.svg';
import Botao from './Botao';

type NavLink = { label: string; href: string };
type CtaButton = { label: string; variant: 'primario' | 'secundario-black'; href?: string; onClick?: () => void };

type NavbarProps = {
  logoSrc?: string;
  links?: NavLink[];
  ctas?: CtaButton[];
  offsetY?: number;
  className?: string;
};

const defaultLinks: NavLink[] = [
  { label: 'Processo', href: '#processo' },
  { label: 'Outras Tarologas', href: '#other-tarologists' },
  { label: 'Clientes', href: '#clients' },
  { label: 'FAQ', href: '#faq' },
];

const defaultCtas: CtaButton[] = [
  { label: 'Cadastre-se', variant: 'primario' },
  { label: 'Sou Cliente', variant: 'secundario-black' },
];

const Navbar = ({ logoSrc = defaultLogo, links = defaultLinks, ctas = defaultCtas, offsetY = 64, className = '' }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  gsap.registerPlugin(ScrollToPlugin);

  const handleSmoothScroll = useCallback((event: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (!target) return;
    gsap.to(window, {
      duration: 0.8,
      ease: 'power2.out',
      scrollTo: { y: target as Element, offsetY },
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      handleSmoothScroll(e, href);
    }
  };

  return (
    <nav className={`bg-white-100 shadow-lg fixed w-full top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logoSrc} 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-black-100 hover:text-red-100 px-3 py-2 text-sm font-medium font-worksans transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {ctas.map((cta, idx) => (
              <Botao
                key={`${cta.label}-${idx}`}
                variant={cta.variant}
                className="!text-sm !px-4 !py-2 !min-h-auto"
                onClick={cta.onClick}
              >
                {cta.label}
              </Botao>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black-100 hover:text-red-100 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-100"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white-100 border-t border-gray-200">
          {links.map((link) => (
            <a
              key={`m-${link.href}`}
              href={link.href}
              className="text-black-100 hover:text-red-100 block px-3 py-2 text-base font-medium font-worksans"
              onClick={(e) => { handleLinkClick(e, link.href); setIsMenuOpen(false); }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            {ctas.map((cta, idx) => (
              <Botao
                key={`m-${cta.label}-${idx}`}
                variant={cta.variant}
                className="w-full !text-sm !px-4 !py-2 !min-h-auto"
                onClick={() => { cta.onClick?.(); setIsMenuOpen(false); }}
              >
                {cta.label}
              </Botao>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
export type { NavbarProps, NavLink, CtaButton };