import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play, Volume2 } from "lucide-react";
import { useLanguage } from "@/i18n";
import type { PortfolioProject } from "@/data/projects";

export function HeroReel({ project, suspended, onActivate }: { project: PortfolioProject; suspended: boolean; onActivate: () => void }) {
  const { copy } = useLanguage();
  const labels = copy.player;
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const visibleRef = useRef(false);
  const changingSource = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [withSound, setWithSound] = useState(false);
  const [playBlocked, setPlayBlocked] = useState(false);
  const syncRef = useRef<() => void>(() => {});

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    userPaused.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches || !!connection?.saveData;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let visible = false;
    const sync = () => {
      if (visible && !document.hidden && !userPaused.current && !suspended) {
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    syncRef.current = sync;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; visibleRef.current = visible; sync(); }, { threshold: 0.2 });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); changingSource.current = true; video.pause(); };
  }, [suspended]);

  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!withSound || !video) return;
    video.currentTime = 0;
    userPaused.current = false;
    void video.play().catch(() => setPlayBlocked(true));
  }, [withSound]);

  const playWithSound = () => {
    onActivate();
    userPaused.current = false;
    changingSource.current = true;
    setPlayBlocked(false);
    setWithSound(true);
  };

  return (
    <div className={`featured hero-media${withSound ? " has-sound" : ""}`}>
      <video ref={videoRef} className="hero-preview" src={withSound ? project.video : `${import.meta.env.BASE_URL}videos/microlead-preview.mp4`}
        poster={project.thumbnail} muted={!withSound} loop={!withSound} controls={withSound}
        controlsList="nofullscreen" disablePictureInPicture playsInline preload="metadata" aria-label={`${labels.featured}: ${project.title}`}
        onPlay={() => { changingSource.current = false; userPaused.current = false; setPlaying(true); if (withSound) onActivate(); }}
        onPause={() => { setPlaying(false); if (withSound && !changingSource.current && !suspended && !document.hidden && visibleRef.current) userPaused.current = true; }}
        onError={() => setFailed(true)} />
      {failed && <img className="reel-fallback" src={project.thumbnail} alt={project.title} />}
      {!withSound && <>
        <span className="featured-shade" />
        <span className="featured-label">{copy.categories[project.category].toUpperCase()} <ArrowUpRight size={16} /></span>
        <button type="button" className="reel-sound" onClick={playWithSound}><Volume2 size={17} /> {labels.watchSound}</button>
        <div className="featured-bottom">
          <button type="button" className="reel-toggle" disabled={failed} aria-label={playing ? labels.pausePreview : labels.playPreview}
            onClick={() => { userPaused.current = !videoRef.current?.paused; if (!userPaused.current) onActivate(); syncRef.current(); }}>
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <span className="reel-title">{project.title}</span>
          <a href="#trabalhos" className="reel-work">{labels.fullVideos} <ArrowUpRight size={12} /></a>
        </div>
      </>}
      {playBlocked && !failed && <button type="button" className="reel-sound" onClick={() => { setPlayBlocked(false); userPaused.current = false; onActivate(); void videoRef.current?.play().catch(() => setPlayBlocked(true)); }}>{labels.play}</button>}
      {failed && <p className="inline-video-error" role="alert">{labels.error}</p>}
    </div>
  );
}
