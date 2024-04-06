import create from 'zustand';

interface ScrollStore {
  isSticky: boolean;
  setIsSticky: (isSticky: boolean) => void;
  handleScroll: () => void;
}

const useScrollStore = create<ScrollStore>((set) => ({
  isSticky: false,
  setIsSticky: (isSticky) => set({ isSticky }),
  handleScroll: () => {
    const introductionContentRef = document.querySelector('.introduction-content') as HTMLDivElement;
    if (introductionContentRef) {
      const introContentRect = introductionContentRef.getBoundingClientRect();
      const isContentInView = introContentRect.top <= 100 && introContentRect.top >= -607;
      set({ isSticky: isContentInView });
    }
  }
}));

export default useScrollStore;
