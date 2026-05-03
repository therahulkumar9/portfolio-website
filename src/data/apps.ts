export type AppItem = {
  name: string;
  tagline: string;
  rating: string;
  installs: string;
  description: string;
  category: string;
  initials: string;
  color: string;
  play?: string;
  ios?: string;
};

export const apps: AppItem[] = [
  {
    name: "TryOn AI",
    tagline: "Try on clothes & outfits",
    rating: "4.3",
    installs: "10K+",
    description: "Virtually try outfits on yourself in seconds, powered by AI.",
    category: "Shopping",
    initials: "TO",
    color: "from-pink-500 to-rose-600",
    play: "https://play.google.com/store/apps/details?id=com.ai.tryon.clothes.outfits",
    ios: "https://apps.apple.com/us/app/tryon-ai-try-on-clothes/id6752288197",
  },
  {
    name: "FactJano",
    tagline: "Did you know facts",
    rating: "4.4",
    installs: "10K+",
    description: "Fuel your curiosity with a fascinating fact every day.",
    category: "Books & Reference",
    initials: "FJ",
    color: "from-amber-400 to-orange-600",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.factjano",
    ios: "https://apps.apple.com/us/app/factjano-daily-micro-learning/id6664073325",
  },
  {
    name: "Cat Games for Cats",
    tagline: "Interactive cat toy",
    rating: "4.4",
    installs: "100+",
    description: "Turn your phone into an interactive toy your cat will actually love.",
    category: "Casual game",
    initials: "CG",
    color: "from-purple-500 to-fuchsia-600",
    play: "https://play.google.com/store/apps/details?id=com.pet.cats.games.kittens",
  },
  {
    name: "PocketMind",
    tagline: "Smart Study AI",
    rating: "4.6",
    installs: "1K+",
    description: "Turn any topic into flashcards, quizzes & study roadmaps with AI.",
    category: "Education",
    initials: "PM",
    color: "from-sky-400 to-blue-600",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.pocket_mind_app",
    ios: "https://apps.apple.com/us/app/quiz-maker-ai-pocketmind/id6740739787",
  },
  {
    name: "Breava",
    tagline: "Breathwork & Calm",
    rating: "4.5",
    installs: "10+",
    description: "A simple breathing app for stress, sleep and focus. No clutter — just breath.",
    category: "Health & Fitness",
    initials: "BR",
    color: "from-emerald-400 to-teal-600",
    play: "https://play.google.com/store/apps/details?id=com.tdevs.respira.breathing",
    ios: "https://apps.apple.com/us/app/breava-breathwork-calm/id6762538253",
  },
  {
    name: "Appixa",
    tagline: "AI Photo Enhancer",
    rating: "4.2",
    installs: "500+",
    description: "Enhance, restore and transform photos with template-based AI editing.",
    category: "Photography",
    initials: "AX",
    color: "from-indigo-500 to-violet-600",
    play: "https://play.google.com/store/apps/details?id=ai.photo.editor.appixa.photoenhancer",
    ios: "https://apps.apple.com/us/app/ai-photo-enhancer-appixa/id6759392881",
  },
  {
    name: "Imate",
    tagline: "AI boyfriend who cares",
    rating: "4.7",
    installs: "10K+",
    description: "A caring AI companion — chat, flirt, vent, unwind. Always there, always warm.",
    category: "Entertainment",
    initials: "IM",
    color: "from-rose-400 to-red-600",
    play: "https://play.google.com/store/apps/details?id=ai.boyfriend.imate.virtual.companion",
    ios: "https://apps.apple.com/us/app/ai-boyfriend-chat-imate/id6754762584",
  },
  {
    name: "Imiss",
    tagline: "Caring AI Girlfriend",
    rating: "4.6",
    installs: "New",
    description: "A warm, playful AI girlfriend who chats, calls and makes moments feel real.",
    category: "Entertainment",
    initials: "IS",
    color: "from-pink-400 to-purple-600",
    play: "https://play.google.com/store/apps/details?id=com.imiss.ai.girlfriend.simulator",
  },
  {
    name: "BMatrix AI",
    tagline: "Body Fitness Check",
    rating: "4.3",
    installs: "100+",
    description: "AI-powered body scan — posture, symmetry and fitness insights from one photo.",
    category: "Health & Fitness",
    initials: "BM",
    color: "from-lime-400 to-green-600",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.bmatrix_ai",
    ios: "https://apps.apple.com/us/app/fitness-check-ai-bmatrix/id6748861833",
  },
];
