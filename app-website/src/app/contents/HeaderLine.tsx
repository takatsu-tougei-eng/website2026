import styles from "./HeaderLine.module.css";

interface HeaderLineProps {
    title: string;
    description?: string;
}

export default function HeaderLine({ title, description }: HeaderLineProps) {
    return (
        <div className={styles.header_line}>
            <h1 className={styles.header_line_title}>
                <span className={styles.title_text}>
                    {title}
                </span>
            </h1>
            {description && (
                <p className={styles.header_line_description}>
                    {description}
                </p>
            )}
        </div>
    )
}
