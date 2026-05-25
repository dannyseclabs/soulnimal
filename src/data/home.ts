export const quizPreviewLabels = ["Lifestyle", "Sensory fit", "Budget"] as const;

export const featuredAnimals = [
  {
    name: "Quiet cat",
    fit: "Independent companion",
    image: "/images/soulnimal-cat-linen-couch.jpg",
    notes: ["Soft routine", "Warm home energy", "Low-pressure bond"]
  },
  {
    name: "Pet rat",
    fit: "Curious close companion",
    image: "/images/soulnimal-rat-blanket.jpg",
    notes: ["Social and bright", "Small-space friendly", "Needs enrichment"]
  },
  {
    name: "House rabbit",
    fit: "Calm, delicate presence",
    image: "/images/soulnimal-rabbit-window.jpg",
    notes: ["Quiet home", "Careful handling", "Space to roam"]
  },
  {
    name: "Chinchilla",
    fit: "Gentle evening rhythm",
    image: "/images/soulnimal-chinchilla-wood.jpg",
    notes: ["Cool dry space", "Soft interaction", "Night energy"]
  }
] as const;

export const ownershipChecks = [
  {
    icon: "clock",
    title: "Time has texture",
    text: "A good match considers weekday energy, cleaning rhythms, travel, and the repeated care that shapes daily life."
  },
  {
    icon: "home",
    title: "Your space is part of the bond",
    text: "Noise, scent, floor type, sunlight, neighbors, and retreat areas can matter as much as personality."
  },
  {
    icon: "cost",
    title: "Costs should feel honest",
    text: "Food is only one part. Grooming, enrichment, insurance, vet care, and emergencies belong in the decision."
  }
] as const;
