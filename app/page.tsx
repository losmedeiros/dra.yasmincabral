'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const logoImg = "/regenerated_image_1777987988992.jpg";
const heroImg = "/regenerated_image_1777987989852.jpg";
const portraitImg = "/regenerated_image_1777987990950.jpg";
import { 
  Calendar, 
  MapPin, 
  Video, 
  ArrowRight, 
  Instagram, 
  Phone,
  Moon,
  Zap,
  Brain,
  Utensils,
  Frown,
  Activity,
  ArrowUpRight,
  Stethoscope,
  Menu,
  X
} from 'lucide-react';

export default function LandingPage() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = ['home', 'sobre', 'consultas', 'transtornos', 'atendimentos'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre mim', id: 'sobre' },
    { label: 'Consultas', id: 'consultas' },
    { label: 'Transtornos', id: 'transtornos' },
    { label: 'Atendimentos', id: 'atendimentos' }
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isMenuOpen ? 'bg-white' : 'glass-nav shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-lg md:text-xl font-extrabold tracking-tighter text-primary font-sans shrink-0">
            Dra. Yasmin Cabral
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-tight h-full">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-300 h-full flex items-center border-b-2 cursor-pointer ${
                  activeSection === link.id 
                    ? 'text-primary font-bold border-primary' 
                    : 'text-on-surface/60 hover:text-primary border-transparent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#consultas" 
              className="hidden sm:block signature-gradient text-white px-6 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              Agendar Consulta
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-6 gap-6 bg-white h-full overflow-y-auto">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-2xl font-bold text-left py-4 border-b border-outline-variant/30 ${activeSection === link.id ? 'text-primary' : 'text-on-surface/60'}`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href="#consultas" 
              onClick={() => setIsMenuOpen(false)}
              className="signature-gradient text-white p-6 rounded-3xl text-center font-bold text-xl mt-4 shadow-xl"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pb-24 px-6 min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="relative w-48 sm:w-56 md:w-80 h-24 sm:h-28 md:h-40 group cursor-pointer">
              <Image 
                src={logoImg}
                alt="Logo Dra. Yasmin Cabral"
                fill
                priority
                quality={100}
                className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.05]">
              Sua saúde mental é <span className="text-primary-container">prioridade</span>
            </h1>
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <a 
                href="#consultas" 
                className="signature-gradient text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-primary/30 hover:scale-105 transition-transform text-sm md:text-base"
              >
                Agendar Consulta
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[8px] md:border-[12px] border-white max-w-sm md:max-w-none mx-auto lg:rotate-2 group transition-all duration-1000 ease-out hover:rotate-0 hover:shadow-[0_40px_80px_-15px_rgba(0,71,141,0.2)] hover:-translate-y-4">
              <Image 
                src={heroImg}
                alt="Dra. Yasmin Cabral"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
            <div className="hidden md:block absolute -top-10 -right-10 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] -z-0" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center lg:items-start text-center lg:text-left">
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-on-surface/40 uppercase">SOBRE MIM</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Sou a Dra. Yasmin Cabral</h2>
              <p className="text-on-surface/50 font-semibold text-sm md:text-base">CRM-PB 14244</p>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-on-surface/70">
              Sou médica formada pela <span className="font-bold text-primary">UniFacisa</span>, com pós-graduação em Psiquiatria e especializações em Saúde Mental e Neurociência. Atuo com base no <span className="text-primary font-bold">Método Clínico Centrado na Pessoa (MCCP)</span>, priorizando uma escuta qualificada e individualizada, com objetivo de construir, junto ao paciente, um plano terapêutico singular que promova bem-estar e melhora da qualidade de vida.
            </p>
            <a 
              href="#consultas" 
              onClick={() => handleNavClick('consultas')}
              className="signature-gradient text-white w-full py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform text-xs md:text-sm tracking-widest uppercase"
            >
              QUERO AGENDAR UMA CONSULTA AGORA
            </a>
          </div>
          <div className="lg:w-1/2 flex flex-col items-center gap-8 md:gap-10 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative w-full max-w-sm">
              <div className="hidden md:block absolute -top-6 -right-6 w-full h-full bg-surface-container-low rounded-[2rem] -z-10" />
              <div className="relative z-10 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer transition-all duration-700 hover:shadow-primary/20">
                <Image 
                  src={portraitImg}
                  alt="Dra. Yasmin Cabral Portrait"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <a 
              href="https://www.instagram.com/dra.yasmincabral/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 border border-outline-variant rounded-2xl text-on-surface/60 font-bold hover:bg-surface-container-low transition-colors group justify-center text-sm"
            >
              <Instagram className="w-5 h-5 group-hover:text-primary transition-colors" />
              ME SIGA NO INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section id="consultas" className="py-20 md:py-32 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Como funcionam as consultas</h2>
            <p className="text-on-surface/60 text-base md:text-lg max-w-2xl mx-auto">Escolha o formato que melhor se adapta à sua rotina e necessidade de conforto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] space-y-6 md:space-y-8 hover:shadow-xl transition-shadow border border-outline-variant/50 group"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                <Stethoscope className="w-7 md:w-8 h-7 md:h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Presencial</h3>
                <p className="text-on-surface/60 text-base md:text-lg leading-relaxed">
                  Atendimento acolhedor em consultório preparado para oferecer total privacidade e conforto, localizado em Campina Grande - PB.
                </p>
              </div>
              <a 
                href="https://wa.me/5583986780591?text=Olá%20Dra.%20Yasmin%20Cabral%2C%20gostaria%20de%20agendar%20uma%20consulta%20presencial." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-base md:text-lg hover:gap-4 transition-all"
              >
                Agendar Presencial <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] space-y-6 md:space-y-8 hover:shadow-xl transition-shadow border border-outline-variant/50 group"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shrink-0">
                <Video className="w-7 md:w-8 h-7 md:h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">On-line</h3>
                <p className="text-on-surface/60 text-base md:text-lg leading-relaxed">
                  Atendimento via plataforma Meet com o mesmo rigor técnico e humano, garantindo sigilo e envio de documentos digitais válidos.
                </p>
              </div>
              <a 
                href="https://wa.me/5583986780591?text=Olá%20Dra.%20Yasmin%20Cabral%2C%20gostaria%20de%20agendar%20uma%20consulta%20on-line." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold text-base md:text-lg hover:gap-4 transition-all"
              >
                Agendar On-line <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section id="transtornos" className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center md:text-left">Você se identifica?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: 'Ansiedades', Icon: Frown },
              { label: 'Insônia', Icon: Moon },
              { label: 'Depressão', Icon: Activity },
              { label: 'Transtorno Afetivo Bipolar', Icon: ArrowUpRight },
              { label: 'Transtorno Obsessivo Compulsivo', Icon: Brain },
              { label: 'TDAH', Icon: Zap },
              { label: 'Personalidade e Impulso', Icon: Brain },
              { label: 'Transtornos Alimentares', Icon: Utensils },
              { label: 'Déficits Cognitivos', Icon: Brain },
            ].map(({ label, Icon }, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 md:gap-5 p-5 md:p-6 border border-outline-variant rounded-2xl md:rounded-3xl cursor-default"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-5 md:w-6 h-5 md:h-6" />
                </div>
                <span className="font-bold text-xs md:text-sm tracking-widest uppercase">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="p-6 md:p-8 bg-surface-container-low rounded-[2rem] border border-dashed border-outline-variant text-center">
            <p className="italic text-on-surface/50 text-base md:text-lg">
              &quot;O diagnóstico precoce e o acompanhamento adequado são as chaves para a recuperação da saúde mental.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="atendimentos" className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] border border-outline-variant/50 overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-primary/5">
            <div className="lg:w-1/2 p-10 md:p-12 lg:p-20 space-y-10 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Atendimentos</h2>
                <p className="text-on-surface/60 text-base md:text-lg leading-relaxed">
                  Atendo de forma presencial em Campina Grande/PB e on-line via plataforma Meet, garantindo sigilo e documentos digitais válidos.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl">Endereço</h4>
                    <p className="text-on-surface/60 text-sm md:text-base">Rua Benedito Mota 321, Alto Branco<br />Campina Grande - PB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl">WhatsApp</h4>
                    <p className="text-on-surface/60 text-sm md:text-base">83 98678-0591</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://wa.me/5583986780591?text=Olá%20Dra.%20Yasmin%20Cabral%2C%20gostaria%20de%20agendar%20uma%20consulta." 
                target="_blank"
                rel="noopener noreferrer"
                className="signature-gradient text-white w-full py-5 md:py-6 rounded-2xl font-bold flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform text-base md:text-lg"
              >
                Entrar em contato agora
              </a>
            </div>
            <div className="lg:w-1/2 h-[450px] md:h-[600px] lg:h-auto relative bg-surface-container-high overflow-hidden">
              <iframe 
                title="Localização do consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3314544778175!2d-35.88456632420847!3d-7.202324970716613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a8e0f63a69a2d3%3A0x67399f66710b7f8e!2sRua%20Benedito%20Mota%2C%20321%20-%20Alto%20Branco%2C%20Campina%20Grande%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1710264000000!5m2!1spt-BR!2sbr" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-outline-variant pt-16 md:pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
            <div className="sm:col-span-2 space-y-4 md:space-y-6">
              <div className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary">Dra. Yasmin Cabral</div>
              <p className="text-on-surface/50 max-w-sm text-base md:text-lg">
                Médica Psiquiatra focada em um plano terapêutico singular e bem-estar integral.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h5 className="font-bold text-primary tracking-widest uppercase text-xs md:text-sm">Informações</h5>
              <ul className="space-y-3 text-on-surface/60 text-sm md:text-base">
                <li>Rua Benedito Mota 321, Alto Branco, Campina Grande - PB</li>
                <li className="font-bold">83 98678-0591</li>
              </ul>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h5 className="font-bold text-primary tracking-widest uppercase text-xs md:text-sm">Links</h5>
              <ul className="space-y-3 text-on-surface/60 text-sm md:text-base">
                <li><a href="#" className="hover:text-primary transition-colors">Políticas de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-outline-variant pt-10 text-center text-on-surface/40 text-xs md:text-sm">
            © {new Date().getFullYear()} Dra. Yasmin Cabral - Psiquiatria. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
