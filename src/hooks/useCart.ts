import { useState } from "react";

interface User {
  name: string;
  email: string;
  [key: string]: string | number; // dynamic
}

export interface Cart {
  items: Array<object>;
  total: number;
  users: User[];
}
export default function useCart() {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    users: [{ name: "", email: "", p: "", age: 2 }],
  });

  const addItem = (item: object) => {
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, item],
      total: prev.items.length,
    }));
  };

  return {
    cart,
    addItem,
  };
}
