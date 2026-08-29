import React from "react";
import { Heart } from "lucide-react";
import { useApp } from "../context/AppContext";
import { surahs } from "../data/surahs";
import SurahCard from "../components/SurahCard";

export default function Favorites() {
  const { favorites } = useApp();
  const list = surahs.filter(s => favorites.includes(s.number));

  return (
    <section className="page">
      <div className="page-title">
        <Heart size={25} />
        <div><h2>المفضلة</h2><p>السور التي أضفتها للمفضلة.</p></div>
      </div>
      {list.length
        ? <div className="surah-list">{list.map(s => <SurahCard key={s.number} surah={s}/>)}</div>
        : <div className="empty">لم تضف أي سورة للمفضلة بعد.</div>
      }
    </section>
  );
}