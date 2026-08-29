import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem("muslim-dark") === "1");
  const [fontScale, setFontScale] = useState(() => Number(localStorage.getItem("muslim-font") || 1));
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("muslim-favorites") || "[]"); }
    catch { return []; }
  });
  const [savedAyahs, setSavedAyahs] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem("muslim-saved") || "[]"); }
    catch { return []; }
  });

  useEffect(() => localStorage.setItem("muslim-dark", dark ? "1" : "0"), [dark]);
  useEffect(() => localStorage.setItem("muslim-font", String(fontScale)), [fontScale]);
  useEffect(() => sessionStorage.setItem("muslim-favorites", JSON.stringify(favorites)), [favorites]);
  useEffect(() => sessionStorage.setItem("muslim-saved", JSON.stringify(savedAyahs)), [savedAyahs]);

  const toggleFavorite = (surahNumber) => {
    setFavorites(prev =>
      prev.includes(surahNumber) ? prev.filter(n => n !== surahNumber) : [...prev, surahNumber]
    );
  };

  return (
    <AppContext.Provider value={{
      dark,
      toggleDark: () => setDark(v => !v),
      fontScale,
      increaseFont: () => setFontScale(v => Math.min(1.35, +(v + 0.05).toFixed(2))),
      decreaseFont: () => setFontScale(v => Math.max(0.85, +(v - 0.05).toFixed(2))),
      favorites,
      toggleFavorite,
      savedAyahs,
      setSavedAyahs
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}