import React from "react";
import { Bookmark, Heart } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function SurahCard({ surah }) {
  const { favorites, toggleFavorite } = useApp();
  const favorite = favorites.includes(surah.number);

  return (
    <article className="surah-card">
      <div className="surah-number">{surah.number}</div>
      <div className="surah-info">
        <h3>{surah.name}</h3>
        <span>{surah.type} • {surah.ayahs} آية</span>
      </div>
      <div className="surah-actions">
        <button className="mini-btn" title="متابعة">
          <Bookmark size={18} />
        </button>
        <button
          className={favorite ? "mini-btn favorite" : "mini-btn"}
          onClick={() => toggleFavorite(surah.number)}
          title="المفضلة"
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
    </article>
  );
}