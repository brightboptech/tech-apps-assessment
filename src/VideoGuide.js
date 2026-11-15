import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Short screen-recorded how-to videos, served from public/videos/<name>.webm|.mp4
export const VIDEO_GUIDES = {
  'create-a-class':       'How to create a class',
  'print-student-passes': 'How to print student passes',
  'student-takes-test':   'How students take the assessment',
  'view-results':         'How to view your results',
  'tia-report':           'How to create your TIA Growth Report',
};

function GuideVideo({ name, videoRef, style }) {
  return (
    // playsInline keeps iPad/iPhone from forcing fullscreen; preload="none" downloads nothing until Play.
    <video ref={videoRef} controls preload="none" playsInline style={{ display: 'block', width: '100%', background: '#000', ...style }}>
      <source src={`/videos/${name}.webm`} type='video/webm; codecs="vp9"' />
      <source src={`/videos/${name}.mp4`} type="video/mp4" />
      Your browser can't play this video.
    </video>
  );
}

// <VideoGuide name="create-a-class" />          → "▶ Watch how (1 min)" link that opens a modal
// <VideoGuide name="create-a-class" inline />   → the player itself (used inside FAQ answers)
export default function VideoGuide({ name, inline = false, label = 'Watch how (1 min)', style }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);
  const title = VIDEO_GUIDES[name] ?? 'Video guide';

  const close = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // stop the page scrolling behind the modal (iPad)
    closeRef.current?.focus();
    const trigger = triggerRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  if (inline) {
    return (
      <div style={{ margin: '0 0 10px', ...style }}>
        <GuideVideo name={name} style={{ borderRadius: '8px' }} />
      </div>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        style={{
          background: 'none', border: 'none', padding: '6px 0', cursor: 'pointer',
          color: '#5B8DB8', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap',
          display: 'inline-flex', alignItems: 'center', gap: '5px', ...style,
        }}
      >
        <span aria-hidden="true">▶</span> {label}
      </button>

      {open && createPortal(
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(15,23,42,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
          }}
        >
          <div
            role="dialog" aria-modal="true" aria-label={title}
            onClick={e => e.stopPropagation()}
            style={{
              width: 'min(960px, 100%)', maxHeight: '100%', background: '#0f172a',
              borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '8px 8px 8px 16px' }}>
              <span style={{ color: 'white', fontSize: '15px', fontWeight: 700 }}>{title}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close video"
                style={{
                  width: '44px', height: '44px', flexShrink: 0, border: 'none', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.12)', color: 'white', fontSize: '22px', lineHeight: 1, cursor: 'pointer',
                }}
              >×</button>
            </div>
            <GuideVideo name={name} videoRef={videoRef} style={{ maxHeight: 'calc(100dvh - 100px)' }} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
