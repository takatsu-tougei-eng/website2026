import styles from "./Footer.module.css";

export default function Footer() {
    const footerContents = {
        plan: "企画・運営： 高津陶芸イベント実行委員会",
        sponsor: "後援： 川崎市高津区役所、大山街道アクションフォーラム運営委員会「まちの企画室」",
        contact: "お問い合わせ： machi.kikaku.worldcafe@gmail.com",
    }

    return (
        <div className={styles.footer}>
            <img
                src="/images/header_bar_background.png"
                alt="Footer Logo"
                className={styles.footer_logo}
            />
            <div className={styles.footer_contents}>
                {Object.entries(footerContents).map(([key, value]) => (
                    <div key={key}>
                        {value}
                    </div>
                ))}
            </div>
        </div>
    )
}
