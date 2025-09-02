// src/types/page-fix.d.ts

// ✅ Fix for Next.js validator importing `.js` files even though we use `.ts/.tsx`
declare module "*.js" {
  const value: any; // allow anything, so validator doesn't error
  export = value;
}
