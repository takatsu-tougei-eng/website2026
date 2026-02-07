import styles from "./Flyers.module.css";

export default function Flyers() {
    const flyers = [
        {
            image: "/images/press_release/2026_flyer.png",
            alt: "広報用チラシ",
            url: "/pdf/2026_flyer.pdf",
        },
    ];

    return (
        <div className={styles.flyers_container}>
            {flyers.map((flyer, i) => (
                <div key={i} className={styles.one_flyer_container}>
                    <div className={styles.flyer_image_container}>
                        <a href={flyer.url} target="_blank">
                            <img
                                src={flyer.image}
                                alt={flyer.alt}
                                className={styles.flyer_image}
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
