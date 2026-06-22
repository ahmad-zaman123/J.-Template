import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { fetchCart, addCartItem, removeCartItem } from "../services/api";

const CartContext = createContext(null);
const STORAGE_KEY = "j_cart";

export function CartProvider({ children }) {
  // Mirror the cart in localStorage for instant paint, then sync from server.
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // Pull the authoritative cart from the server (keyed by x-session-id).
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const remote = await fetchCart();
      setItems(remote.filter((i) => i.product));
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const addToCart = useCallback(async (product, quantity = 1) => {
    if (!product?._id) return;
    setError(null);
    const item = await addCartItem(product._id, quantity);
    setItems((cur) => {
      const idx = cur.findIndex((i) => i._id === item._id);
      if (idx === -1) return [...cur, item];
      const copy = [...cur];
      copy[idx] = item;
      return copy;
    });
  }, []);

  const removeFromCart = useCallback(
    async (cartItemId) => {
      setError(null);
      const prev = items;
      setItems((cur) => cur.filter((i) => i._id !== cartItemId)); // optimistic
      try {
        await removeCartItem(cartItemId);
      } catch (err) {
        setItems(prev); // restore on failure
        setError(err.response?.data?.message || err.message);
      }
    },
    [items]
  );

  const clearLocal = useCallback(() => setItems([]), []);

  const subtotal = items.reduce(
    (sum, i) => sum + (i.product?.newprice || 0) * i.quantity,
    0
  );
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, loading, error, addToCart, removeFromCart, refresh, clearLocal, subtotal, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
