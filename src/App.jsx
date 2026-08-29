import React, { useState } from "react";
import { Moon, Sun, Search, BookOpen, Heart, Bookmark, Target, Sparkles } from "lucide-react";
import { useApp } from "./context/AppContext";
import SurahList from "./components/SurahList";
import Hifz from "./pages/Hifz";
import Wird from "./pages/Wird";
import Adhkar from "./pages/Adhkar";
import Favorites from "./pages/Favorites";

const navItems = [
  { id: "home", label: "الرئيسية", icon: BookOpen },
  { id: "hifz", label: "الحفظ", icon: Bookmark },
  { id: "wird", label: "الورد", icon: Target },
  { id: "adhkar", label: "الأذكار", icon: Sparkles },
  { id: "favorites", label: "المفضلة", icon: Heart }
];

export default function App() {
  const { dark, toggleDark, fontScale } = useApp();
  const [page, setPage] = useState("home");
  const [query, setQuery] = useState("");

  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={dark ? "app dark" : "app"} style={{ "--quran-scale": fontScale }}>
      <header className="topbar">
        <div className="brand" onClick={goHome}>
          <div className="brand-icon"><BookOpen size={22} /></div>
          <div>
            <h1>مسلم</h1>
            <span>القرآن الكريم والذكر</span>
          </div>
        </div>

        <button className="icon-btn" onClick={toggleDark} aria-label="تبديل الوضع">
          {dark ? <Sun size={21} /> : <Moon size={21} />}
        </button>
      </header>

      <main className="container">
        {page === "home" && (
          <>
            <section className="hero">
              <div>
                <span className="eyebrow">بسم الله الرحمن الرحيم</span>
                <h2>واجعل القرآن ربيع قلبك</h2>
                <p>اقرأ، احفظ، واستمع إلى القرآن الكريم في واجهة بسيطة وسلسة.</p>
              </div>
              <div className="hero-mark">﷽</div>
            </section>

            <section className="quick-grid">
              <button onClick={() => setPage("hifz")} className="quick-card">
                <Bookmark size={22} />
                <strong>متابعة الحفظ</strong>
                <span>تابع تقدمك</span>
              </button>
              <button onClick={() => setPage("wird")} className="quick-card">
                <Target size={22} />
                <strong>الورد اليومي</strong>
                <span>ابدأ وردك</span>
              </button>
              <button onClick={() => setPage("favorites")} className="quick-card">
                <Heart size={22} />
                <strong>المفضلة</strong>
                <span>آياتك المحفوظة</span>
              </button>
            </section>

            <section className="section-head">
              <div>
                <h2>سور القرآن الكريم</h2>
                <p>114 سورة • تصفح بسهولة</p>
              </div>
              <div className="search">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث عن سورة..."
                />
              </div>
            </section>

            <SurahList query={query} />
          </>
        )}

        {page === "hifz" && <Hifz />}
        {page === "wird" && <Wird />}
        {page === "adhkar" && <Adhkar />}
        {page === "favorites" && <Favorites />}
      </main>

      <nav className="bottom-nav">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={page === id ? "nav-item active" : "nav-item"}
            onClick={() => setPage(id)}
          >
            <Icon size={21} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}