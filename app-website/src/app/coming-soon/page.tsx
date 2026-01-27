"use client";

import HeroSimple from "@/app/contents/HeroSimple";
import EventOverview from "@/app/contents/EventOverview";

import styles from "./page.module.css";

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <HeroSimple />
        <EventOverview />
      </header>
      <main className={styles.main}>
        <div className={styles.notice}>
          <p className={styles.title}>現在準備中です</p>
          <p className={styles.description}>
            お申込みの手続きは、現在準備中です。<br />
            公開までしばらくお待ちください。<br />
            <a href="#" onClick={() => window.history.back()}>前のページへ戻る</a>
          </p>
        </div>
      </main>
    </div>
  );
}
