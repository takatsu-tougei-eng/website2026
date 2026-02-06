import styles from "./HeroSimple.module.css";

export default function Hero() {
    const subTitle = "～ 人間国宝・濱田庄司の志と本場「益子焼」の匠の技を体験 ～";

    const description = 
        "川崎市高津区は、近代陶芸の巨匠であり人間国宝の濱田庄司（1894-1978年）が生まれた歴史と文化が息づく街です。" +
        "彼が生涯を捧げて芸術へと高めた「益子焼」の魅力を地元の皆様に再発見していただくため、" +
        "今年も栃木県益子町から熟練の伝統工芸士の方々をお招きします。";

    return (
        <div className={styles.hero}>
            <div className={styles.hero_title_container}>
                <div className={styles.speech_bubble}>
                    益子焼
                </div>
                <h1>
                    <a href="/" className={styles.hero_title_link}>
                        陶芸匠フェスタ in 高津
                    </a>
                </h1>
            </div>
        </div>
    )
}
