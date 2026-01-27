import styles from "./EventOverview.module.css";

export default function EventOverview() {
    return (
        <div
            className={styles.event_overview}
        >
            <dl className={styles.event_overview_dl}>
                <div>
                    <dt>開催日</dt>
                    <dd><time dateTime="2026-03-08">2026年3月8日(日)</time></dd>
                </div>
                <div>
                    <dt>会場</dt>
                    <dd><address>川崎市大山街道ふるさと館</address></dd>
                </div>
            </dl>
        </div>
    )
}
