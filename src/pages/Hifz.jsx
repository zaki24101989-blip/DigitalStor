import React from "react";
import { Bookmark, CheckCircle2 } from "lucide-react";

export default function Hifz() {
  return (
    <section className="page">
      <div className="page-title">
        <Bookmark size={25} />
        <div><h2>تتبع الحفظ</h2><p>سجل تقدمك في حفظ القرآن.</p></div>
      </div>
      <div className="stats-card">
        <div><strong>0</strong><span>آية محفوظة</span></div>
        <div><strong>0%</strong><span>نسبة الإنجاز</span></div>
        <div><strong>0</strong><span>سورة مكتملة</span></div>
      </div>
      <div className="info-card">
        <CheckCircle2 size={22} />
        <div>
          <strong>ابدأ من سورة الفاتحة</strong>
          <p>في الخطوة القادمة سنضيف تحديد الآيات المحفوظة وحفظ التقدم داخل الجلسة.</p>
        </div>
      </div>
    </section>
  );
}