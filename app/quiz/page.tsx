import Link from "next/link";
import { ArrowLeft, PawPrint } from "lucide-react";
import { QuizFlow } from "./QuizFlow";
import { animalProfiles, quizQuestions } from "../../src/data/quiz";

export const metadata = {
  title: "Quiz",
  description: "Find animal matches based on your home, care rhythm, budget, and expectations."
};

export default function QuizPage() {
  return (
    <main className="min-h-dvh bg-cream px-5 py-5 text-forest sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 font-extrabold">
          <span className="grid size-9 place-items-center rounded-full bg-forest text-amber">
            <PawPrint className="size-4" aria-hidden="true" />
          </span>
          Soulnimal
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ivory px-4 text-sm font-extrabold shadow-sm ring-1 ring-forest/10"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Home
        </Link>
      </div>

      <section className="mx-auto mt-8 max-w-5xl rounded-lg bg-ivory p-4 shadow-soft ring-1 ring-forest/10 sm:p-6 lg:mt-10 lg:p-8">
        <QuizFlow questions={quizQuestions} animals={animalProfiles} />
      </section>
    </main>
  );
}
