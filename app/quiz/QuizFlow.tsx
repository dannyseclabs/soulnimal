"use client";

import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import type { AnimalProfile, QuizQuestion, Trait, TraitScores } from "../../src/data/quiz";

type AnswerMap = Partial<Record<Trait, TraitScores>>;

const traits: Trait[] = ["space", "smell", "noise", "time", "budget", "interaction", "beginner", "night"];

export function QuizFlow({
  questions,
  animals
}: {
  questions: QuizQuestion[];
  animals: AnimalProfile[];
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const isDone = step >= questions.length;
  const current = questions[step];
  const progress = Math.min(100, Math.round((step / questions.length) * 100));

  const results = useMemo(() => scoreAnimals(answers, animals), [answers, animals]);

  if (isDone) {
    return (
      <Results
        results={results}
        onRestart={() => {
          setAnswers({});
          setStep(0);
        }}
      />
    );
  }

  return (
    <div className="transition-opacity duration-300">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 text-sm font-extrabold text-forest/60">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-cream">
          <div className="h-full rounded-full bg-amber transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">{current.eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
        {current.title}
      </h1>

      <div className="mt-8 grid gap-3">
        {current.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setAnswers((value) => ({ ...value, [current.id]: option.scores }));
              setStep((value) => value + 1);
            }}
            className="group rounded-lg bg-cream p-5 text-left shadow-sm ring-1 ring-forest/10 transition duration-200 hover:-translate-y-0.5 hover:bg-amber/10 hover:ring-orange/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40"
          >
            <span className="text-xl font-extrabold text-forest">{option.label}</span>
            <span className="mt-2 block leading-7 text-forest/68">{option.text}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          disabled={step === 0}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-4 text-sm font-extrabold text-forest ring-1 ring-forest/10 disabled:opacity-40"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back
        </button>
        <span className="inline-flex min-h-11 items-center rounded-full bg-forest/5 px-4 text-sm font-bold text-forest/60">
          Choose one card
        </span>
      </div>
    </div>
  );
}

function Results({
  results,
  onRestart
}: {
  results: ReturnType<typeof scoreAnimals>;
  onRestart: () => void;
}) {
  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Your closest matches</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
        A starting point for a more honest animal search.
      </h1>

      <div className="mt-8 grid gap-4">
        {results.slice(0, 3).map((result, index) => (
          <article key={result.name} className="rounded-lg bg-cream p-5 shadow-lift ring-1 ring-forest/10 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest/55">
                  Match {index + 1}
                </p>
                <h2 className="mt-1 font-display text-3xl font-extrabold">{result.name}</h2>
                <p className="mt-1 font-bold text-orange">{result.fit}</p>
              </div>
              <div className="rounded-full bg-forest px-4 py-2 text-lg font-extrabold text-cream">
                {result.percent}%
              </div>
            </div>
            <p className="mt-5 leading-7 text-forest/70">{result.reason}</p>
            <div className="mt-4 rounded-lg bg-ivory p-4">
              <p className="text-sm font-extrabold text-forest">Possible challenge</p>
              <p className="mt-1 leading-7 text-forest/68">{result.challenge}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-forest px-5 text-sm font-extrabold text-cream shadow-[0_12px_28px_rgba(35,63,11,0.18)] transition hover:bg-olive"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        Retake quiz
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function scoreAnimals(answers: AnswerMap, animals: AnimalProfile[]) {
  const chosen = traits.map((trait) => answers[trait]).filter(Boolean) as TraitScores[];
  const preference = traits.reduce((acc, trait) => {
    acc[trait] = Math.round(chosen.reduce((sum, answer) => sum + answer[trait], 0) / Math.max(1, chosen.length));
    return acc;
  }, {} as TraitScores);

  return animals
    .map((animal) => {
      const traitScores = traits.map((trait) => 3 - Math.abs(preference[trait] - animal.scores[trait]));
      const percent = Math.round((traitScores.reduce((sum, value) => sum + value, 0) / (traits.length * 3)) * 100);
      const bestTraits = traits
        .filter((trait) => Math.abs(preference[trait] - animal.scores[trait]) <= 1 && animal.strengths[trait])
        .slice(0, 2);
      const challengeTrait =
        traits.find((trait) => Math.abs(preference[trait] - animal.scores[trait]) >= 2 && animal.challenges[trait]) ??
        traits.find((trait) => animal.challenges[trait]);

      return {
        ...animal,
        percent,
        reason: bestTraits.map((trait) => animal.strengths[trait]).join(" It also ") || `${animal.name} has a balanced profile for your answers.`,
        challenge: (challengeTrait && animal.challenges[challengeTrait]) || "Care needs still deserve deeper research before choosing."
      };
    })
    .sort((a, b) => b.percent - a.percent);
}
