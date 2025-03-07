import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  user: null,
  notes: [],
  login: async (email, password) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login", { user_email: email, password });
      set({ user: res.data.user });
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (err) {
      alert("Login failed");
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
}));

export default useStore;