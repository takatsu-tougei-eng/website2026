import SubmitButton from "@/app/components/SubmitButton";
import styles from "./WorkshopContent.module.css";

export interface WorkshopContentProps {
    title: string;
    description: string | string[];
    date: string;
    timeSchedule: [string, string][];
    place: string;
    capacity: number[];
    price: string;
    deadline: string;
    applicationTitle: string;
    applicationURL: string;
    notes: string[];
    imagePaths: string[];
}

export default function WorkshopContent({
    title,
    description,
    date,
    timeSchedule,
    place,
    capacity,
    price,
    deadline,
    applicationTitle,
    applicationURL,
    notes,
    imagePaths,
}: WorkshopContentProps) {
    // descriptionメッセージ
    const descriptionElm1 = function(description: string, i: number) {
        return (
            <div key={i} className={styles.workshop_content_description1_item}>
                <span className={styles.marker}>{description}</span>
            </div>
        );
    }
    const descriptionElm2 = function(description: string, i: number) {
        return (
            <div key={i} className={styles.workshop_content_description2_item}>
                {description}
            </div>
        );
    }
    const descriptionElements = Array.isArray(description)
        ? description.map((item, i) =>
            (i===0 ? descriptionElm1(item, i) : descriptionElm2(item, i)))
        : descriptionElm2(description, 0);


    // 画像は、２枚、または５枚のいずれかを表示
    const imageCount = imagePaths.length;
    const imageElements = imagePaths.map((imagePath, index) => {
        let imgClassName = styles.workshop_content_image;
        if (imageCount === 2) {
            imgClassName = styles.workshop_content_image_large;
        } else {
            if (index === 0) {
                // 最初だけ大きく表示
                imgClassName = styles.workshop_content_image_large;
            } else {
                // 残りは小さく表示
                imgClassName = styles.workshop_content_image_small;
            }
        }
        return (
            <img
                src={imagePath}
                alt={`${title} ${index + 1}`}
                className={imgClassName}
                key={index}
            />
        );
    });
    // 画像をcontainerに配置
    const leftImageContainerClassName = styles.workshop_image_container_large;
    let rightImageContainerClassName = styles.workshop_image_container_large;
    if (imageCount !== 2) {
        rightImageContainerClassName = styles.workshop_image_container_small;
    }

    return (
        <div className={styles.workshop_content}>
            <h3 className={styles.workshop_content_title}>
                {title}
            </h3>
            <div className={styles.workshop_content_description_container}>
                <div className={styles.workshop_content_description}>
                    {descriptionElements}
                </div>
                <div className={styles.workshop_image_container}>
                    <div className={leftImageContainerClassName}>
                        {imageElements[0]}
                    </div>
                    <div className={rightImageContainerClassName}>
                        {imageElements.slice(1)}
                    </div>
                </div>

                <div className={styles.workshop_content_table_container}>
                    <table className={styles.workshop_content_table}>
                        <thead>
                            <tr>
                                <th scope="col" />
                                <th scope="col">時間(3月8日)</th>
                                <th scope="col">定員</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeSchedule.map((time, i) => (
                                <tr key={i}>
                                    <th scope="row">第{i+1}部</th>
                                    <td>{time.join("～")}</td>
                                    <td>{capacity[i]}名</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.workshop_content_table_detail_container}>
                        <div>
                            費用： {price}
                        </div>
                        <div>
                            場所： {place}
                        </div>
                        <div>
                            申込期限： {deadline}
                        </div>
                    </div>
                </div>
                <div className={styles.workshop_content_notes_container}>
                    注意事項:<br />
                    <ul>
                        {notes.map((note, i) => (
                            <li key={i}>{note}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.submit_button_container}>
                    <SubmitButton
                        buttonText={applicationTitle}
                        href={applicationURL}
                    />
                </div>
            </div>
        </div>
    )
}