"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { featuredAnimals } from "../../src/data/home";

type FeaturedAnimal = (typeof featuredAnimals)[number];

export function FeaturedAnimalCarousel({
  animals
}: {
  animals: readonly FeaturedAnimal[];
}) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const card = firstCardRef.current;

      if (!viewport || !card) {
        return;
      }

      const gap = 20;
      const cardStep = card.offsetWidth + gap;
      const visibleCards = Math.max(1, Math.floor((viewport.offsetWidth + gap) / cardStep));

      setStep(cardStep);
      setMaxIndex(Math.max(0, animals.length - visibleCards));
      setIndex((current) => Math.min(current, Math.max(0, animals.length - visibleCards)));
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [animals.length]);

  const previous = () => setIndex((current) => (current === 0 ? maxIndex : current - 1));
  const next = () => setIndex((current) => (current >= maxIndex ? 0 : current + 1));

  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={previous}
          className="grid size-11 place-items-center rounded-full bg-cream text-forest shadow-sm ring-1 ring-forest/10 transition hover:ring-orange/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          aria-label="Previous animal"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          className="grid size-11 place-items-center rounded-full bg-forest text-cream shadow-sm ring-1 ring-forest/10 transition hover:bg-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          aria-label="Next animal"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div ref={viewportRef} className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {animals.map((animal, animalIndex) => (
            <article
              key={animal.name}
              ref={animalIndex === 0 ? firstCardRef : undefined}
              className="min-w-[84%] overflow-hidden rounded-lg bg-cream shadow-lift ring-1 ring-forest/10 sm:min-w-[48%] lg:min-w-[31%] xl:min-w-[23.5%]"
            >
              <div className="relative aspect-[4/3] bg-linen">
                <Image
                  src={animal.image}
                  alt={`${animal.name} preview`}
                  fill
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, (max-width: 1280px) 31vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-forest/75">
                  {animal.fit}
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                  {animal.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {animal.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-olive/10 px-3 py-1.5 text-sm font-bold text-forest/75"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
