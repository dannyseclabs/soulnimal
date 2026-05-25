export type AnimalSlug = "rabbit" | "cat" | "rat" | "chinchilla" | "dog";

export type AnimalDetail = {
  slug: AnimalSlug;
  name: string;
  image: string;
  tagline: string;
  summary: string;
  traits: string[];
  facts: {
    lifespan: string;
    beginner: string;
    smell: string;
    noise: string;
    intelligence: string;
    social: string;
    monthlyCost: string;
    activity: string;
  };
  livingWith: string;
  care: {
    housing: string;
    diet: string;
    dailyTime: string;
  };
  pros: string[];
  cons: string[];
  commonMistakes: string[];
  bestFor: string[];
  notFor: string[];
  similar: AnimalSlug[];
};

export const animals: AnimalDetail[] = [
  {
    slug: "rabbit",
    name: "Rabbit",
    image: "/images/soulnimal-rabbit-window.jpg",
    tagline: "Quiet, delicate presence for calm homes",
    summary: "Rabbits feel gentle and peaceful, but they are not low-effort decor. They thrive with space, routine, and patient people who respect subtle body language.",
    traits: ["Quiet bond", "Soft routine", "Room to roam"],
    facts: {
      lifespan: "8-12 years",
      beginner: "Moderate",
      smell: "Low with cleaning",
      noise: "Very quiet",
      intelligence: "High",
      social: "Gentle daily presence",
      monthlyCost: "$45-$120",
      activity: "Calm but active"
    },
    livingWith: "Living with a rabbit is quiet, observant, and surprisingly relational. The bond builds through consistency: sitting nearby, offering safe enrichment, and learning what trust looks like without forcing cuddles.",
    care: {
      housing: "A large indoor pen or free-roam safe zone with traction, hiding spaces, chew-safe materials, and room to stretch.",
      diet: "Unlimited hay, measured pellets, leafy greens, fresh water, and careful treat control.",
      dailyTime: "About 45-90 minutes across feeding, cleaning, observation, and calm interaction."
    },
    pros: ["Deep quiet companionship", "Low noise", "Beautiful fit for calm interiors"],
    cons: ["Delicate digestion", "Needs rabbit-proofing", "Not always cuddly"],
    commonMistakes: ["Keeping them in a small cage", "Skipping hay as the diet foundation", "Picking them up too often"],
    bestFor: ["Quiet homes", "Patient adults", "People who enjoy gentle routines"],
    notFor: ["Very young children", "Homes with loose cords everywhere", "People expecting a plush toy personality"],
    similar: ["chinchilla", "cat", "rat"]
  },
  {
    slug: "cat",
    name: "Cat",
    image: "/images/soulnimal-cat-linen-couch.jpg",
    tagline: "Independent warmth with real emotional texture",
    summary: "Cats suit people who want companionship with breathing room. The best matches respect autonomy while still creating routine, safety, and affection.",
    traits: ["Independent", "Warm presence", "Low-pressure bond"],
    facts: {
      lifespan: "12-18 years",
      beginner: "Friendly",
      smell: "Moderate litter care",
      noise: "Usually low",
      intelligence: "High",
      social: "Varies by cat",
      monthlyCost: "$50-$160",
      activity: "Flexible"
    },
    livingWith: "A cat can make a home feel inhabited in the best way: quiet movement, chosen affection, and steady routines. The relationship is strongest when boundaries are respected.",
    care: {
      housing: "Indoor-safe home with scratching areas, resting places, litter boxes, climbing options, and window access.",
      diet: "Quality wet or dry food, fresh water, treats in moderation, and weight monitoring.",
      dailyTime: "About 30-60 minutes for feeding, litter, play, grooming checks, and attention."
    },
    pros: ["Balances closeness and independence", "Works in many homes", "Usually manageable daily care"],
    cons: ["Litter smell if neglected", "Scratching needs outlets", "Affection is not guaranteed on demand"],
    commonMistakes: ["Having too few litter boxes", "Ignoring play needs", "Punishing normal scratching instead of redirecting"],
    bestFor: ["Apartment living", "People who like calm companionship", "First-time owners who will learn basics"],
    notFor: ["People needing constant obedience", "Homes unwilling to manage litter", "Anyone allergic without a plan"],
    similar: ["rabbit", "dog", "rat"]
  },
  {
    slug: "rat",
    name: "Rat",
    image: "/images/soulnimal-rat-blanket.jpg",
    tagline: "Small-space intelligence with a close social bond",
    summary: "Pet rats are bright, social, and emotionally present. They are wonderful for people who want interaction, but their care is more involved than their size suggests.",
    traits: ["Very social", "Clever", "Small-space friendly"],
    facts: {
      lifespan: "2-3 years",
      beginner: "Moderate",
      smell: "Moderate",
      noise: "Low",
      intelligence: "Very high",
      social: "Needs same-species company",
      monthlyCost: "$35-$100",
      activity: "Curious and active"
    },
    livingWith: "Rats feel like tiny roommates: curious, responsive, and quick to learn household rhythms. They need daily attention and a clean, enriched setup.",
    care: {
      housing: "Large ventilated cage with levels, hammocks, hides, chew items, and safe out-of-cage time.",
      diet: "Balanced rat blocks, fresh vegetables, occasional protein, and careful treat limits.",
      dailyTime: "About 45-90 minutes for feeding, cleaning checks, enrichment, and interaction."
    },
    pros: ["Highly interactive", "Excellent for small homes", "Trainable and emotionally engaging"],
    cons: ["Short lifespan", "Cage odor needs management", "Exotic vet care can be harder to find"],
    commonMistakes: ["Keeping one rat alone", "Using dusty bedding", "Underestimating vet needs"],
    bestFor: ["People wanting a close small companion", "Curious adults", "Homes that can clean consistently"],
    notFor: ["People wanting a long-lived pet", "Very smell-sensitive homes", "Owners who dislike cage maintenance"],
    similar: ["cat", "rabbit", "chinchilla"]
  },
  {
    slug: "chinchilla",
    name: "Chinchilla",
    image: "/images/soulnimal-chinchilla-wood.jpg",
    tagline: "Soft evening energy for careful, cool homes",
    summary: "Chinchillas are beautiful, quiet, and specific. They suit owners who enjoy observation, routine, and precise husbandry more than cuddling.",
    traits: ["Low odor", "Evening rhythm", "Delicate handling"],
    facts: {
      lifespan: "10-20 years",
      beginner: "Special care",
      smell: "Low",
      noise: "Low to moderate",
      intelligence: "High",
      social: "Gentle, not cuddly",
      monthlyCost: "$40-$120",
      activity: "Evening active"
    },
    livingWith: "A chinchilla brings a soft, quiet presence, especially in the evening. The relationship is built through patience and respect for their sensitivity.",
    care: {
      housing: "Tall cage with ledges, cool room temperature, safe chew materials, dust bath access, and no humidity extremes.",
      diet: "High-quality hay, chinchilla pellets, fresh water, and very limited treats.",
      dailyTime: "About 30-60 minutes for feeding, dust bath rotation, spot cleaning, and supervised activity."
    },
    pros: ["Naturally low odor", "Long lifespan", "Quiet, refined presence"],
    cons: ["Heat sensitive", "Not ideal for cuddling", "Needs specific diet and dust bath care"],
    commonMistakes: ["Letting the room get too warm", "Offering sugary treats", "Handling roughly"],
    bestFor: ["Calm adult homes", "People who enjoy observation", "Owners comfortable with specific care"],
    notFor: ["Hot apartments", "Children wanting a cuddly pet", "People who travel often without care support"],
    similar: ["rabbit", "rat", "cat"]
  },
  {
    slug: "dog",
    name: "Dog",
    image: "/images/soulnimal-small-dog.jpg",
    tagline: "Loyal daily rhythm for people ready to show up",
    summary: "Dogs offer obvious companionship, but that bond is built from daily structure. They fit best when time, budget, training, and energy are honest from the start.",
    traits: ["Close bond", "Daily routine", "Training-friendly"],
    facts: {
      lifespan: "10-15 years",
      beginner: "Varies widely",
      smell: "Moderate",
      noise: "Moderate to high",
      intelligence: "High",
      social: "High",
      monthlyCost: "$90-$300+",
      activity: "Often active"
    },
    livingWith: "A dog changes the rhythm of a home. Walks, training, grooming, social needs, and emotional dependence become part of the day, not an occasional add-on.",
    care: {
      housing: "Safe indoor space, outdoor access or regular walks, training boundaries, rest areas, and breed-appropriate enrichment.",
      diet: "Complete dog food matched to size, age, health, and activity, with vet guidance as needed.",
      dailyTime: "Usually 1.5-3+ hours across walks, feeding, training, grooming, play, and settling."
    },
    pros: ["Deep companionship", "Highly interactive", "Can support active routines"],
    cons: ["Higher cost", "Training and socialization required", "Noise and separation needs can be hard"],
    commonMistakes: ["Choosing by looks over lifestyle", "Skipping training foundations", "Underestimating monthly cost"],
    bestFor: ["People with daily time", "Active or routine-driven homes", "Owners ready for training"],
    notFor: ["Very unpredictable schedules", "Noise-sensitive housing without planning", "People wanting low-maintenance care"],
    similar: ["cat", "rat", "rabbit"]
  }
];

export function getAnimalBySlug(slug: string) {
  return animals.find((animal) => animal.slug === slug);
}
