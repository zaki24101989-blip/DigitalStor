import React from "react";
import SurahCard from "./SurahCard";
import { surahs } from "../data/surahs";

export default function SurahList({ query }) {
  const q = query.trim().toLowerCase();
  const filtered = surahs.filter(s =>
    !q || s.name.toLowerCase().includes(q) || String(s.number) === q
  );

  if (!filtered.length) {
    return <div className="empty">لم نجد سورة بهذا الاسم.</div>;
  }

  return (
    <div className="surah-list">
      {filtered.map(surah => <SurahCard key={surah.number} surah={surah} />)}
    </div>
  );
}