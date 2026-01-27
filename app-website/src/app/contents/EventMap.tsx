import styles from "./EventMap.module.css";

export const EventMap = () => {
    return (
        <div className={styles.event_map}>
            <h2>開催日時・会場</h2>
            <div className={styles.event_map_container}>
                <div className={styles.event_map_item}>
                    <div className={styles.event_map_item_content_container}>
                        <div
                            className={styles.event_map_item_title}
                        >2026年3月8日(日)</div>
                        <div>
                            <div
                                className={styles.event_map_item_title}
                            >川崎市大山街道ふるさと館</div>
                            <div
                                className={styles.event_map_item_content}
                            >川崎市高津区溝口3-13-3</div>
                        </div>
                    </div>
                    <div className={styles.event_map_item_content_container}>
                        <div className={styles.event_map_item_content_title}>注意事項</div>
                        <ul className={styles.event_map_item_content_list}>
                            <li>当日は館内に駐輪・駐車のスペースはありません。</li>
                            <li>館内での飲食は禁止です。（水分補給可）飲食は館外の所定のスペースでお願いいたします。</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.event_map_map}>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1Y_rCMVsZM-j4PwQYlOaKGdtPRWh-aHU&ehbc=2E312F&noprof=1"
                        className={styles.event_map_iframe}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
