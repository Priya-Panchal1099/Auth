import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  role?: string;
  userId?: number;
  setRole: (role: string) => void;
  setUserId: (id: number) => void;
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: undefined,
      userId: undefined,
      setRole: (role: string) => {
        console.log("Setting role:", role);
        set({ role });
      },
      setUserId: (id: number) => {
        console.log("Setting userId:", id);
        set({ userId: id });
      },
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
