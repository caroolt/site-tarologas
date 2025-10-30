import { useNavigate } from "react-router-dom"
import Benefits from "../components/Benefits"
import Goal from "../assets/Goal.png"
import DollarBag from "../assets/Dollar Bag.png"
import Mobile from "../assets/Mobile.png"
import AlarmClock from "../assets/Alarm Clock.png"
import Project from "../assets/pop_woman.png"
import FAQ, { type FaqItem } from "../components/FAQ"
import FirstCTA from "../components/FirstCTA"
import Hero from "../components/Hero"
import Navbar, { type CtaButton, type NavLink } from "../components/Navbar"
import SecondCTA from "../components/SecondCTA"
import Testimonials from "../components/Testimonials"
import Services from "../components/Services"
import OurTarologists from "../components/OurTarologists"
import Footer from "../components/Footer"


function ClientsLP() {
  const navigate = useNavigate()

  const navLinks: NavLink[] = [
    { label: 'Serviços', href: '#services' },
    { label: 'Tarólogas', href: '#tarologists' },
    { label: 'Outros Consulentes', href: '#other-clients' },
    { label: 'FAQ', href: '#faq' },
  ];

  const navCTA: CtaButton[] = [
    { label: 'Cadastre-se', variant: 'primario' },
    { label: 'Sou Taróloga', variant: 'secundario-black', onClick: () => { navigate('/'); } },
  ];

  const bullets = [
    ' Agendamento simples',
    'Ambiente acolhedor',
    'Conversa respeitosa',
  ];

  const faqItems: FaqItem[] = [
    {
      question: 'Como funciona a consulta online?',
      answer:
        'Após agendar, você recebe um link para acessar a sala virtual no horário marcado. Pode escolher entre chat, áudio ou vídeo.',
    },
    {
      question: 'O tarot prevê o futuro?',
      answer:
        'Os pagamentos são processados pela plataforma e repassados após cada atendimento concluído não é imediatamente.',
    },
    {
      question: 'Como as tarólogas são selecionadas?',
      answer:
        'Sim. Você controla totalmente sua agenda e pode alterar seus horários quando quiser.',
    },
    {
      question: 'Posso remarcar minha consulta?',
      answer:
        'O cadastro é gratuito. Somente uma taxa de serviço é aplicada em cada atendimento concluído.',
    },
    {
      question: 'E se a consulta não me atender?',
      answer:
        'Não há limite fixo. Você atende conforme sua disponibilidade e demanda dos clientes.',
    },
    {
      question: 'Meus dados ficam seguros?',
      answer:
        'Oferecemos suporte e passo a passo para você configurar tudo com segurança e praticidade.',
    },
    {
      question: 'Posso escolher a taróloga?',
      answer:
        'Oferecemos suporte e passo a passo para você configurar tudo com segurança e praticidade.',
    },
    {
      question: 'Quanto tempo dura uma consulta?',
      answer:
        'Oferecemos suporte e passo a passo para você configurar tudo com segurança e praticidade.',
    },
    {
      question: 'Preciso baixar algum aplicativo?',
      answer:
        'Oferecemos suporte e passo a passo para você configurar tudo com segurança e praticidade.',
    },
  ];
  

  return (
    <div className="min-h-screen bg-white-100 text-black-100 overflow-x-hidden">
      <Navbar links={navLinks} ctas={navCTA} />
      <main>
        <Hero title={<>
          Encontre <span className="text-red-100 inline-block">clareza e perspectiva</span> para suas <span className="text-red-100 inline-block">decisões</span>
        </>}
          subtitle="Conversas acolhedoras para refletir sobre seus caminhos. Agendamento fácil, ambiente seguro e profissionais qualificadas para dialogar sobre todos os seus problemas."
          cta={{ label: 'Marcar uma consulta', onClick: () => { console.log('Marcar uma consulta'); } }}
          supportingNote={<>Consultas de Tarot Online com  <span className="font-semibold">Profissionais Experientes</span></>}
        />
        <Benefits
          items={[
            { icon: Project, alt: 'Profissionais', label: 'Profissionais Experientes' },
            { icon: DollarBag, alt: 'Pagamento', label: 'Transparência no Pagamento' },
            { icon: Mobile, alt: 'Consulta Online', label: 'Consulta Online Confortável' },
            { icon: AlarmClock, alt: 'Horários', label: 'Horários Diversos' },
            { icon: Goal, alt: 'Abordagens', label: 'Diferentes Abordagens' },
          ]}
        />
        <Services/>
        <FirstCTA  bullets={bullets} buttonLabel="AGENDAR MINHA PRIMEIRA CONSULTA" onButtonClick={() => { console.log('Agendar minha primeira consulta'); }} eyebrow="Momento de agir" title="Pronto para começar sua jornada de autoconhecimento?" subtitle="Milhares de pessoas já encontraram clareza e direção em nossas consultas." />
        <OurTarologists/>
        <Testimonials id="other-clients" heading={(<>
          O que outros consulentes estão <br/> dizendo</>)}/>
        <SecondCTA  eyebrow="Sua Transformação Começa Aqui" title="Não deixe suas dúvidas para amanhã" subtitle="A clareza que você busca está a uma consulta de distância." buttonLabel="AGENDAR MINHA CONSULTA AGORA" onButtonClick={() => { console.log('Agendar minha consulta agora'); }} bullets={['Profissionais experientes e acolhedoras', 'Agendamento em minutos']} />
        <FAQ id="faq"  heading="Perguntas que outros consulentes fizeram" items={faqItems} />
      </main>
      <Footer
        description="Conectamos você com tarólogas experientes para consultas online seguras, acolhedoras e transformadoras."
        navLinks={[
          { label: 'Serviços', href: '#services' },
          { label: 'Tarólogas', href: '#tarologists' },
          { label: 'Outros Consulentes', href: '#other-clients' },
          { label: 'FAQ', href: '#faq' },
        ]}
        ctaQuestion="Pronto para começar sua consulta?"
        ctaLabel="Agendar consulta"
        ctaHref="#services"
      />
    </div>
  )
}

export default ClientsLP
