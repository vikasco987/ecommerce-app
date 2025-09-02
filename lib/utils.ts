import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind + clsx classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
