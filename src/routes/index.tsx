import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Play, ArrowRight, Instagram, Mail, Eye, TrendingUp, Layers, Target,
  Film, Mic2, Scissors, Volume2, Magnet, MousePointerClick, Quote,
  ChevronRight, Zap
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import editorPortrait from "@/assets/editor-portrait.jpg";
import timelineMockup from "@/assets/timeline-mockup.jpg";
import thumbVsl from "@/assets/thumb-vsl.jpg";
import thumbVsl2 from "@/assets/thumb-vsl2.jpg";
import thumbUgc from "@/assets/thumb-ugc.jpg";
import thumbTiktok from "@/assets/thumb-tiktok.jpg";
import thumbFacebook from "@/assets/thumb-facebook.jpg";
import thumbYoutube from "@/assets/thumb-youtube.jpg";
export default Index;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "O JAO — Editor de VSL & Anúncios de Alta Conversão" },
      { name: "description", content: "Especialista em edição de VSL, UGC e anúncios para TikTok, Facebook e YouTube. Vídeos que prendem atenção e geram vendas." },
      { property: "og:title", content: "Jão — Editor de VSL & Direct Response" },
      { property: "og:description", content: "Vídeos que prendem atenção e geram vendas. +10M de views gerados." },
    ],
  }),
});

const categories = ["Todos", "VSL", "UGC", "TikTok Ads", "Facebook Ads", "YouTube Ads"] as const;

const projects = [
  { title: "Suplemento — VSL Long Form", category: "VSL", img: thumbVsl2, metric: "ROAS 4.8x" },
  { title: "Skincare UGC Hook", category: "UGC", img: thumbUgc, metric: "62% retenção" },
  { title: "TikTok Native Ad", category: "TikTok Ads", img: thumbTiktok, metric: "1.2M views" },
  { title: "Curso Online VSL", category: "VSL", img: thumbVsl, metric: "8.3% CTR" },
  { title: "E-commerce Catalog", category: "Facebook Ads", img: thumbFacebook, metric: "CPA -41%" },
  { title: "Mentoria — YouTube Ad", category: "YouTube Ads", img: thumbYoutube, metric: "11M views" },
];

const stats = [
  { icon: Eye, value: "+10M", label: "Views gerados" },
  { icon: TrendingUp, value: "62%", label: "Retenção média" },
  { icon: Layers, value: "120+", label: "Criativos entregues" },
  { icon: Target, value: "14", label: "Nichos validados" },
];

const process = [
  { icon: Mic2, title: "Roteiro", desc: "Estruturas de Direct Response validadas." },
  { icon: Magnet, title: "Hook", desc: "Os 3 primeiros segundos que prendem o scroll." },
  { icon: Scissors, title: "Edição", desc: "Cortes cirúrgicos, ritmo agressivo, zero gordura." },
  { icon: Volume2, title: "Sound Design", desc: "SFX e mixagem que disparam emoção." },
  { icon: Zap, title: "Retenção", desc: "Pattern interrupts a cada 4 segundos." },
  { icon: MousePointerClick, title: "CTA", desc: "Chamada que converte vista em venda." },
];

const testimonials = [
  { name: "Rafael Mendes", role: "Copy", text: "Triplicou meu ROAS em 3 semanas. As VSLs do Jão são absurdas — retenção que eu nunca tinha visto." },
  { name: "Camila Souza", role: "Head de Mídia", text: "O nível de detalhe na edição faz a diferença entre um anúncio comum e um anúncio que escala. Sem comparação." },
  { name: "Lucas Ferreira", role: "Gestor de Tráfego", text: "Trabalhar com ele virou vantagem competitiva. Meus criativos não morrem, eles escalam." },
];

const tools = ["Minimax", "Motion Design", "CapCut", "Hey Gen"];

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen relative">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-dark border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-primary red-glow grid place-items-center">
            <Zap className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
          </div>
          <span className="font-display text-2xl tracking-wider">O JAO<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#projetos" className="hover:text-foreground transition">Projetos</a>
          <a href="#processo" className="hover:text-foreground transition">Processo</a>
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a href="#contato" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-wider red-glow hover:bg-primary/90 transition">
          Contratar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </header>
  );
}

function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary animate-float"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 8)}s`,
            animationDuration: `${6 + (i % 6)}s`,
            opacity: 0.4 + ((i % 5) / 10),
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 pb-20 overflow-hidden grid-bg">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 gradient-radial-red" />
      <Particles />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-6rem)]">
        <div className="lg:col-span-7 space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Aceitando projetos · Maio</span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92] uppercase">
            Eu edito vídeos que <span className="text-primary text-glow animate-flicker">prendem atenção</span> e geram <span className="italic font-sans font-black">vendas</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Especialista em <span className="text-foreground font-semibold">VSL, UGC</span> e anúncios para
            <span className="text-foreground font-semibold"> TikTok, Facebook e YouTube</span>. Edição cirúrgica focada em retenção, emoção e conversão.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projetos" className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-widest text-sm red-glow-strong hover:scale-105 transition-transform">
              Ver Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contato" className="inline-flex items-center gap-2 border border-border px-6 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition">
              Briefing rápido
            </a>
          </div>

          <div className="flex gap-8 pt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div><span className="text-primary text-2xl font-display block">+10M</span> Views</div>
            <div className="border-l border-border pl-8"><span className="text-primary text-2xl font-display block">62%</span> Retenção</div>
            <div className="border-l border-border pl-8"><span className="text-primary text-2xl font-display block">4.8x</span> ROAS</div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative aspect-[4/5] glass-dark red-glow overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <img
              src={timelineMockup}
              alt="Timeline de edição"
              className="absolute inset-x-4 top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] mix-blend-screen opacity-90"
              width={1280}
              height={768}
            />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
              <span className="text-primary">● REC</span>
              <span className="text-muted-foreground">00:00:08:14 / 00:00:32:00</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-4 inset-x-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              <div className="scan-line flex-1" />
              <span>Project · vsl_master_v07.prproj</span>
              <div className="scan-line flex-1" />
            </div>
          </div>

          {/* Floating frame */}
          <div className="absolute -bottom-8 -left-8 w-44 aspect-[9/16] glass-dark red-glow overflow-hidden hidden md:block">
            <img src={thumbTiktok} alt="" className="w-full h-full object-cover opacity-90" width={800} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            <div className="absolute bottom-2 left-2 right-2 font-mono text-[9px] uppercase text-primary">
              · Hook 0:02 · CTA 0:28
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Scroll ↓
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["VSL Long-Form", "Direct Response", "Hook Mastery", "Pattern Interrupts", "Sound Design", "UGC Native", "Performance Editing", "Retention First"];
  return (
    <div className="border-y border-border bg-surface overflow-hidden py-5">
      <div className="flex gap-12 whitespace-nowrap animate-ticker font-display text-3xl md:text-4xl uppercase">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionLabel num="01" title="Resultados" />
        <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mb-16 leading-tight">
          Números <span className="text-primary text-glow">não mentem</span> — anúncios que escalam.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <div key={i} className="group relative bg-background p-8 md:p-10 hover:bg-surface transition-colors">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity gradient-radial-red" />
              <div className="relative space-y-4">
                <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                <div className="font-display text-5xl md:text-6xl text-foreground group-hover:text-primary transition-colors">
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/50">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState<typeof categories[number]>("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projetos" className="relative py-24 md:py-32 bg-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel num="02" title="Portfólio" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <h2 className="font-display text-4xl md:text-6xl uppercase max-w-2xl leading-tight">
            Vídeos que <span className="text-primary text-glow">vendem</span>.
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary red-glow"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const isVertical = ["TikTok Ads", "UGC"].includes(project.category) || index % 3 === 1;
  return (
    <article className={`group relative overflow-hidden bg-background border border-border hover:border-primary/60 transition-all duration-500 hover:red-glow ${isVertical ? "aspect-[4/5]" : "aspect-video"}`}>
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-70 transition" />

      {/* Play button */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-16 h-16 rounded-full border-2 border-primary bg-background/30 backdrop-blur-sm grid place-items-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 red-glow">
          <Play className="w-6 h-6 text-primary fill-primary ml-1" />
        </div>
      </div>

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-primary/20 text-primary border border-primary/40 backdrop-blur-sm">
          {project.category}
        </span>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">0{index + 1}</span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
          {project.metric}
        </div>
        <h3 className="font-display text-2xl uppercase leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>
    </article>
  );
}

function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionLabel num="03" title="Processo" />
        <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mb-16 leading-tight">
          A engenharia por trás de <span className="text-primary text-glow">cada corte</span>.
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {process.map((p, i) => (
              <div key={p.title} className="relative bg-background p-6 group hover:bg-surface transition">
                <div className="absolute -top-px left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="font-mono text-[10px] text-primary mb-4">STEP / 0{i + 1}</div>
                <div className="w-12 h-12 border border-primary/40 bg-primary/5 grid place-items-center mb-4 group-hover:red-glow transition">
                  <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-red opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionLabel num="04" title="Depoimentos" />
        <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mb-16 leading-tight">
          Quem contrata <span className="text-primary text-glow">volta</span>.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative glass-dark p-8 hover:red-glow transition-all duration-500 hover:-translate-y-1">
              <Quote className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <p className="text-foreground/90 text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-display text-xl uppercase">{t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
              </div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-muted-foreground/40">0{i + 1}/03</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-primary/40 red-glow">
            <img
              src={editorPortrait}
              alt="O editor"
              className="w-full h-full object-cover grayscale-[20%]"
              loading="lazy"
              width={896}
              height={1152}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-primary">
              <span>● Editor</span>
              <span>GO — BR</span>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 px-3 py-1 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest rotate-3 red-glow">
            Since 2023
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <SectionLabel num="05" title="Sobre" />
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            Editor focado em <span className="text-primary text-glow">retenção</span>, emoção e <span className="text-primary text-glow">conversão</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Mais de 2 anos editando criativos para founders, agências e gestores de tráfego. Cada corte é uma decisão sobre psicologia de vendas — não estética. Meu trabalho é fazer o espectador rolar até o CTA.
          </p>

          <div className="space-y-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Stack</div>
            <div className="flex flex-wrap gap-2">
              {tools.map(t => (
                <span key={t} className="px-4 py-2 border border-border bg-surface text-sm font-medium hover:border-primary hover:text-primary transition">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 gradient-radial-red" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-10">
        <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary animate-flicker">
          ━ Última chamada ━
        </div>
        <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9]">
          Seu anúncio pode parecer <span className="line-through text-muted-foreground/60">comum</span>…
          <br />
          <span className="text-primary text-glow">ou impossível de ignorar.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Vagas limitadas para projetos sérios. Se você vende algo de verdade, vamos conversar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="https://wa.me/5562993986160?text=Olá! Vi seu portifólio e gostaria de fazer um orçamento!"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 font-bold uppercase tracking-widest text-sm red-glow-strong hover:scale-105 transition-transform animate-pulse-glow"
          >
            Entrar em Contato
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Resposta em ~2h úteis
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-sm bg-primary red-glow grid place-items-center">
              <Zap className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
            </div>
            <span className="font-display text-2xl tracking-wider">O JAO<span className="text-primary">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Edição de vídeo focada em performance. VSL · UGC · Direct Response.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Conexões</div>
          <ul className="space-y-3 text-sm">
            <li><a href="https://www.instagram.com/ojaouai/" className="flex items-center gap-3 hover:text-primary transition group"><Instagram className="w-4 h-4" /> <span className="group-hover:translate-x-1 transition">Instagram</span></a></li>
            <li><a href="#" className="flex items-center gap-3 hover:text-primary transition group"><Film className="w-4 h-4" /> <span className="group-hover:translate-x-1 transition">TikTok</span></a></li>
            <li><a href="https://discord.com/users/ojaouai" className="flex items-center gap-3 hover:text-primary transition group"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.085-2.157-2.42 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z"/></svg> <span className="group-hover:translate-x-1 transition">Discord</span></a></li>
            <li><a href="https://wa.me/5562993986160?text=Olá! Vi seu portifólio e gostaria de fazer um orçamento!" className="flex items-center gap-3 hover:text-primary transition group"><Mail className="w-4 h-4" /> <span className="group-hover:translate-x-1 transition">WhatsApp</span></a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Status</div>
          <div className="space-y-2 font-mono text-xs text-muted-foreground">
            <div>● <span className="text-foreground">Disponível</span> · Maio 2026</div>
            <div>GO · Brasil</div>
            <div>UTC-3</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <div>© 2026 O JAO · Todos os direitos reservados</div>
        <div>Cortes que convertem.</div>
      </div>
    </footer>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-[0.4em] text-primary">
      <span>{num}</span>
      <div className="w-12 h-px bg-primary" />
      <span>{title}</span>
    </div>
  );
}
