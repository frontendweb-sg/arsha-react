import { ReactNode, createContext, useContext, useState } from "react";
import useCart, { Cart } from "../hooks/useCart";
import useConfirm, { ConfirmProps } from "../hooks/useConfirm";

interface AppState {
  cart: Cart;
  addItem: (item: Cart) => void;
  theme: Theme;
  changeTheme: () => void;
  confirm: ConfirmProps;
  onConfirm: (state: ConfirmProps) => void;
  onCancel: () => void;
}

type Theme = "light" | "dark";
export const AppContext = createContext<null | AppState>(null); // first step

export default function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? "light"
  );
  const { addItem, cart } = useCart();
  const { confirm, onCancel, onConfirm } = useConfirm();

  const changeTheme = () => {
    setTheme(() => {
      const t = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", t);
      return t;
    });
  };

  return (
    <AppContext.Provider
      value={{
        addItem,
        cart,
        theme,
        changeTheme,
        confirm,
        onCancel,
        onConfirm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
} // 2nd step

export function useAppState() {
  const context = useContext<AppState | null>(AppContext);
  if (!context) throw new Error("Context can not be empty");
  return context;
}
