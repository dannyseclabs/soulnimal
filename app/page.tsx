import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Clock3,
  Home,
  Leaf,
  PawPrint,
  ShieldCheck
} from "lucide-react";

const featuredAnimals = [
  {
    name: "Quiet cat",
    fit: "Independent companion",
    image:
      "/images/soulnimal-cat-linen-couch.jpg",
    notes: ["Soft routine", "Warm home energy", "Low-pressure bond"]
  },
  {
    name: "Pet rat",
    fit: "Curious close companion",
    image:
      "/images/soulnimal-rat-blanket.jpg",
    notes: ["Social and bright", "Small-space friendly", "Needs enrichment"]
  },
  {
    name: "House rabbit",
    fit: "Calm, delicate presence",
    image:
      "/images/soulnimal-rabbit-window.jpg",
    notes: ["Quiet home", "Careful handling", "Space to roam"]
  },
  {
    name: "Chinchilla",
    fit: "Gentle evening rhythm",
    image:
      "/images/soulnimal-chinchilla-wood.jpg",
    notes: ["Cool dry space", "Soft interaction", "Night energy"]
  }
];

const ownershipChecks = [
  {
    icon: Clock3,
    title: "Time has texture",
    text: "A good match considers weekday energy, cleaning rhythms, travel, and the repeated care that shapes daily life."
  },
  {
    icon: Home,
    title: "Your space is part of the bond",
    text: "Noise, scent, floor type, sunlight, neighbors, and retreat areas can matter as much as personality."
  },
  {
    icon: CircleDollarSign,
    title: "Costs should feel honest",
    text: "Food is only one part. Grooming, enrichment, insurance, vet care, and emergencies belong in the decision."
  }
];

export default function HomePage() {
  return (
    <>
      <Link
        href="#content"
        className="sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:not-sr-only focus-visible:rounded-full focus-visible:bg-amber focus-visible:px-4 focus-visible:py-3 focus-visible:text-sm focus-visible:font-extrabold focus-visible:text-forest"
      >
        Skip to content
      </Link>
      <main id="content" className="overflow-hidden bg-cream text-forest">
        <Navbar />
        <HeroSection />
        <QuizCtaSection />
        <FeaturedAnimalsSection />
        <OwnershipAwarenessSection />
      </main>
    </>
  );
}

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ivory/90 px-4 py-3 text-forest shadow-[0_18px_50px_rgba(35,63,11,0.18)] ring-1 ring-forest/10 backdrop-blur-md sm:px-5"
      >
        <Link href="/" className="flex min-h-11 items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-full bg-forest text-amber">
            <PawPrint className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold">Soulnimal</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-bold text-forest/70 md:flex">
          <Link href="/animals" className="transition hover:text-forest">
            Animals
          </Link>
          <Link href="/guides" className="transition hover:text-forest">
            Guides
          </Link>
          <Link href="/compare" className="transition hover:text-forest">
            Compare
          </Link>
        </div>

        <Link
          href="/quiz"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-4 text-sm font-extrabold text-cream shadow-sm transition hover:bg-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/35"
        >
          Quiz
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[88dvh] overflow-hidden bg-forest text-cream">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src="/images/soulnimal-cat-linen-couch.jpg"
          alt="A calm cat relaxing on a soft linen couch"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-[42%_50%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,61,5,1)_0%,rgba(23,61,5,0.98)_43%,rgba(23,61,5,0.72)_59%,rgba(23,61,5,0.12)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[88dvh] max-w-7xl items-center px-5 py-32 sm:px-6 lg:px-8">
        <div className="max-w-[42rem]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-2 text-sm font-bold text-cream/88 ring-1 ring-cream/18">
            <Leaf className="size-4 text-amber" aria-hidden="true" />
            Calm animal matching for real homes
          </div>
          <h1 className="max-w-[40rem] font-display text-5xl font-extrabold leading-[0.98] text-balance sm:text-6xl lg:text-7xl">
            Find an animal that feels right and fits real life.
          </h1>
          <p className="mt-7 max-w-[38rem] text-lg leading-8 text-cream/78 sm:text-xl">
            Soulnimal helps you weigh personality, care rhythm, space, budget,
            sound sensitivity, and emotional expectations before you fall in
            love with a companion.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quiz"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber px-6 text-base font-extrabold text-forest shadow-[0_18px_38px_rgba(193,112,37,0.28)] transition hover:bg-amber/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/70"
            >
              Start the quiz
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              href="/animals"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cream/8 px-6 text-base font-extrabold text-cream ring-1 ring-cream/24 transition hover:bg-cream/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/60"
            >
              Browse animals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuizCtaSection() {
  return (
    <section id="quiz-preview" className="bg-cream px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-forest/75">
            The Soulnimal quiz
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
            A warm decision tool, grounded in ordinary days.
          </h2>
        </div>

        <div className="rounded-lg bg-ivory p-5 shadow-soft ring-1 ring-forest/10 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Lifestyle", "Sensory fit", "Budget"].map((label) => (
              <div key={label} className="rounded-lg bg-cream/70 p-4">
                <Check className="mb-5 size-5 text-olive" aria-hidden="true" />
                <p className="text-sm font-extrabold text-forest">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-forest/70">
            The first version stays deterministic: clear questions, weighted
            match percentages, and plain-language explanations for why each
            animal does or does not fit.
          </p>
          <Link
            href="/quiz"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-extrabold text-cream shadow-[0_12px_28px_rgba(35,63,11,0.18)] transition hover:bg-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/35"
          >
            Take the match quiz
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedAnimalsSection() {
  return (
    <section id="featured" className="bg-ivory px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-forest/75">
              Featured preview
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Fewer options, described with more care.
            </h2>
          </div>
          <Link
            href="/animals"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-cream px-5 text-sm font-extrabold text-forest shadow-sm ring-1 ring-forest/10 transition hover:ring-orange/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/30"
          >
            View animal library
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredAnimals.map((animal) => (
            <article
              key={animal.name}
              className="overflow-hidden rounded-lg bg-cream shadow-lift ring-1 ring-forest/10"
            >
              <div className="relative aspect-[4/3] bg-linen">
                <Image
                  src={animal.image}
                  alt={`${animal.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
    </section>
  );
}

function OwnershipAwarenessSection() {
  return (
    <section id="ownership" className="bg-forest px-5 py-16 text-cream sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-amber text-forest">
            <ShieldCheck className="size-6" aria-hidden="true" />
          </div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber">
            Ownership awareness
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
            Better matches come from honest expectations.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream/70">
            Soulnimal should feel warm, but never vague. The product foundation
            treats care needs as part of the emotional promise, not a footnote.
          </p>
        </div>

        <div className="grid gap-4">
          {ownershipChecks.map((item) => (
            <article
              key={item.title}
              className="rounded-lg bg-cream/[0.08] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.08)] ring-1 ring-cream/10 backdrop-blur sm:p-6"
            >
              <item.icon className="size-6 text-amber" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-cream/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
