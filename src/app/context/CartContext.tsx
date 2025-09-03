// "use client";
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (exists) {
//         // if already exists, increase quantity
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove product
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// // Custom hook for using cart
// export const useCart = () => useContext(CartContext);



















// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity?: number;
// };

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: CartItem) => {
//     console.log("Adding to cart:", product); // 👈 Debug log
//     setCart((prev) => {
//       // If product exists, increase qty
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }










// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// };

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: CartItem) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   // ✅ Derived values
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }







// //C:\Users\VIKASH\ecommerce-app\src\app\context\CartContext.tsx
// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { Product} from "@/types/product";// 👈 import shared Product type

// type CartItem = Product & { quantity: number }; // 👈 extend Product with quantity

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: Product) => void; // 👈 accept Product (not CartItem)
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }]; // 👈 add quantity automatically
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   // ✅ Derived values
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }










// // src/app/context/CartContext.tsx
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { Product } from "@/types/product"; // ✅ Make sure Product has id (string|number) and price (number)

// type CartItem = Product & { quantity: number };

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string | number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // ✅ Load cart from localStorage (persist across refresh)
//   useEffect(() => {
//     const saved = localStorage.getItem("cart");
//     if (saved) {
//       setCart(JSON.parse(saved));
//     }
//   }, []);

//   // ✅ Save cart to localStorage on change
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string | number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }

// // src/app/context/CartContext.tsx
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { Product, CartItem } from "@/types/product";

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: Product) => void; // 👈 accept Product (not CartItem)
//   removeFromCart: (id: string | number) => void;
//   updateQuantity: (id: string | number, quantity: number) => void; // ✅ added
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // ✅ Load cart from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("cart");
//       if (saved) {
//         setCart(JSON.parse(saved));
//       }
//     }
//   }, []);

//   // ✅ Save cart to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string | number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string | number, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, totalItems, totalPrice, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }


















// // src/app/context/CartContext.tsx
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { Product, CartItem } from "@/types/product";

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: Product) => void; // accept Product
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Load cart from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("cart");
//       if (saved) {
//         setCart(JSON.parse(saved));
//       }
//     }
//   }, []);

//   // Save cart to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item._id === product._id); // ✅ use _id
//       if (existing) {
//         return prev.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item._id !== id)); // ✅ use _id
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) => (item._id === id ? { ...item, quantity } : item))
//     );
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         totalItems,
//         totalPrice,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }





// // src/app/context/CartContext.tsx
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { Product, CartItem } from "@/types/product";

// type CartContextType = {
//   cart: CartItem[];
//   totalItems: number;
//   totalPrice: number;
//   addToCart: (product: Product) => void;   // ✅ accept Product only
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Load cart from localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("cart");
//       if (saved) {
//         setCart(JSON.parse(saved));
//       }
//     }
//   }, []);

//   // Save cart to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart]);

//   // ✅ Always convert Product → CartItem here
//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item._id === product._id);
//       if (existing) {
//         return prev.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }]; // ✅ auto-add quantity
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item._id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) => (item._id === id ? { ...item, quantity } : item))
//     );
//   };

//   const clearCart = () => setCart([]);

//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         totalItems,
//         totalPrice,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// }







"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, CartItem } from "@/types/product";

type CartContextType = {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      if (saved) setCart(JSON.parse(saved));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      // Check if product with same _id already exists
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        // Increment quantity only for same product
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new product
      return [...prev, { ...product, _id: product._id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
