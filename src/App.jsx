import { useState } from "react";
import { ArrowUpRight, ArrowRight, Instagram, Mail } from "lucide-react";
import { projects } from "./data/projects";
import { ProjectVideo } from "./components/ProjectVideo";
import { HeroReel } from "./components/HeroReel";
import { LanguageProvider, translateProject, useLanguage } from "./i18n";

const categories = ["Todos", ...new Set(projects.map(project => project.category))];

export default function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>;
}

function Portfolio() {
  const { language, setLanguage, copy: t } = useLanguage();
  const contact = `https://wa.me/5562993986160?text=${encodeURIComponent(t.contactMessage)}`;
  const [filter, setFilter] = useState("Todos");
  const [activePlayer, setActivePlayer] = useState(null);
  const visible = projects.filter(project => filter === "Todos" || project.category === filter).map(project => translateProject(project, language));
  const featured = projects[0] && translateProject(projects[0], language);
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label={t.home}>Ojoaouai<span>.</span></a>
        <nav aria-label={t.navigation}><a href="#trabalhos">{t.work}</a><a href="#sobre">{t.about}</a></nav>
        <div className="header-actions">
          <a className="contact-link" href={contact} target="_blank" rel="noreferrer">{t.headerCta} <ArrowUpRight size={17} /></a>
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            {[{ code: "en", name: "English" }, { code: "pt", name: "Português" }, { code: "es", name: "Español" }].map(item => (
              <button type="button" key={item.code} lang={item.code} aria-label={item.name} title={item.name}
                aria-pressed={language === item.code} onClick={() => setLanguage(item.code)}>{item.code.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </header>
      <main>
        <section className="hero section-width" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {t.eyebrow}</p>
            <h1>{t.headline}<br /><span>{t.headlineAccent}</span></h1>
            <p className="intro">{t.intro}</p>
            <div className="hero-actions"><a className="primary-button" href={contact} target="_blank" rel="noreferrer">{t.heroCta} <ArrowUpRight size={18} /></a><a className="secondary-button" href="#trabalhos">{t.seeWork} <ArrowDownIcon /></a></div>
            <div className="specialties"><span>VSL</span><span>Microlead</span><span>{t.specialtiesAds}</span></div>
          </div>
          {featured && <HeroReel project={featured} suspended={activePlayer !== null && activePlayer !== "hero"} onActivate={() => setActivePlayer("hero")} />}
        </section>
        <section className="work-section" id="trabalhos">
          <div className="section-width">
            <div className="section-heading"><div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}<span>.</span></h2></div><p>{t.workSubtitle}</p></div>
            <div className="filters" aria-label={t.filterLabel}>{categories.map(category => <button key={category} aria-pressed={filter === category} onClick={() => setFilter(category)} className={filter === category ? "active" : ""}>{t.categories[category]}</button>)}</div>
            <div className="project-grid">{visible.map((project, index) => (
              <ProjectVideo key={project.video} project={project} index={index}
                active={activePlayer === project.video} onActivate={() => setActivePlayer(project.video)} />
            ))}</div>
          </div>
        </section>
        <section className="about-section section-width" id="sobre">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <div><h2>{t.aboutTitle}<br /><span>{t.aboutAccent}</span></h2><p>{t.aboutText}</p><div className="about-tags">{t.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </section>
        <section className="cta-section section-width" id="contato"><p className="eyebrow">{t.ctaEyebrow}</p><h2>{t.ctaTitle}<br /><em>{t.ctaAccent}</em></h2><a className="primary-button" href={contact} target="_blank" rel="noreferrer">{t.ctaButton} <ArrowUpRight size={19} /></a></section>
      </main>
      <footer className="section-width"><a className="wordmark" href="#inicio">Ojoaouai<span>.</span></a><span>© {new Date().getFullYear()} · {t.footer}</span><div><a href="https://www.instagram.com/ojaouai/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a><a href={contact} target="_blank" rel="noreferrer" aria-label={t.whatsapp}><Mail size={19} /></a></div></footer>
    </>
  );
}
function ArrowDownIcon() { return <ArrowRight size={18} className="arrow-down" />; }
