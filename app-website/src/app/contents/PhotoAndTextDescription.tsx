import styles from "./PhotoAndTextDescription.module.css";

export interface PhotoAndTextDescriptionProps {
    descriptions: string[];
    imagePath: string;
    imageAlt: string;
}

export default function PhotoAndTextDescription({
    descriptions,
    imagePath,
    imageAlt
}: PhotoAndTextDescriptionProps) {
    return (
        <div className={styles.photo_and_text_description}>
            <div className={styles.photo_and_text_description_image}>
                <span className={styles.blur_background}>
                    <img
                        src={imagePath}
                        alt={imageAlt}
                        className={styles.photo_and_text_description_image_img}
                    />
                </span>
            </div>
            <div className={styles.photo_and_text_description_text}>
                {descriptions.map((description, index) => (
                    <div key={index} className={styles.photo_and_text_description_text_item}>
                        {description}
                    </div>
                ))}
            </div>
        </div>
    )
}
