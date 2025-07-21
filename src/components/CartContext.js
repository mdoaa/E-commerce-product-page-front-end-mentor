
import { useState, createContext  } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartQuantity, setCartQuantity] = useState(0);

    const clearCart = () => {
        setCartQuantity(0);
    }

    return (
    <CartContext.Provider value={{ cartQuantity, setCartQuantity , clearCart }}>
      {children}
    </CartContext.Provider>
  );

}