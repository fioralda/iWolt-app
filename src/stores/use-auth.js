import create from 'zustand';
import getFirebase from '../firebase';

const firebaseInstance = getFirebase();
const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  email: null,
  error: null,
  login: async (email, password) => {
    try {
      set(() => ({
        isLoading: true,
        error: null,
      }));
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email, password);
        set(() => ({
          isLoading: false,
          isAuthenticated: true,
          user: user,
          email: email,
        }));
      }
    } catch (error) {
      console.log('error', error);
      set(() => ({
        isLoading: false,
        error: error,
      }));
    }
  },
  register: async (email, password) => {
    try {
      set(() => ({
        isLoading: true,
        error: null,
      }));
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log(user);
        set(() => ({
          isLoading: false,
          isAuthenticated: true,
          user: user,
          email: email,
        }));
      }
    } catch (error) {
      console.log('error', error);
      set(() => ({
        isLoading: false,
        error: error,
      }));
    }
  },
  logout: () => {
    set(() => ({
      isLoading: false,
      error: null,
      isAuthenticated: false,
      user: null,
      email: null,
    }));
  },
}));

export default useAuthStore;
