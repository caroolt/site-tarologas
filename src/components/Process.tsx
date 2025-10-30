import bgGridProcessos from '../assets/bg-grid-processos.svg';

const StepCard = ({ title, description }: { title: string; description: string }) => (
  <div className="relative bg-white-100 rounded-[1rem] border-1 shadow-[7px_8px_0px_0px_#3C0008] text-black-100 w-full">
    <div className="relative p-4 sm:p-6">
      <p className="font-worksans font-semibold text-xl mb-2">{title}</p>
      <p className="font-worksans text-lg text-black-100">{description}</p>
    </div>
    <div className="absolute inset-0 pointer-events-none"></div>
  </div>
);

const Pill = ({ children }: { children: string }) => (
  <div className="relative inline-flex items-center justify-center rounded-[3rem] border border-red-100 bg-white-100 px-12 py-2 [box-shadow:-0.5px_-0.5px_0px_0px_inset_rgba(0,0,0,0.19),0.5px_0.5px_0px_0px_inset_rgba(0,0,0,0.19)]">
    <p className="font-worksans font-semibold text-red-100 text-sm leading-none tracking-wide text-center">
      {children}
    </p>
  </div>
);

const NumberBadge = ({ n }: { n: number }) => (
  <div className="relative inline-grid place-items-center">
    <div className="bg-red-100 blur-[5.75px] rounded-full w-[57px] h-[57px] grid place-items-center">
      <p className="font-worksans font-extrabold text-white-100 text-4xl">{n}</p>
    </div>
    <div className="absolute inset-0 rounded-full grid place-items-center">
      <div className="bg-red-100 rounded-full w-[57px] h-[57px] grid place-items-center">
        <p className="font-worksans font-extrabold text-white-100 text-4xl">{n}</p>
      </div>
    </div>
  </div>
);

const Process = () => {
  return (
    <section id="processo" className="relative w-full border-t-3 border-b-3 border-black-100 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgGridProcessos})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="max-w-[1251px]">
          <h2 className="font-blackmango text-5xl font-bold text-red-100 leading-none mb-2">Seus próximos passos</h2>
          <p className="font-worksans text-xl tracking-[0.32px] text-black-100 max-w-[990px]">
            Acompanhe o passo a passo de como nossa metodologia te leva ao sucesso de forma organizada e eficiente
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1fr_6px_1fr] lg:gap-y-16 lg:gap-x-20 lg:items-start">
          {/* Center vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-[980px] w-[6px] bg-red-100 rounded-full" />

          {/* Row 1: Left card, badge centered with pill to the right */}
          <div className="lg:col-[1]">
            <StepCard
              title="Cadastro e Entrevista"
              description="Preencha o formulário (3 min) e participe de uma conversa rápida pelo WhatsApp para conhecermos seu perfil."
            />
          </div>
          {/* Centered number on the line */}
          <div className="relative lg:col-[2] hidden lg:flex items-center justify-center">
            <div className="hidden lg:flex translate-y-[95%]">
              <NumberBadge n={1} />
            </div>
          </div>
          {/* Pill on opposite side (right), spaced from the line */}
          <div className="lg:col-[3] hidden lg:flex self-center">
           <Pill>cadastro completo</Pill>
          </div>

          {/* Row 2: Right card, badge centered with pill to the left */}
          {/* Pill on opposite side (left), spaced from the line */}
          <div className="lg:col-[1] hidden lg:flex self-center justify-end">
           <Pill>aprovação rápida</Pill>
          </div>
          {/* Centered number on the line */}
          <div className="relative lg:col-[2] hidden lg:flex items-center justify-center">
            <div className="hidden lg:flex translate-y-[80%]">
              <NumberBadge n={2} />
            </div>
          </div>
          <div className="lg:col-[3]">
            <StepCard
              title="Resposta em 24 horas"
              description="Analisamos seu cadastro e respondemos em até 24 horas sobre sua aprovação."
            />
          </div>

          {/* Row 3: Left card, badge centered with pill to the right */}
          <div className="lg:col-[1]">
            <StepCard
              title="Configuração da Agenda"
              description="Defina seus horários disponíveis e comece a receber solicitações de clientes."
            />
          </div>
          {/* Centered number on the line */}
          <div className="relative lg:col-[2] hidden lg:flex items-center justify-center">
            <div className="hidden lg:flex translate-y-[80%]">
              <NumberBadge n={3} />
            </div>
          </div>
          {/* Pill on opposite side (right) */}
          <div className="lg:col-[3] hidden lg:flex self-center">
            <Pill>agenda ativa</Pill>
          </div>

          {/* Row 4: Right card, badge centered with pill to the left */}
          {/* Pill on opposite side (left) */}
          <div className="lg:col-[1] hidden lg:flex self-center justify-end">
            <Pill>primeiro sucesso</Pill>
          </div>
          {/* Centered number on the line */}
          <div className="relative lg:col-[2] hidden lg:flex items-center justify-center">
            <div className="hidden lg:flex translate-y-[75%]">
              <NumberBadge n={4} />
            </div>
          </div>
          <div className="lg:col-[3]">
            <StepCard
              title="Primeiro Atendimento"
              description="Realize sua primeira consulta e receba o pagamento em até 2 dias úteis."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

