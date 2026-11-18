import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  title: string;
};

// Visar en bild i taget med pilar och prickar.
// Klickar man på bilden öppnas den i stort format.
export default function ImageSlider({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;

  function previous() {
    setIndex((current) => (current - 1 + count) % count);
  }

  function next() {
    setIndex((current) => (current + 1) % count);
  }

  // Svep åt vänster eller höger på mobilen.
  function onTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (distance > 40) previous();
    if (distance < -40) next();
    touchStartX.current = null;
  }

  // Tangentbordet fungerar när den stora bilden är öppen.
  useEffect(() => {
    if (!zoomed) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setZoomed(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  if (count === 0) return null;

  const altText = `Skärmbild ${index + 1} av ${count} från ${title}`;

  return (
    <div className="slider">
      <div
        className="slider-frame"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {count > 1 && (
          <button
            className="slider-arrow left"
            onClick={previous}
            aria-label="Föregående bild"
          >
            ‹
          </button>
        )}

        <button
          className="slider-image-button"
          onClick={() => setZoomed(true)}
          aria-label="Visa bilden i stort format"
        >
          <img src={images[index]} alt={altText} />
        </button>

        {count > 1 && (
          <button
            className="slider-arrow right"
            onClick={next}
            aria-label="Nästa bild"
          >
            ›
          </button>
        )}
      </div>

      {count > 1 && (
        <div className="slider-dots">
          {images.map((image, dotIndex) => (
            <button
              key={image}
              className={dotIndex === index ? "dot active" : "dot"}
              onClick={() => setIndex(dotIndex)}
              aria-label={`Visa bild ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}

      {zoomed && (
        // Klick på den mörka bakgrunden stänger den stora bilden.
        <div className="lightbox" onClick={() => setZoomed(false)}>
          <button
            className="lightbox-close"
            onClick={() => setZoomed(false)}
            aria-label="Stäng"
          >
            ×
          </button>

          {count > 1 && (
            <button
              className="slider-arrow left"
              onClick={(event) => {
                event.stopPropagation();
                previous();
              }}
              aria-label="Föregående bild"
            >
              ‹
            </button>
          )}

          <img
            src={images[index]}
            alt={altText}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />

          {count > 1 && (
            <button
              className="slider-arrow right"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Nästa bild"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
