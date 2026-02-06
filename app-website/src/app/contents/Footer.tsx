import styles from "./Footer.module.css";

export default function Footer() {
    const footerContents = {
        plan: "企画・運営： 高津陶芸イベント実行委員会",
        organizer: "主催： まちの企画室",
        sponsor: "後援： 川崎市高津区役所",
        contact: "お問い合わせ： takatsu.mashiko@gmail.com",
    }
    const footerLinks = [
        {
            label: "プレスリリース",
            url: "/press-release",
        },
    ];

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
            <div className={styles.footer_links}>
                {footerLinks.map((link) => (
                    <a key={link.label} href={link.url} className={styles.footer_links_link}>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    )
}
