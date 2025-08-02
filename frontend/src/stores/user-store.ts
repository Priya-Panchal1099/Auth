import { create } from 'zustand';

// type UserState = {
//   role?: string;
//   setRole: (role: string) => void;
// };

// const useUserStore = create<UserState>((set) => ({
//   role: undefined,
//   setRole: (role: string) => {
//     console.log("Setting role:", role); // Debugging log
//     set({ role });
//   },
// }));

// export default useUserStore;

import { persist } from 'zustand/middleware';

type UserState = {
  role?: string;
  setRole: (role: string) => void;
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: undefined,
      setRole: (role: string) => {
        console.log("Setting role:", role);
        set({ role });
      },
    }),
    {
      name: 'user-storage', // unique name for the storage
      getStorage: () => localStorage, // use localStorage to persist the data
    }
  )
);

export default useUserStore;
