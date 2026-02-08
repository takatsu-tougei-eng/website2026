"use client";

/*
左に小さな画像があり、その右に回り込みの文字列があるコンポーネント
*/
import ReactMarkdown from "react-markdown";

import styles from "./TextDescription2.module.css";


export interface TextDescription2Props {
    subTitle?: string;
    description: string[];
    imagePath?: string;
    imageAlt?: string;
    floatDirection?: "left" | "right";
    useImage?: boolean;
}
export default function TextDescription2({
    subTitle,
    description,
    imagePath,
    imageAlt,
    floatDirection = "left",
    useImage = true
}: TextDescription2Props) {
    return (
        <div className={styles.text_description2}>
            <div>
                {subTitle && (
                    <h2 className="sub_title">
                        {subTitle}
                    </h2>
                )}
            </div>
            <div className={styles.text_description2_content_container}>
                {useImage && (
                <div
                    className={[
                        styles.text_description2_img_container,
                        floatDirection === "left"
                            ? styles.text_description2_img_container_float_left
                            : styles.text_description2_img_container_float_right
                    ].join(" ")}
                >
                    <img src={imagePath} alt={imageAlt} />
                </div>
                )}
                <div className={styles.text_description2_text_container}>
                    {description.map((text: string, i) => (
                        <ReactMarkdown key={i}>{text}</ReactMarkdown>
                    ))}
                </div>
            </div>
        </div>
    )
}