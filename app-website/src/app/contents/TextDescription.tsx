import styles from "./TextDescription.module.css";

interface TextDescriptionProps {
    description: string[];
    imagePath?: string;
}
export default function TextDescription({ description, imagePath }: TextDescriptionProps) {
    // 改行を<br>に変換
    const descriptionWithBr = description.map(item => item.replace(/\n/g, "<br class='br_pc' />"));
    // 要素ごとに<p>で囲む
    const descriptionWithP = descriptionWithBr.map(item => `<p>${item}</p>`);

    return (
        <div className={styles.text_description}>
            <div className={styles.text_description_text}>
                <span dangerouslySetInnerHTML={{ __html: descriptionWithP.join("") }} />
            </div>
            {imagePath && (
                <div>
                    <img
                        src={imagePath} alt="description"
                        className={styles.text_description_image}
                    />
                </div>
            )}
        </div>
    )
}
