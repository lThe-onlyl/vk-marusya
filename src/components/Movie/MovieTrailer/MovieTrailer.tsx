"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../../ui/IconProps/IconProps";
import "./MovieTrailer.scss";

interface TrailerModalProps {
  youtubeId: string;
  onClose: () => void;
}

export function MovieTrailer({ youtubeId, onClose }: TrailerModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="trailer-modal" onClick={onClose}>
      <div
        className="trailer-modal__content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Трейлер фильма"
      >
        <button
          type="button"
          className="trailer-modal__close"
          onClick={onClose}
          aria-label="Закрыть трейлер"
        >
          <Icon name="icon-close" />
        </button>

        <iframe
          className="trailer-modal__iframe"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="Трейлер"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body,
  );
}
