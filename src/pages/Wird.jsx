import React, { useState } from "react";
import { Target, Plus, Minus } from "lucide-react";

export default function Wird() {
  const [goal, setGoal] = useState(10);
  const [done, setDone] = useState(0);
  const progress = Math.min(100, Math.round((done / goal) * 100));

  return (
    <section className="page">
      <div className="page-title">
        <Target size={25} />
        <div><h2>الورد اليومي</h2><p>حدد هدفك وتابع وردك اليومي.</p></div>
      </div>

      <div className="wird-card">
        <span>تقدم اليوم</span>
        <strong>{done} / {goal} آيات</strong>
        <div className="progress"><i style={{ width: `${progress}%` }} /></div>
        <small>{progress}% مكتمل</small>
      </div>

      <div className="counter-box">
        <h3>الهدف اليومي</h3>
        <div className="counter">
          <button onClick={() => setGoal(Math.max(1, goal - 1))}><Minus /></button>
          <b>{goal}</b>
          <button onClick={() => setGoal(goal + 1)}><Plus /></button>
        </div>
        <button className="primary-btn" onClick={() => setDone(Math.min(goal, done + 1))}>
          أنجزت آية
        </button>
      </div>
    </section>
  );
}