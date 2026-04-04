import { create } from 'zustand';

type User = {
  displayName: string;
  email: string;
  address: string;
};

type userActions = {
  updateDisplayName: (displayName: User["displayName"]) => void;
  updateEmail: (email: User["email"]) => void;
  updateAddress: (address: User["address"]) => void;
};

export const useUserStore = create<User & userActions>((set) => ({
  displayName: '',
  email: '',
  address: '',

  updateDisplayName: (displayName) => set({ displayName }),
  updateEmail: (email) => set({ email }),
  updateAddress: (address) => set({ address }),
}));
