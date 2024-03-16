import create from 'zustand';

interface MyState {
  isMenuVisible: boolean;
  toggleMenu:()=>void
}

const useStore = create<MyState>()((set) => ({
  isMenuVisible: true,
  toggleMenu: () =>set((state)=>({isMenuVisible:!state.isMenuVisible})),
}));

export default useStore;
