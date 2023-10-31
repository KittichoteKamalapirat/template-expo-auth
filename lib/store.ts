import { create } from "zustand";

import { GradeSpeech, Kishimoto } from "../types";
interface PronunciationStore {
  gradeResults: (GradeSpeech | undefined)[];
  currentIndex: number;
  currentLevel: string;
  match: Kishimoto | null;
  scores: (number | undefined)[]; //[undefined, 1,]

  setLevel: (level: string) => void;
  updateScore: (score: number) => void;
  updateGradeResult: (gradeResult: GradeSpeech) => void;

  // pronunciation: () => PronunciationPractice;
  nextText: () => void;
  prevText: () => void;
  resetStore: () => void;
  setMatch: (kishimoto: Kishimoto) => void;

  // canNext: () => boolean;
  // canPrev: () => boolean;
}
export const usePronunciationStore = create<PronunciationStore>((set, get) => ({
  // pronunciation: () =>
  //   top100Daily.filter((vocab) => vocab.level === get().currentLevel)?.[
  //     get().currentIndex
  //   ],
  gradeResults: [],
  currentIndex: 0,
  currentLevel: "1",
  match: null,
  updateGradeResult: (gradeResult: GradeSpeech) => {
    const updatedGradeResults = get().gradeResults || [];
    updatedGradeResults[get().currentIndex] = gradeResult;

    set({ gradeResults: updatedGradeResults });
  },

  setLevel: (level) => set({ currentLevel: level }),
  setMatch: (kishimoto) => set({ match: kishimoto }),
  nextText: () => {
    set((state) => ({ currentIndex: state.currentIndex + 1, match: null }));
  },
  prevText: () => {
    set((state) => ({ currentIndex: state.currentIndex - 1 }));
  },

  scores: [],
  resetStore: () => {
    set({ currentIndex: 0, scores: [], gradeResults: [], currentLevel: "" });
  },
  updateScore: (score) => {
    const updatedScores = get().scores || [];
    updatedScores[get().currentIndex] = score;

    set({ scores: updatedScores });
  },
}));
