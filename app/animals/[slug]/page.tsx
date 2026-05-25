import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { notFound } from "next/navigation";
import { animals, getAnimalBySlug } from "../../../src/data/animals";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return animals.map((animal) => ({ slug: animal.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    return {};
  }

  return {
    title: animal.name,
    description: animal.summary
  };
}

export default async function AnimalProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const animal = getAnimalBySlug(slug);

  if (!animal) {
    notFound();
  }

  const facts = [
    ["Lifespan", animal.facts.lifespan],
    ["Monthly cost", animal.facts.monthlyCost],
    ["Noise", animal.facts.noise],
    ["Smell", animal.facts.smell],
    ["Beginner", animal.facts.beginner],
    ["Intelligence", animal.facts.intelligence],
    ["Social needs", animal.facts.social],
    ["Activity", animal.facts.activity]
  ];

  return (
    <main className="min-h-dvh bg-cream text-forest">
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
        <Link
          href="/quiz"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ivory px-4 text-sm font-extrabold shadow-sm ring-1 ring-forest/10"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to quiz
        </Link>

        <section className="mt-6 grid overflow-hidden rounded-lg bg-ivory shadow-soft ring-1 ring-forest/10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[22rem] bg-linen sm:min-h-[32rem]">
            <Image
              src={animal.image}
              alt={`${animal.name} in a calm Soulnimal profile scene`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">
              Animal profile
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-none sm:text-6xl">
              {animal.name}
            </h1>
            <p className="mt-4 text-xl font-extrabold text-olive">{animal.tagline}</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-forest/70">{animal.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {animal.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-amber/18 px-3 py-1.5 text-sm font-extrabold text-forest"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-lg bg-ivory p-5 shadow-sm ring-1 ring-forest/10">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-forest/50">{label}</p>
              <p className="mt-2 text-lg font-extrabold">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-forest p-6 text-cream shadow-lift sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber">
              Living with them
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">
              What it feels like
            </h2>
            <p className="mt-5 text-lg leading-8 text-cream/75">{animal.livingWith}</p>
          </div>

          <div className="grid gap-4">
            <CareCard title="Housing" text={animal.care.housing} />
            <CareCard title="Diet" text={animal.care.diet} />
            <CareCard title="Daily time" text={animal.care.dailyTime} />
          </div>
        </section>

        <section className="grid gap-5 py-10 lg:grid-cols-2">
          <ListCard icon="check" title="Pros" items={animal.pros} />
          <ListCard icon="x" title="Cons" items={animal.cons} />
          <ListCard title="Common mistakes" items={animal.commonMistakes} />
          <div className="grid gap-5">
            <ListCard title="Best for" items={animal.bestFor} />
            <ListCard title="Not recommended for" items={animal.notFor} />
          </div>
        </section>

        <section className="pb-12">
          <div className="rounded-lg bg-ivory p-6 shadow-sm ring-1 ring-forest/10 sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">
              Similar animals
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {animal.similar.map((similarSlug) => {
                const similar = getAnimalBySlug(similarSlug);

                return similar ? (
                  <Link
                    key={similar.slug}
                    href={`/animals/${similar.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-4 text-sm font-extrabold text-forest ring-1 ring-forest/10 transition hover:ring-orange/40"
                  >
                    {similar.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function CareCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg bg-ivory p-5 shadow-sm ring-1 ring-forest/10 sm:p-6">
      <h3 className="text-xl font-extrabold">{title}</h3>
      <p className="mt-3 leading-7 text-forest/68">{text}</p>
    </article>
  );
}

function ListCard({
  title,
  items,
  icon
}: {
  title: string;
  items: string[];
  icon?: "check" | "x";
}) {
  const Icon = icon === "x" ? X : Check;

  return (
    <article className="rounded-lg bg-ivory p-5 shadow-sm ring-1 ring-forest/10 sm:p-6">
      <h3 className="font-display text-2xl font-extrabold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-forest/70">
            <Icon className="mt-1 size-5 shrink-0 text-orange" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
