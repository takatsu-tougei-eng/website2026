import styles from "./SubmitButtonArea.module.css";
import SubmitButton from "@/app/components/SubmitButton";

export default function SubmitButtonArea({ targetId }: { targetId: string }) {
    return (
        <div className={styles.submit_button_area}>
            <SubmitButton
                buttonText="参加登録"
                href={`#${targetId}`}
            />
        </div>
    )
}