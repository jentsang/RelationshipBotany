export interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    type: 'A' | 'B' | 'C' | 'D';
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "When someone you're dating takes 12 hours to text back, you feel...",
    answers: [
      { text: "Fine. They are probably just busy, I'll text them later.", type: 'A' },
      { text: "Panicked. Did I say something wrong? Are they losing interest?", type: 'B' },
      { text: "Relieved, honestly. I enjoy the quiet time and space.", type: 'C' },
      { text: "Anxious that they hate me, but also annoyed and thinking about ignoring them.", type: 'D' },
    ],
  },
  {
    id: 2,
    question: "How do you handle a disagreement with your partner?",
    answers: [
      { text: "I want to sit down, talk it out calmly, and find a solution together.", type: 'A' },
      { text: "I need to fix it immediately. I can't sleep if we are fighting.", type: 'B' },
      { text: "I need to walk away. I get overwhelmed and prefer to deal with it later.", type: 'C' },
      { text: "I push them away to see if they'll fight for me, even though it stresses me out.", type: 'D' },
    ],
  },
  {
    id: 3,
    question: "It's Saturday. Your partner wants to spend the entire weekend together. You think:",
    answers: [
      { text: "Sounds great! I love spending time together, but we can do our own hobbies side-by-side.", type: 'A' },
      { text: "Yes, absolutely! I want to do everything together.", type: 'B' },
      { text: "That sounds suffocating. I need at least one day completely to myself.", type: 'C' },
      { text: "I want to say yes because I crave the closeness, but I also feel trapped thinking about it.", type: 'D' },
    ],
  },
  {
    id: 4,
    question: "When thinking about making long-term future plans...",
    answers: [
      { text: "I'm excited to envision our future and plan it together.", type: 'A' },
      { text: "I need to lock plans down right now so I feel secure that they aren't leaving.", type: 'B' },
      { text: "I prefer keeping things open-ended so I don't feel tied down.", type: 'C' },
      { text: "I want to make plans, but panic and want to back out when it gets too real.", type: 'D' },
    ],
  },
  {
    id: 5,
    question: "When it comes to saying \"I love you\" first...",
    answers: [
      { text: "I'm comfortable saying it whenever I truly feel it.", type: 'A' },
      { text: "I'll say it, but I am terrified they won't say it back immediately.", type: 'B' },
      { text: "I'll wait for them to say it, or avoid the conversation entirely.", type: 'C' },
      { text: "I want to say it so badly, but I completely freeze up.", type: 'D' },
    ],
  },
  {
    id: 6,
    question: "How much personal space do you need?",
    answers: [
      { text: "I enjoy my alone time, but I'm always happy to reunite.", type: 'A' },
      { text: "I hate being apart for too long; it makes me uneasy.", type: 'B' },
      { text: "It is essential for my survival. I need a lot of it.", type: 'C' },
      { text: "I isolate myself when I get overwhelmed, even if I'm actually feeling lonely.", type: 'D' },
    ],
  },
  {
    id: 7,
    question: "When your partner is visibly upset...",
    answers: [
      { text: "I offer support and ask them what they need from me.", type: 'A' },
      { text: "I immediately assume it's my fault and frantically try to fix it.", type: 'B' },
      { text: "I give them space and hope they figure it out on their own.", type: 'C' },
      { text: "I feel overwhelmed and unsure how to help without making things worse.", type: 'D' },
    ],
  },
  {
    id: 8,
    question: "Meeting their friends and family feels like...",
    answers: [
      { text: "A fun milestone! I'm excited to see where they come from.", type: 'A' },
      { text: "A test. I am desperate for them to like me.", type: 'B' },
      { text: "Unnecessary pressure. I prefer to keep my relationship separate.", type: 'C' },
      { text: "High anxiety. What if they see the \"real\" me and tell my partner to run?", type: 'D' },
    ],
  },
  {
    id: 9,
    question: "How do you handle emotional vulnerability?",
    answers: [
      { text: "It feels natural and safe with the right person.", type: 'A' },
      { text: "I tend to overshare early on to build a bond quickly.", type: 'B' },
      { text: "I keep my walls up high. Trust is rarely given.", type: 'C' },
      { text: "I want to open up, but it feels incredibly dangerous to let anyone in.", type: 'D' },
    ],
  },
  {
    id: 10,
    question: "To you, the ideal relationship feels like...",
    answers: [
      { text: "A safe harbor.", type: 'A' },
      { text: "A constant, intense merger of two souls.", type: 'B' },
      { text: "Two independent ships comfortably sailing in parallel.", type: 'C' },
      { text: "A rollercoaster I want to ride, but I'm constantly checking the safety harness.", type: 'D' },
    ],
  },
];

export interface PlantResult {
  type: 'A' | 'B' | 'C' | 'D';
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  funFact: string;
  relationshipTips: string[];
}

export const plantResults: PlantResult[] = [
  {
    type: 'A',
    name: 'Sunflower',
    title: 'The Sunflower (Secure Attachment)',
    description: "You are the bright and sturdy Sunflower! You have a Secure Attachment Style. You are comfortable with intimacy and naturally turn toward the light in your relationships. Just like a Sunflower, you have deep, strong roots, you are incredibly resilient, and you bring a warm, consistent energy to the people you love.",
    imageUrl: '', // Will be replaced with pixel art
    funFact: "🌻 Sunflowers track the sun from east to west during the day, just like how secure people naturally orient toward healthy connections!",
    relationshipTips: [
      "Continue modeling healthy communication - your secure style helps partners feel safe.",
      "Remember that not everyone had the same upbringing. Be patient with partners who are learning to trust.",
      "Your natural warmth is a gift, but don't forget to advocate for your own needs too.",
      "Keep nurturing your friendships and hobbies outside the relationship - roots need strong soil."
    ]
  },
  {
    type: 'B',
    name: 'Fern',
    title: 'The Fern (Anxious Attachment)',
    description: 'You are the beautiful, sensitive Fern! You have an Anxious Attachment Style. You love deeply and have a huge capacity for care, but you require consistent "humidity" and reassurance to feel safe. If you feel neglected, your fronds might crisp up and faint—but with an attentive, loving partner, you are incredibly lush and rewarding.',
    imageUrl: '', // Will be replaced with pixel art
    funFact: "🌿 Ferns thrive in consistent humidity and light - they don't like sudden changes, just like anxious attachers prefer stability and routine!",
    relationshipTips: [
      "Practice self-soothing techniques when anxiety spikes - your partner can't always be available immediately.",
      "Communicate your needs clearly instead of testing your partner to see if they 'just know.'",
      "Build a strong sense of self outside the relationship through hobbies, friendships, and therapy.",
      "Learn to sit with discomfort instead of seeking constant reassurance. Not every silence means something is wrong."
    ]
  },
  {
    type: 'C',
    name: 'Cactus',
    title: 'The Cactus (Avoidant Attachment)',
    description: "You are the fiercely independent Cactus! You have an Avoidant Attachment Style. You are highly self-reliant and value your personal space above all else. You don't need constant watering (or constant texting) to survive, and you quickly feel smothered if someone tries to over-nurture you.",
    imageUrl: '', // Will be replaced with pixel art
    funFact: "🌵 Cacti can survive months without water by storing it internally - much like how avoidant people are masters at emotional self-sufficiency!",
    relationshipTips: [
      "Recognize that needing space is valid, but complete emotional withdrawal can hurt your partner.",
      "Practice vulnerability in small doses. Share one feeling or fear per week with someone you trust.",
      "Understand that intimacy doesn't mean losing yourself - you can be close AND independent.",
      "Notice when you're using 'logic' to avoid uncomfortable emotions. Sometimes feelings just need to be felt."
    ]
  },
  {
    type: 'D',
    name: 'Orchid',
    title: 'The Orchid (Fearful-Avoidant Attachment)',
    description: "You are the complex, beautiful Orchid! You have a Fearful-Avoidant Attachment Style. You deeply crave connection and love, but you are also easily overwhelmed when things get too close. You require a very specific, delicate balance of care and space to truly open up—but when you do, it's incredibly rewarding.",
    imageUrl: '', // Will be replaced with pixel art
    funFact: "🌸 Orchids need very specific conditions to bloom - too much water kills them, too little wilts them. They're high-maintenance but breathtakingly beautiful!",
    relationshipTips: [
      "Recognize the push-pull pattern: you want closeness, then panic and withdraw. Name it when it's happening.",
      "Therapy (especially EMDR or somatic work) can be transformative for processing past relationship trauma.",
      "Communicate your conflicting feelings to your partner instead of acting them out through hot-and-cold behavior.",
      "Find a partner who is patient, secure, and can hold space for your complexity without taking it personally."
    ]
  },
];