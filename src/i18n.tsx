import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { PortfolioProject } from "./data/projects";

export type Language = "en" | "pt" | "es";
const pt = {
  languageLabel: "Selecionar idioma", home: "Ojoaouai, início", navigation: "Navegação principal",
  work: "Trabalhos", about: "Sobre", headerCta: "Vamos escalar sua oferta",
  eyebrow: "EDIÇÃO PARA DIRECT RESPONSE", headline: "Pare o scroll.", headlineAccent: "Venda a oferta.",
  intro: "VSLs, microleads e ads editados para segurar a atenção, construir desejo e conduzir ao clique. Hook forte. Ritmo preciso. CTA no ponto.",
  heroCta: "Quero vender com vídeo", seeWork: "Ver edições na prática", specialtiesAds: "Ads & Criativos",
  workEyebrow: "01 / PORTFÓLIO", workTitle: "Edição para quem vende", workSubtitle: "Hook. Retenção. Conversão.", filterLabel: "Filtrar trabalhos",
  categories: { Todos: "Todos", VSL: "VSL", Microlead: "Microlead", "Ads / Criativos": "Ads / Criativos" },
  aboutEyebrow: "02 / SOBRE", aboutTitle: "Hook que segura.", aboutAccent: "Edição que conduz.",
  aboutText: "Sou Ojoaouai. Edito para direct response: dou ritmo à sua copy, destaco o mecanismo, reforço a prova e preparo o terreno para o CTA. Cada corte trabalha a favor da sua oferta.",
  tags: ["Hook & retenção", "Prova & mecanismo", "Sound design"],
  ctaEyebrow: "SUA OFERTA ESTÁ PRONTA. E O SEU CRIATIVO?", ctaTitle: "Faça o próximo clique", ctaAccent: "começar na edição.", ctaButton: "Quero minha oferta em ação",
  footer: "VSL · Microlead · Ads. Direct response em cada corte.", whatsapp: "Contato pelo WhatsApp",
  contactMessage: "Olá! Vi o portfólio Ojoaouai e quero conversar sobre a edição de uma VSL ou criativo para minha oferta.",
  pageTitle: "Ojoaouai — VSL, Microlead & Ads", description: "Ojoaouai — Edição de VSLs, microleads e ads para direct response. Hook, retenção e CTA a serviço da sua oferta.",
  player: { watch: "Assistir", watchSound: "Assistir com som", play: "Reproduzir vídeo", pausePreview: "Pausar prévia", playPreview: "Reproduzir prévia", fullVideos: "Vídeos completos", featured: "Vídeo em destaque", error: "Não foi possível carregar este vídeo." },
  projects: {
    "microlead.mp4": { title: "Microlead · PT/BR", metric: "Narrativa, edição e sound design" },
    "breaking-news-ed.mp4": { title: "Breaking News · ED Microlead", metric: "Microlead em formato de notícia" },
    "religioso.mp4": { title: "VSL · Religioso", metric: "Narrativa e edição de longa duração" },
    "ad-news.mp4": { title: "AD · News", metric: "Estrutura de notícia e construção de atenção" },
    "ad-ugc.mp4": { title: "AD · UGC · Full AI", metric: "Formato nativo e linguagem de criativo" },
    "ad-info.mp4": { title: "AD · Info · Full AI", metric: "Copy, edição e progressão da oferta" },
    "ad-diabetes.mp4": { title: "AD · Diabetes · Full AI", metric: "Edição de criativo para direct response" },
  },
};
type Copy = typeof pt;
const en: Copy = {
  languageLabel: "Select language", home: "Ojoaouai, home", navigation: "Main navigation",
  work: "Work", about: "About", headerCta: "Let's scale your offer",
  eyebrow: "EDITING FOR DIRECT RESPONSE", headline: "Stop the scroll.", headlineAccent: "Sell the offer.",
  intro: "VSLs, microleads and ads edited to hold attention, build desire and drive the click. Strong hooks. Precise pacing. A CTA that lands.",
  heroCta: "I want videos that sell", seeWork: "See the edits in action", specialtiesAds: "Ads & Creatives",
  workEyebrow: "01 / PORTFOLIO", workTitle: "Editing for people who sell", workSubtitle: "Hook. Retention. Conversion.", filterLabel: "Filter work",
  categories: { Todos: "All", VSL: "VSL", Microlead: "Microlead", "Ads / Criativos": "Ads / Creatives" },
  aboutEyebrow: "02 / ABOUT", aboutTitle: "Hooks that hold.", aboutAccent: "Edits that drive action.",
  aboutText: "I'm Ojoaouai. I edit for direct response: I give your copy momentum, highlight the mechanism, reinforce the proof and set up the CTA. Every cut works for your offer.",
  tags: ["Hooks & retention", "Proof & mechanism", "Sound design"],
  ctaEyebrow: "YOUR OFFER IS READY. IS YOUR CREATIVE?", ctaTitle: "Make the next click", ctaAccent: "start with the edit.", ctaButton: "Put my offer in motion",
  footer: "VSL · Microlead · Ads. Direct response in every cut.", whatsapp: "Contact on WhatsApp",
  contactMessage: "Hi! I saw the Ojoaouai portfolio and would like to discuss editing a VSL or ad creative for my offer.",
  pageTitle: "Ojoaouai — VSL, Microlead & Ads", description: "Ojoaouai — VSL, microlead and ad editing for direct response. Hooks, retention and CTAs built around your offer.",
  player: { watch: "Watch", watchSound: "Watch with sound", play: "Play video", pausePreview: "Pause preview", playPreview: "Play preview", fullVideos: "Full videos", featured: "Featured video", error: "This video could not be loaded." },
  projects: {
    "microlead.mp4": { title: "Microlead · PT/BR", metric: "Storytelling, editing and sound design" },
    "breaking-news-ed.mp4": { title: "Breaking News · ED Microlead", metric: "News-style microlead" },
    "religioso.mp4": { title: "VSL · Religious", metric: "Long-form storytelling and editing" },
    "ad-news.mp4": { title: "Ad · News", metric: "News format and attention-building" },
    "ad-ugc.mp4": { title: "Ad · UGC · Full AI", metric: "Native format and ad creative language" },
    "ad-info.mp4": { title: "Ad · Info · Full AI", metric: "Copy, editing and offer progression" },
    "ad-diabetes.mp4": { title: "Ad · Diabetes · Full AI", metric: "Ad creative editing for direct response" },
  },
};
const es: Copy = {
  languageLabel: "Seleccionar idioma", home: "Ojoaouai, inicio", navigation: "Navegación principal",
  work: "Trabajos", about: "Sobre mí", headerCta: "Vamos a escalar tu oferta",
  eyebrow: "EDICIÓN PARA RESPUESTA DIRECTA", headline: "Frena el scroll.", headlineAccent: "Vende tu oferta.",
  intro: "VSLs, microleads y anuncios editados para captar la atención, generar deseo e impulsar el clic. Hooks potentes. Ritmo preciso. Un CTA que impacta.",
  heroCta: "Quiero vender con video", seeWork: "Ver las ediciones en acción", specialtiesAds: "Anuncios y creativos",
  workEyebrow: "01 / PORTAFOLIO", workTitle: "Edición para quienes venden", workSubtitle: "Hook. Retención. Conversión.", filterLabel: "Filtrar trabajos",
  categories: { Todos: "Todos", VSL: "VSL", Microlead: "Microlead", "Ads / Criativos": "Anuncios / Creativos" },
  aboutEyebrow: "02 / SOBRE MÍ", aboutTitle: "Hooks que atrapan.", aboutAccent: "Edición que impulsa.",
  aboutText: "Soy Ojoaouai. Edito para respuesta directa: doy ritmo a tu copy, destaco el mecanismo, refuerzo la prueba y preparo el terreno para el CTA. Cada corte trabaja a favor de tu oferta.",
  tags: ["Hook y retención", "Prueba y mecanismo", "Diseño de sonido"],
  ctaEyebrow: "TU OFERTA ESTÁ LISTA. ¿Y TU CREATIVO?", ctaTitle: "Haz que el próximo clic", ctaAccent: "empiece en la edición.", ctaButton: "Quiero mi oferta en acción",
  footer: "VSL · Microlead · Anuncios. Respuesta directa en cada corte.", whatsapp: "Contacto por WhatsApp",
  contactMessage: "¡Hola! Vi el portafolio de Ojoaouai y me gustaría hablar sobre la edición de una VSL o un creativo para mi oferta.",
  pageTitle: "Ojoaouai — VSL, Microlead y Anuncios", description: "Ojoaouai — Edición de VSLs, microleads y anuncios para respuesta directa. Hook, retención y CTA al servicio de tu oferta.",
  player: { watch: "Ver", watchSound: "Ver con sonido", play: "Reproducir video", pausePreview: "Pausar vista previa", playPreview: "Reproducir vista previa", fullVideos: "Videos completos", featured: "Video destacado", error: "No se pudo cargar este video." },
  projects: {
    "microlead.mp4": { title: "Microlead · PT/BR", metric: "Narrativa, edición y diseño de sonido" },
    "breaking-news-ed.mp4": { title: "Breaking News · ED Microlead", metric: "Microlead en formato de noticia" },
    "religioso.mp4": { title: "VSL · Religioso", metric: "Narrativa y edición de larga duración" },
    "ad-news.mp4": { title: "Anuncio · Noticias", metric: "Formato de noticia y captación de atención" },
    "ad-ugc.mp4": { title: "Anuncio · UGC · Full AI", metric: "Formato nativo y lenguaje de creativos" },
    "ad-info.mp4": { title: "Anuncio · Info · Full AI", metric: "Copy, edición y desarrollo de la oferta" },
    "ad-diabetes.mp4": { title: "Anuncio · Diabetes · Full AI", metric: "Edición de creativos para respuesta directa" },
  },
};
export const translations: Record<Language, Copy> = { en, pt, es };
const languageTags: Record<Language, string> = { en: "en", pt: "pt-BR", es: "es" };
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; copy: Copy } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem("ojoaouai-language"); if (saved === "en" || saved === "pt" || saved === "es") return saved; } catch { /* Storage may be unavailable. */ }
    return "pt";
  });
  const copy = translations[language];
  useEffect(() => {
    document.documentElement.lang = languageTags[language];
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.description);
    try { localStorage.setItem("ojoaouai-language", language); } catch { /* The selector still works without storage. */ }
  }, [language, copy]);
  return <LanguageContext.Provider value={{ language, setLanguage, copy }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is missing");
  return context;
}
export function translateProject(project: PortfolioProject, language: Language): PortfolioProject {
  const file = project.video.split("/").pop() as keyof Copy["projects"];
  const translated = translations[language].projects[file];
  return translated ? { ...project, ...translated } : project;
}
