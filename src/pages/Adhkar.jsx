import React, { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";

const adhkar = [
  "سبحان الله",
  "الحمد لله",
  "الله أكبر",
  "لا إله إلا الله"
];

export default function Adhkar() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <section className="page">
      <div className="page-title">
        <Sparkles size={25} />
        <div><h2>الأذكار والتسبيح</h2><p>عداد بسيط للذكر.</p></div>
      </div>

      <div className="dhikr-card">
        <span>الذكر الحالي</span>
        <h3>{adhkar[index]}</h3>
        <button className="tasbih" onClick={() => setCount(c => c + 1)}>{count}</button>
        <p>اضغط على الدائرة للتسبيح</p>
        <div className="dhikr-actions">
          <button onClick={() => setCount(0)}><RotateCcw size={17}/> تصفير</button>
          <button onClick={() => { setIndex((index + 1) % adhkar.length); setCount(0); }}>ذكر آخر</button>
        </div>
      </div>
    </section>
  );
}