export type Trait =
  | "space"
  | "smell"
  | "noise"
  | "time"
  | "budget"
  | "interaction"
  | "beginner"
  | "night";

export type TraitScores = Record<Trait, number>;

export type QuizOption = {
  id: string;
  label: string;
  text: string;
  scores: TraitScores;
};

export type QuizQuestion = {
  id: Trait;
  eyebrow: string;
  title: string;
  options: QuizOption[];
};

export type AnimalProfile = {
  slug: string;
  name: string;
  fit: string;
  scores: TraitScores;
  strengths: Partial<Record<Trait, string>>;
  challenges: Partial<Record<Trait, string>>;
};

const scores = (
  space: number,
  smell: number,
  noise: number,
  time: number,
  budget: number,
  interaction: number,
  beginner: number,
  night: number
): TraitScores => ({ space, smell, noise, time, budget, interaction, beginner, night });

export const quizQuestions: QuizQuestion[] = [
  {
    id: "space",
    eyebrow: "Home space",
    title: "What kind of space can you realistically offer?",
    options: [
      { id: "compact", label: "Compact", text: "Apartment or one dedicated area.", scores: scores(1, 2, 2, 2, 2, 2, 3, 2) },
      { id: "medium", label: "Comfortable", text: "Room to roam, but not a huge home.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "open", label: "Generous", text: "A larger home, garden access, or flexible zones.", scores: scores(3, 2, 2, 2, 2, 3, 2, 1) }
    ]
  },
  {
    id: "smell",
    eyebrow: "Scent sensitivity",
    title: "How sensitive are you to animal smell and cleaning routines?",
    options: [
      { id: "low-smell", label: "Very sensitive", text: "I need a low-odor setup.", scores: scores(2, 3, 2, 2, 2, 1, 3, 2) },
      { id: "some-smell", label: "Some tolerance", text: "Fine if care is consistent.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "routine", label: "Routine is okay", text: "I can handle frequent bedding or litter care.", scores: scores(2, 1, 2, 3, 2, 3, 2, 2) }
    ]
  },
  {
    id: "noise",
    eyebrow: "Sound",
    title: "What noise level feels livable at home?",
    options: [
      { id: "quiet", label: "Quiet", text: "Soft sounds only.", scores: scores(2, 2, 3, 2, 2, 1, 3, 2) },
      { id: "moderate", label: "Moderate", text: "Some daily sound is fine.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "lively", label: "Lively", text: "I do not mind chatter, barks, or activity.", scores: scores(2, 2, 1, 3, 2, 3, 1, 2) }
    ]
  },
  {
    id: "time",
    eyebrow: "Daily care",
    title: "How much daily care time can you give?",
    options: [
      { id: "light", label: "Light", text: "Simple, predictable care windows.", scores: scores(1, 3, 3, 1, 3, 1, 3, 2) },
      { id: "steady", label: "Steady", text: "A reliable daily routine.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "hands-on", label: "Hands-on", text: "I enjoy care, enrichment, and training.", scores: scores(3, 1, 1, 3, 1, 3, 1, 2) }
    ]
  },
  {
    id: "budget",
    eyebrow: "Budget",
    title: "What level of ongoing cost feels comfortable?",
    options: [
      { id: "lean", label: "Lean", text: "Keep costs controlled and predictable.", scores: scores(1, 2, 2, 1, 3, 1, 2, 2) },
      { id: "balanced", label: "Balanced", text: "I can plan for normal monthly care.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "flexible", label: "Flexible", text: "I can handle higher care and vet costs.", scores: scores(3, 1, 1, 3, 1, 3, 1, 1) }
    ]
  },
  {
    id: "interaction",
    eyebrow: "Connection",
    title: "What kind of emotional bond are you hoping for?",
    options: [
      { id: "observe", label: "Observe", text: "I like calm presence more than cuddling.", scores: scores(1, 3, 3, 1, 3, 1, 3, 3) },
      { id: "nearby", label: "Nearby", text: "Gentle companionship without pressure.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "close", label: "Close", text: "I want frequent interaction and affection.", scores: scores(3, 1, 1, 3, 1, 3, 1, 1) }
    ]
  },
  {
    id: "beginner",
    eyebrow: "Experience",
    title: "How beginner-friendly should the match be?",
    options: [
      { id: "beginner", label: "Very", text: "I want a forgiving first companion.", scores: scores(2, 3, 3, 1, 3, 1, 3, 1) },
      { id: "learning", label: "I can learn", text: "Some special care is okay.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "special", label: "Specialist care", text: "I am comfortable with nuanced needs.", scores: scores(3, 1, 1, 3, 1, 3, 1, 3) }
    ]
  },
  {
    id: "night",
    eyebrow: "Night rhythm",
    title: "How okay are you with evening or nocturnal energy?",
    options: [
      { id: "day", label: "Daytime", text: "I prefer animals active during normal hours.", scores: scores(2, 2, 2, 2, 2, 2, 3, 1) },
      { id: "evening", label: "Evening is fine", text: "Some late activity is okay.", scores: scores(2, 2, 2, 2, 2, 2, 2, 2) },
      { id: "night", label: "No problem", text: "Nocturnal rhythms do not bother me.", scores: scores(2, 2, 1, 3, 2, 2, 1, 3) }
    ]
  }
];

export const animalProfiles: AnimalProfile[] = [
  {
    slug: "cat",
    name: "Cat",
    fit: "Independent, warm presence",
    scores: scores(2, 2, 3, 2, 2, 2, 3, 2),
    strengths: { noise: "usually fits quieter homes", beginner: "often forgiving for thoughtful beginners", interaction: "can offer closeness without constant pressure" },
    challenges: { smell: "litter care needs consistency", interaction: "affection can be on their terms" }
  },
  {
    slug: "dog",
    name: "Dog",
    fit: "Loyal daily companion",
    scores: scores(3, 1, 1, 3, 1, 3, 1, 1),
    strengths: { interaction: "strong match for frequent bonding", time: "rewards hands-on daily care", space: "fits best with flexible space" },
    challenges: { budget: "vet, training, and care costs can rise", noise: "some dogs are vocal or reactive" }
  },
  {
    slug: "rat",
    name: "Rat",
    fit: "Bright close companion",
    scores: scores(1, 1, 2, 3, 2, 3, 2, 2),
    strengths: { space: "works well in smaller homes", interaction: "very social and engaging", time: "benefits from enrichment time" },
    challenges: { smell: "cage hygiene matters a lot", budget: "specialist vet access can matter" }
  },
  {
    slug: "rabbit",
    name: "Rabbit",
    fit: "Soft, quiet home energy",
    scores: scores(2, 2, 3, 2, 2, 2, 2, 2),
    strengths: { noise: "gentle fit for calmer homes", interaction: "can build a quiet bond", space: "enjoys a safe roaming area" },
    challenges: { beginner: "handling and diet need care", time: "daily cleaning and enrichment still matter" }
  },
  {
    slug: "chinchilla",
    name: "Chinchilla",
    fit: "Delicate evening rhythm",
    scores: scores(2, 3, 2, 2, 2, 1, 1, 3),
    strengths: { smell: "naturally low odor with good setup", night: "fits evening-friendly homes", noise: "generally not loud" },
    challenges: { beginner: "temperature and handling needs are specific", interaction: "not usually a cuddly companion" }
  }
];
