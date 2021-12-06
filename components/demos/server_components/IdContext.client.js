import { createContext, useContext } from 'react';

export const IdContext = createContext(null);
export function useLocation() {
  return useContext(LocationContext);
}