import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/i18n";
import type { PortfolioProject } from "@/data/projects";

export function ProjectVideo({ project, index, active, onActivate }: {
  project: PortfolioProject; index: number; active: boolean; onActivate: () => void;
}) {
  const { copy } = useLanguage();
  const labels = copy.player;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playBlocked, setPlayBlocked] = useState(false);

  useEffect(() => { if (!active) videoRef.current?.pause(); }, [active]);

  const play = () => {
    setStarted(true);
    setPlayBlocked(false);
    onActivate();
    void videoRef.current?.play().catch(() => setPlayBlocked(true));
  };

  return (
    <article className="project-card">
      <div className={`project-image${started ? " is-playing" : ""}`}>
        <video ref={videoRef} className="project-video" src={project.video} poster={project.thumbnail}
          preload="none" controls={started} controlsList="nofullscreen" disablePictureInPicture playsInline
          aria-label={project.title} onPlay={onActivate} onError={() => setFailed(true)} />
        {!started && !failed && <button type="button" className="inline-play-overlay" onClick={play} aria-label={`${labels.watch} ${project.title}`}>
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="small-play"><Play size={18} fill="currentColor" /></span>
        </button>}
        {failed && <p className="inline-video-error" role="alert">{labels.error}</p>}
        {playBlocked && !failed && <button type="button" className="inline-play-retry" onClick={play}>{labels.play}</button>}
      </div>
      <div className="project-info"><div><span className="project-category">{copy.categories[project.category]}</span><h3>{project.title}</h3><p>{project.metric}</p></div></div>
    </article>
  );
}
