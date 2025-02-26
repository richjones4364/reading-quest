import type { ReadingSection } from '@/types';

export const readingSections: ReadingSection[] = [
  {
    id: 1,
    title: "A Christmas Carol - Chapter 1",
    paragraphs: [
      "Marley was dead, to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it. And Scrooge's name was good upon 'Change for anything he chose to put his hand to. Old Marley was as dead as a doornail.",
      "Mind! I don't mean to say that I know, of my own knowledge, what there is particularly dead about a doornail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country's done for. You will therefore permit me to repeat, emphatically, that Marley was as dead as a doornail.",
      "Scrooge knew he was dead? Of course he did. How could it be otherwise? Scrooge and he were partners for I don't know how many years. Scrooge was his sole executor, his sole administrator, his sole assign, his sole residuary legatee, his sole friend, and sole mourner."
    ],
    questions: [
      {
        id: 1,
        text: "What was Marley's condition at the beginning of the story?",
        options: ["Alive", "Dead", "Sleeping", "On vacation"],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "Who signed Marley's burial register?",
        options: [
          "Only Scrooge",
          "The undertaker only",
          "The clergyman, clerk, undertaker, and chief mourner",
          "No one"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "What was Scrooge's relationship to Marley?",
        options: [
          "They were brothers",
          "They were enemies",
          "They were business partners",
          "They were neighbors"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "What does the narrator compare Marley's deadness to?",
        options: [
          "A coffin-nail",
          "A doornail",
          "A gravestone",
          "A funeral bell"
        ],
        correctAnswer: 1
      }
    ]
  }
];