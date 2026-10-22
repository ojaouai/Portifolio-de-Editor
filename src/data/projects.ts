export type PortfolioProject = {
  title: string;
  category: "VSL" | "Microlead" | "Ads / Criativos";
  thumbnail: string;
  video: string;
  metric: string;
};
const base = import.meta.env.BASE_URL;
export const projects: PortfolioProject[] = [
  { title: "Microlead · PT/BR", category: "Microlead", thumbnail: `${base}capas/microlead.jpg`, video: `${base}videos/microlead.mp4`, metric: "Narrativa, edição e sound design" },
  { title: "Breaking News · ED Microlead", category: "VSL", thumbnail: `${base}capas/breaking-news-ed.jpg`, video: `${base}videos/breaking-news-ed.mp4`, metric: "Microlead em formato de notícia" },
  { title: "VSL · Religioso", category: "VSL", thumbnail: `${base}capas/religioso.jpg`, video: `${base}videos/religioso.mp4`, metric: "Narrativa e edição de longa duração" },
  { title: "AD · News", category: "Ads / Criativos", thumbnail: `${base}capas/ad-news.jpg`, video: `${base}videos/ad-news.mp4`, metric: "Estrutura de notícia e construção de atenção" },
  { title: "AD · UGC · Full AI", category: "Ads / Criativos", thumbnail: `${base}capas/ad-ugc.jpg`, video: `${base}videos/ad-ugc.mp4`, metric: "Formato nativo e linguagem de criativo" },
  { title: "AD · Info · Full AI", category: "Ads / Criativos", thumbnail: `${base}capas/ad-info.jpg`, video: `${base}videos/ad-info.mp4`, metric: "Copy, edição e progressão da oferta" },
  { title: "AD · Diabetes · Full AI", category: "Ads / Criativos", thumbnail: `${base}capas/ad-diabetes.jpg`, video: `${base}videos/ad-diabetes.mp4`, metric: "Edição de criativo para direct response" },
];
