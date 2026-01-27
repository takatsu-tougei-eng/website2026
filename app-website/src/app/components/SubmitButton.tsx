import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
    buttonText: string;
    href: string;
}

export default function SubmitButton({
    buttonText,
    href,
}: SubmitButtonProps) {
    return (
        <div className={styles.submit_button_container}>
            <div
                className={styles.submit_button}
            >
            <a
                href={href}
            >
                {buttonText}
            </a>
            </div>
        </div>
    )
}
