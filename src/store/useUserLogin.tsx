import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserLoginState {
    token: string;
    addToken: (token: string) => void;
    removeToken: () => void;
}

const useUserLoginStore = create<UserLoginState>()(
    persist(
        (set) => ({
            token: "",
            addToken: (token) =>
                set(() => ({
                    token: token,
                })),
            removeToken: () =>
                set(() => ({
                    token: "",
                })),
        }),
        {
            name: "user-login-storage",
        }
    )
);


export default useUserLoginStore;
