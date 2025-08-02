import { create } from 'zustand';

type UserState = {
  role?: string;
  setRole: (role: string) => void;
};

const useUserStore = create<UserState>((set) => ({
  role: undefined,
  setRole: (role: string) => {
    console.log("Setting role:", role); // Debugging log
    set({ role });
  },
}));

export default useUserStore;