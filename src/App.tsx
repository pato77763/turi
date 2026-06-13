import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  Star, 
  Car, 
  ShieldCheck, 
  Instagram, 
  Phone, 
  ArrowRight, 
  Clock, 
  Menu, 
  X, 
  Check, 
  Award,
  Users,
  Navigation
} from 'lucide-react';

// Image Imports for Bundle Consistency (Vite Output Optimization for Vercel/GitHub)
import heroBg from './assets/images/hero_bg.jpg';
import imgParipueira from './assets/images/regenerated_image_1781293976890.jpg';
import imgMilagres from './assets/images/regenerated_image_1781293108040.jpg';
import imgAtrativos from './assets/images/regenerated_image_1781294147849.jpg';
import imgAbout1 from './assets/images/regenerated_image_1781293089868.jpg';
import imgAbout2 from './assets/images/regenerated_image_1781293091968.jpg';
import imgFooter from './assets/images/regenerated_image_1781293109856.jpg';

// Standalone assets / high-quality online fallbacks for missing local images
const imgGunga = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75';
const imgFrances = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=75';
const imgMaragogi = 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=75';
const imgHibiscus = 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=75';
const imgMarape = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=75';
const imgCanions = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=75';
const imgFoz = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75';
const imgAbout3 = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=75';
const imgAbout4 = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75';

// ==========================================================================
// DATA STRUCTURES
// ==========================================================================

interface Tour {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  link: string;
}

const TOURS_DATA: Tour[] = [
  {
    id: 'gunga',
    title: 'Praia do Gunga',
    tag: 'Litoral Sul',
    description: 'Famosa por seu coqueiral infinito e pelas deslumbrantes falésias coloridas esculpidas pela maré. Um clássico que reúne mar e lagoa.',
    image: imgGunga,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Praia%20do%20Gunga'
  },
  {
    id: 'frances',
    title: 'Praia do Francês',
    tag: 'Litoral Sul',
    description: 'Barreiras de corais criam uma impressionante piscina natural de águas calmas e transparentes. Excelente infraestrutura de lazer e gastronomia.',
    image: imgFrances,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Praia%20do%20Francês'
  },
  {
    id: 'paripueira',
    title: 'Praia de Paripueira',
    tag: 'Litoral Norte',
    description: 'Lar do Parque Municipal Marinho, onde a maré baixa revela imensas piscinas naturais repletas de peixes coloridos a quilômetros da areia.',
    image: imgParipueira,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Praia%20de%20Paripueira'
  },
  {
    id: 'maragogi',
    title: 'Maragogi',
    tag: 'Destaque Norte',
    description: 'O Caribe Brasileiro. Conheça as deslumbrantes galés em alto-mar com águas cristalinas inigualáveis e vida marinha exuberante.',
    image: imgMaragogi,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Maragogi'
  },
  {
    id: 'hibiscus',
    title: 'Hibiscus Beach Club',
    tag: 'Beach Club VIP',
    description: 'Localizado na Praia de Ipioca, proporciona conforto e estrutura premium com camas de praia, gastronomia gourmet e mar paradisíaco.',
    image: imgHibiscus,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Hibiscus%20Beach%20Club'
  },
  {
    id: 'marape',
    title: 'Dunas de Marapé',
    tag: 'Litoral Sul',
    description: 'Um dos ecossistemas mais preservados de Alagoas, onde o rio se encontra com o mar em meio a falésias de areias brancas e manguezais.',
    image: imgMarape,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Dunas%20de%20Marapé'
  },
  {
    id: 'canions',
    title: 'Cânions do São Francisco',
    tag: 'Interior do Estado',
    description: 'Navegue de catamarã por entre imensos paredões de pedra avermelhada que contornam o majestoso rio de águas esmeraldas em Xingó.',
    image: imgCanions,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Cânions%20do%20São%20Francisco'
  },
  {
    id: 'foz',
    title: 'Foz do Rio São Francisco',
    tag: 'Litoral Sul',
    description: 'Presencie o espetáculo do encontro do maior rio totalmente brasileiro com o oceano atlântico, contornado por dunas e lagoas.',
    image: imgFoz,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20Foz%20do%20Rio%20São%20Francisco'
  },
  {
    id: 'milagres',
    title: 'São Miguel dos Milagres',
    tag: 'Litoral Norte / Rota Ecológica',
    description: 'Praias intocadas de águas mornas e esmeralda. Rota ecológica, capela de Milagres e uma tranquilidade singular e sofisticada.',
    image: imgMilagres,
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20este%20passeio:%20São%20Miguel%20dos%20Milagres'
  }
];

interface ServiceTab {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  image: string;
  btnText: string;
  link: string;
}

const SERVICES_DATA: Record<string, ServiceTab> = {
  transfer: {
    id: 'transfer',
    tabLabel: 'Transfer Aeroporto',
    title: 'Transfer Aeroporto Maceió',
    desc: 'Recepção personalizada no aeroporto Zumbi dos Palmares com placa de identificação, motoristas executivos dedicados, frota moderna e perfeitamente higienizada, climatização premium e total segurança até o seu hotel ou resort. Disponível 24/7 sob reserva prévia para garantir que sua chegada a Alagoas comece com o máximo conforto e elegância.',
    image: imgAtrativos,
    btnText: 'Reservar Transfer',
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20gostaria%20de%20reservar%20um%20Transfer%20Aeroporto'
  },
  privativos: {
    id: 'privativos',
    tabLabel: 'Passeios Privativos',
    title: 'Passeios Privativos e Exclusivos',
    desc: 'Viva Alagoas no seu próprio ritmo. Nossos passeios privativos oferecem roteiros flexíveis com veículos premium dedicados exclusivamente ao seu grupo. Ideal para casais, famílias ou amigos que buscam privacidade absoluta, conforto incomparável e a liberdade de decidir o tempo de estadia em cada ponto de interesse turísticos.',
    image: imgMaragogi,
    btnText: 'Reservar Agora',
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20gostaria%20de%20saber%20mais%20sobre%20os%20Passeios%20Privativos'
  },
  personalizados: {
    id: 'personalizados',
    tabLabel: 'Passeios Personalizados',
    title: 'Roteiros Totalmente Personalizados',
    desc: 'Crie a viagem que você sempre sonhou. Nós desenhamos roteiros sob medida de acordo com seus gostos, preferências e ritmo individual. Seja combinando destinos paradisíacos no mesmo dia, programando paradas em restaurantes exclusivos à beira-mar ou organizando passeios de lancha luxuosa pelas barreiras de corais.',
    image: imgHibiscus,
    btnText: 'Criar Meu Roteiro',
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20gostaria%20de%20personalizar%20meu%20roteiro%20de%20passeios'
  },
  atrativos: {
    id: 'atrativos',
    tabLabel: 'Atrativos Turísticos',
    title: 'Acesso às Maiores Joias de Alagoas',
    desc: 'Explore as riquezas naturais do nosso litoral com facilidade e sofisticação. Das exuberantes piscinas naturais de Maragogi às fantásticas falésias multicoloridas da Praia do Gunga e à cinematográfica rota de São Miguel dos Milagres, garantimos experiências com suporte logístico de alto padrão e orientação exclusiva de guias atenciosos.',
    image: imgAtrativos,
    btnText: 'Explorar Destinos',
    link: 'https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20conhecer%20os%20atrativos%20turísticos'
  }
};

const TESTIMONIALS = [
  {
    name: 'Mariana Vasconcelos',
    location: 'São Paulo - SP',
    stars: 5,
    text: '“Melhor passeio que fizemos em Maceió. O carro estava extremamente limpo, o motorista foi muito educado e atencioso. A flexibilidade de horários fez toda a diferença.”'
  },
  {
    name: 'Rodrigo Fontes',
    location: 'Belo Horizonte - MG',
    stars: 5,
    text: '“Transfer impecável e atendimento excepcional. Chegamos de madrugada e a recepção foi super pontual e prestativa. Com certeza contrataremos novamente no retorno.”'
  },
  {
    name: 'Juliana M. de Andrade',
    location: 'Rio de Janeiro - RJ',
    stars: 5,
    text: '“Experiência incrível do início ao fim. O roteiro personalizado para Milagres foi espetacular, conhecemos praias descoladas e paramos nos melhores spots de foto.”'
  }
];

// ==========================================================================
// HELPERS & SUB-COMPONENTS
// ==========================================================================

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = '', float = false }: { target: number; suffix?: string; float?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          
          const duration = 1200; // 1.2s to complete
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Cubical ease-out curve
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeProgress * target;

            if (el) {
              el.innerText = float 
                ? current.toFixed(1).replace('.', ',') + suffix 
                : Math.floor(current).toLocaleString('pt-BR') + suffix;
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            } else if (el) {
              el.innerText = float 
                ? target.toFixed(1).replace('.', ',') + suffix 
                : Math.floor(target).toLocaleString('pt-BR') + suffix;
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [target, suffix, float]);

  return (
    <div 
      ref={ref} 
      className="font-heading text-5xl md:text-6xl font-light text-deep-blue leading-none tracking-tight mb-2"
    >
      {float ? "0,0" + suffix : "0" + suffix}
    </div>
  );
}

// ==========================================================================
// MAIN APP COMPONENT
// ==========================================================================

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('transfer');

  // Sticky header background modification on scroll (Throttled with requestAnimationFrame)
  useEffect(() => {
    let ticked = false;
    const handleScroll = () => {
      if (!ticked) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled((prev) => {
            if (prev !== scrolled) return scrolled;
            return prev;
          });
          ticked = false;
        });
        ticked = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler helper
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-dark overflow-x-hidden antialiased selection:bg-ocean-blue selection:text-white">
      
      {/* ==========================================================================
           HEADER (GLASSMORPHISM)
           ========================================================================== */}
      <header 
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-12 py-5 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-light-gray py-3' 
            : 'bg-transparent'
        }`}
      >
        <a 
          href="#inicio" 
          onClick={(e) => handleSmoothScroll(e, '#inicio')}
          className={`font-heading font-bold text-xl md:text-2xl tracking-[2px] transition-colors duration-300 ${
            isScrolled ? 'text-deep-blue' : 'text-white'
          }`}
          id="header-logo"
        >
          AMA TUR MACEIÓ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { href: '#inicio', label: 'Início' },
            { href: '#sobre', label: 'Sobre' },
            { href: '#servicos', label: 'Transfer' },
            { href: '#atrativos', label: 'Atrativos' },
            { href: '#passeios', label: 'Passeios' },
            { href: '#contato', label: 'Contato' }
          ].map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`font-heading text-sm font-medium relative py-1 transition-colors duration-300 group ${
                isScrolled ? 'text-dark hover:text-ocean-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                isScrolled ? 'bg-ocean-blue' : 'bg-white'
              }`} />
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden lg:block">
          <a 
            href="https://wa.me/5582988413764" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocean-blue text-white font-heading text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm hover:bg-deep-blue transition-all duration-300 shadow-sm hover:translate-y-[-1px] hover:shadow-md"
            id="header-whatsapp-btn"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white flex items-center justify-center p-1.5 rounded transition-colors"
          style={{ color: isScrolled ? 'var(--color-dark)' : 'white' }}
          id="menu-toggle"
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="absolute right-0 top-0 w-4/5 max-w-[340px] h-full bg-dark text-white p-8 flex flex-col justify-center gap-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6">
                {[
                  { href: '#inicio', label: 'Início' },
                  { href: '#sobre', label: 'Sobre' },
                  { href: '#servicos', label: 'Transfer' },
                  { href: '#atrativos', label: 'Atrativos' },
                  { href: '#passeios', label: 'Passeios' },
                  { href: '#contato', label: 'Contato' }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="font-heading text-lg font-medium text-white/90 hover:text-ocean-blue transition-colors relative inline-block py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-ocean-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <a 
                  href="https://wa.me/5582988413764" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ocean-blue text-center text-white font-heading font-semibold text-sm tracking-wide px-5 py-3 rounded-sm hover:bg-deep-blue transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Fatar no WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================================================
           HERO SECTION
           ========================================================================== */}
      <section id="inicio" className="h-[96vh] relative px-4 md:px-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark/50 z-10" />
        
        {/* Dynamic Zooming Beach Background */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(16, 26, 36, 0.5) 0%, rgba(16, 26, 36, 0.4) 100%), url('${heroBg}')` 
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 max-w-4xl text-center text-white px-2 mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-xs md:text-sm font-semibold tracking-[4px] text-gold uppercase block mb-4"
          >
            Exclusividade & Conforto
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-light leading-[1.12] mb-6 tracking-tight"
          >
            Viva Alagoas de <span className="font-semibold block md:inline-block">Forma Exclusiva</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-white/90 text-sm sm:text-base md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed md:leading-loose"
          >
            Transfers privativos, passeios personalizados e experiências inesquecíveis pelos destinos mais espetaculares do Nordeste brasileiro.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            id="hero-buttons"
          >
            <a 
              href="https://wa.me/5582988413764" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-ocean-blue text-white font-heading font-medium tracking-wide text-sm py-4 px-8 rounded-sm hover:bg-deep-blue transition-all duration-300 shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02]"
              id="hero-btn-reserve"
            >
              Reservar Agora
            </a>
            <a 
              href="#passeios" 
              onClick={(e) => handleSmoothScroll(e, '#passeios')}
              className="w-full sm:w-auto bg-white/10 active:bg-white/20 border border-white/40 text-white font-heading font-medium tracking-wide text-sm py-4 px-8 rounded-sm hover:bg-white/20 hover:border-white transition-all duration-300"
              id="hero-btn-tours"
            >
              Conhecer Passeios
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
           SEÇÃO INSTITUCIONAL (ABOUT)
           ========================================================================== */}
      <section id="sobre" className="py-24 px-4 md:px-12 bg-white flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal>
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                Quem Somos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight mb-8">
                Especialistas em <span className="font-semibold block text-deep-blue mt-1">Turismo Receptivo em Alagoas</span>
              </h2>
              <p className="text-muted text-base md:text-lg mb-6 leading-relaxed font-light">
                A <strong>AMA TUR MACEIÓ</strong> oferece atendimento personalizado e de alto padrão para quem busca conforto, segurança e momentos autênticos durante sua viagem a Alagoas. 
              </p>
              <p className="text-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Atuamos com transfers de e para o aeroporto, passeios privativos com rotas flexíveis e atendimento vip com motoristas orientados para fazer do seu roteiro uma verdadeira experiência cinematográfica.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="https://wa.me/5582988413764"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-dark text-white font-heading font-medium text-sm py-3.5 px-7 rounded-sm hover:bg-deep-blue transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  id="about-btn-whatsapp"
                >
                  Falar Conosco no WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] shadow-xl max-w-2xl mx-auto w-full">
              <img 
                src={imgAbout1} 
                alt="Veículo de luxo e receptivo personalizado em Maceió" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================================================
           NÚMEROS DA EMPRESA (METRICS)
           ========================================================================== */}
      <section id="metrics-section" className="py-16 px-4 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 p-8 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            
            <div className="text-center relative">
              <AnimatedCounter target={10000} suffix="+" />
              <div className="font-heading text-xs font-semibold text-dark uppercase tracking-widest">
                Turistas Atendidos
              </div>
              <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px bg-black/10" />
            </div>

            <div className="text-center relative">
              <AnimatedCounter target={500} suffix="+" />
              <div className="font-heading text-xs font-semibold text-dark uppercase tracking-widest">
                Passeios Realizados
              </div>
              <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px bg-black/10" />
            </div>

            <div className="text-center relative">
              <AnimatedCounter target={100} suffix="%" />
              <div className="font-heading text-xs font-semibold text-dark uppercase tracking-widest">
                Atendimento Personalizado
              </div>
              <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px bg-black/10" />
            </div>

            <div className="text-center">
              <AnimatedCounter target={5} suffix="" float={true} />
              <div className="font-heading text-xs font-semibold text-dark uppercase tracking-widest justify-center flex items-center gap-1">
                Avaliação de Clientes
                <div className="flex gap-0.5 text-amber-400">
                  <Star fill="currentColor" size={13} stroke="none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
           EXPERIÊNCIAS EXCLUSIVAS (ASYMMETRIC COEXISTENCE)
           ========================================================================== */}
      <section className="py-24 px-4 md:px-12 bg-white flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-black/5 aspect-[4/5] sm:aspect-[3/4]">
                <img 
                  src={imgAbout2} 
                  alt="Turismo em Maceió Alagoas" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-black/5 aspect-[4/5] sm:aspect-[3/4] mt-8 lg:mt-12">
                <img 
                  src={imgAbout3} 
                  alt="Beleza natural das águas e corais" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                Viva o Inesquecível
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight mb-8">
                Turismo com Atendimento <span className="font-semibold block text-deep-blue mt-1">Humano e Atencioso</span>
              </h2>
              <p className="text-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Nossa filosofia é clara: ir além de um tradicional transporte receptivo. Nós criamos experiências fluidas, cuidando minuciosamente de todos os detalhes de trânsito, praias sugeridas, apoio logístico e cronômetro de maré. Queremos que você explore a beleza de Alagoas focado puramente em sentir cada instante.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="#passeios" 
                  onClick={(e) => handleSmoothScroll(e, '#passeios')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dark text-white font-heading font-medium text-sm py-3.5 px-7 rounded-sm hover:bg-deep-blue transition-all duration-300"
                  id="experiences-btn-explore"
                >
                  Explorar Experiências
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ==========================================================================
           SEÇÃO DE SERVIÇOS (INTERACTIVE TABS)
           ========================================================================== */}
      <section id="servicos" className="py-24 px-4 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                Serviços de Alto Padrão
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight">
                Nossas <span className="font-semibold text-deep-blue">Soluções de Viagem</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start col-span-12">
            
            {/* Interactive Tab Selectors -> Decoupled and isolated in a plain solid grid cell to completely prevent overlays */}
            <div className="lg:col-span-4 w-full">
              <ScrollReveal delay={0.15}>
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 lg:border-l-2 border-black/10 lg:pl-6">
                  {Object.values(SERVICES_DATA).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`font-heading text-sm md:text-lg text-left px-4 lg:px-0 py-2 whitespace-nowrap transition-all duration-300 relative font-medium focus:outline-none ${
                        activeTab === tab.id 
                          ? 'text-deep-blue font-semibold scale-102 translate-x-1 lg:translate-x-2' 
                          : 'text-muted hover:text-dark'
                      }`}
                    >
                      {tab.tabLabel}
                      {activeTab === tab.id && (
                        <motion.div 
                          layoutId="activeTabUnderline"
                          className="absolute bottom-[-1px] lg:bottom-auto lg:left-[-26px] left-0 w-full lg:w-[3px] h-[3px] lg:h-full bg-ocean-blue"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Dynamic Content Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-12 border border-black/5"
                >
                  <div className="md:col-span-6 h-60 md:h-auto min-h-[280px] overflow-hidden">
                    <img 
                      src={SERVICES_DATA[activeTab].image} 
                      alt={SERVICES_DATA[activeTab].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl font-semibold text-dark mb-4 leading-snug">
                      {SERVICES_DATA[activeTab].title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed font-light mb-8">
                      {SERVICES_DATA[activeTab].desc}
                    </p>
                    <div>
                      <a 
                        href={SERVICES_DATA[activeTab].link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-dark hover:bg-deep-blue text-white font-heading font-medium text-xs uppercase tracking-wider py-3.5 px-6 rounded-sm transition-all duration-300"
                        id="service-detail-btn"
                      >
                        {SERVICES_DATA[activeTab].btnText}
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
           ATRATIVOS TURÍSTICOS (CENTURION - CORES DE ALAGOAS)
           ========================================================================== */}
      <section id="atrativos" className="py-24 px-4 md:px-12 bg-white overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="hidden lg:block lg:col-span-3">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-black/5">
                <img 
                  src={imgAtrativos} 
                  alt="Praia paradisíaca de Alagoas" 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 text-center px-4">
            <ScrollReveal delay={0.15}>
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                Destinos dos Sonhos
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight mb-6">
                Os Destinos Mais <span className="font-semibold text-deep-blue block sm:inline">Desejados de Alagoas</span>
              </h2>
              <p className="text-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Com águas cristalinas oscilando entre o verde-esmeralda e o azul turquesa mais puro, piscinas naturais aquecidas ao lombo dos corais, imensos coqueirais ondulantes e a calma hospitaleira da Rota Ecológica de Milagres. A <strong>AMA TUR MACEIÓ</strong> conduz você a cenários dignos de cinema com exclusividade e o repouso absoluto que o seu merecimento exige.
              </p>
              
              {/* Responsive Elegant Mobile Banner - Displays only on Mobile/Tablet */}
              <div className="block lg:hidden mt-8 mb-10 w-full max-w-sm mx-auto aspect-[16/10] max-h-52 rounded-2xl overflow-hidden shadow-md border border-black/5">
                <img 
                  src={imgAbout4} 
                  alt="Coqueirais sob o azul do mar alagoano" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex justify-center gap-2 text-gold">
                <Compass className="animate-spin-slow text-ocean-blue" size={24} />
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <ScrollReveal delay={0.25}>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-black/5">
                <img 
                  src={imgFrances} 
                  alt="Coqueiral e mar turquesa em Alagoas" 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ==========================================================================
           PORTFÓLIO DE PASSEIOS (CARDS GRID)
           ========================================================================== */}
      <section id="passeios" className="py-24 px-4 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                Roteiros Disponíveis
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight mb-4">
                Nosso <span className="font-semibold text-deep-blue">Portfólio de Passeios</span>
              </h2>
              <p className="text-muted text-sm md:text-base font-light">
                Selecione o seu destino ideal e garanta uma experiência inesquecível de requinte e comunhão com a natureza alagoana.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS_DATA.map((tour, index) => (
              <div key={tour.id}>
                <ScrollReveal delay={0.1 * (index % 3)}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider bg-dark/85 backdrop-blur-md text-gold px-3.5 py-1.5 rounded-full">
                      {tour.tag}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                        {tour.title}
                      </h3>
                      <p className="text-muted text-sm md:text-base font-light leading-relaxed mb-6">
                        {tour.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <a 
                        href={tour.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-deep-blue hover:text-ocean-blue font-heading text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                        id={`tour-btn-${tour.id}`}
                      >
                        Escolher Passeio
                        <ArrowRight size={14} className="transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
           SEÇÃO DE DESTAQUE (MARAGOGI DETAILED CASE STUDY)
           ========================================================================== */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-sand rounded-3xl overflow-hidden border border-black/5 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            <div className="h-72 lg:h-[540px] overflow-hidden">
              <img 
                src={imgFooter} 
                alt="As Galés de Maragogi" 
                className="w-full h-full object-cover hover:scale-102 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="font-heading text-xs uppercase tracking-widest text-[#005B96] font-semibold mb-4 block">
                Passeio Imperdível
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-dark leading-tight mb-6">
                O Passeio Mais Cobiçado: <span className="font-semibold block text-deep-blue mt-1">Galés de Maragogi</span>
              </h2>
              <p className="text-muted text-base md:text-lg mb-8 leading-relaxed font-light">
                Viva a experiência formidável de flutuar nas piscinas naturais em pleno alto-mar formadas a 6 km da costa continental. Mergulhe em corais vivos, cardumes coloridos e na calmaria d'água de temperatura caribenha do nosso norte majestoso.
              </p>
              <div>
                <a 
                  href="https://wa.me/5582988413764?text=Olá%20AMA%20TUR%20MACEIÓ,%20quero%20reservar%20o%20passeio%20destaque%20Maragogi"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-ocean-blue hover:bg-deep-blue text-white font-heading font-medium text-sm py-4 px-8 rounded-sm transition-all duration-300 shadow-md"
                  id="featured-btn-whatsapp"
                >
                  Reservar Maragogi
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
           BANNER DE INSPIRAÇÃO PREMIUM
           ========================================================================== */}
      <section className="h-[460px] relative flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-dark/65 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${heroBg}')`
          }}
        />

        <div className="relative z-20 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-light text-white leading-tight mb-4 tracking-tight">
              Alagoas Vai Muito Além do Cartão-Postal
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Experiências exclusivas criadas sob medida para você reescrever o seu conceito de férias tropicais no paraíso.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================================================
           DEPOIMENTOS (TESTIMONIALS)
           ========================================================================== */}
      <section id="depoimentos" className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-heading text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                Reconhecimento
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-dark leading-tight">
                Opinião de Quem <span className="font-semibold text-deep-blue">Viajou Conosco</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index}>
                <ScrollReveal delay={index * 0.15}>
                  <div className="bg-white border border-black/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex gap-1 text-amber-400 mb-6">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} fill="currentColor" stroke="none" size={16} />
                        ))}
                      </div>
                      <p className="text-dark italic font-light text-base leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-dark">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted text-xs">
                          {testimonial.location}
                        </p>
                      </div>
                      <Check className="text-emerald-500 bg-emerald-50 p-0.5 rounded-full" size={18} />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
           CTA FINAL (RESERVATION TRIGGER)
           ========================================================================== */}
      <section id="contato" className="py-24 px-4 md:px-12 bg-deep-blue relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/95 to-ocean-blue/30 z-10" />
        
        <div className="relative z-20 max-w-3xl text-center text-white">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 text-white">
              Pronto Para Conhecer o <span className="font-semibold block sm:inline text-gold">Paraíso?</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Fale agora com nossa equipe de concierge via WhatsApp e receba suporte para planejar e agendar todos os seus passeios e transfers.
            </p>
            <div>
              <a 
                href="https://wa.me/5582988413764"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-dark font-heading font-semibold tracking-wider text-sm md:text-base uppercase px-8 py-4 rounded-sm hover:bg-white hover:scale-[1.02] shadow-xl hover:shadow-white/10 transition-all duration-300"
                id="final-cta-btn-whatsapp"
              >
                Planejar Meu Itinerário
                <Compass size={18} className="animate-spin-slow" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================================================
           FOOTER
           ========================================================================== */}
      <footer className="bg-[#111A24] text-white/60 py-16 px-4 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/5">
          
          <div className="lg:col-span-6 pr-0 md:pr-12">
            <h3 className="font-heading text-white font-bold text-xl tracking-[1.5px] uppercase mb-5">
              AMA TUR MACEIÓ
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-md">
              Oferecemos a forma mais confortável, segura e requintada de conhecer os destinos paradisíacos de Alagoas. Uma empresa consolidada no turismo receptivo de luxo e suporte premium 24/7.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Menu
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre' },
                { href: '#servicos', label: 'Transfer e Serviços' },
                { href: '#atrativos', label: 'Atrativos' },
                { href: '#passeios', label: 'Passeios' },
                { href: '#contato', label: 'Reserva & Contato' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-ocean-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <span className="text-gold">📞</span>
                <a href="tel:+5582988413764" className="hover:text-ocean-blue transition-colors">+55 (82) 98841-3764</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold">📍</span>
                <span>Maceió - Alagoas</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold">📱</span>
                <a href="https://wa.me/5582988413764" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-blue transition-colors">WhatsApp Direct</a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold">📸</span>
                <a href="https://instagram.com/amaturmaceio" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-blue transition-colors">@amaturmaceio</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-light gap-4">
          <p>© 2026 AMA TUR MACEIÓ. Todos os direitos reservados.</p>
          <p className="tracking-wide">Design de Luxo & Alta Conversão em React</p>
        </div>
      </footer>

    </div>
  );
}
