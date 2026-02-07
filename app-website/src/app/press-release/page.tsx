"use client";

import HeroSimple from "@/app/contents/HeroSimple";
import EventOverview from "@/app/contents/EventOverview";

import styles from "./page.module.css";

export default function PressReleasePage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <HeroSimple />
                <EventOverview />
            </header>

            <main className={styles.main}>
                <div className={styles.main_paper}>
                    {/* ヘッダー */}
                    <div className={styles.header_container}>
                        <div className="destination_container">
                            <div>Press release</div>
                            <div>報道期間各位</div>
                        </div>
                        <div className={styles.source_container}>
                            <div>2026年2月4日</div>
                            <div>まちの企画室</div>
                            <div>高津陶芸イベント実行委員会</div>
                        </div>
                    </div>

                    {/* タイトル */}
                    <div className={styles.title_container}>
                        <h1>人間国宝・濱田庄司の生誕地から、<br />
                        陶芸文化を体験で継承<br />
                        第4回「陶芸匠フェスタin 高津」開催</h1>
                        <h2>― 高津区「まちの企画室」がつなぐ、土と暮らしの記憶―</h2>
                    </div>

                    {/* 本文 */}
                    <div className={styles.content_container}>
                        <p className={styles.content_paragraph}>
                        川崎市高津区は、近代日本陶芸を代表する人間国宝・濱田庄司（1894–1978）の生誕地である。民藝運動の中心人物として「用の美」を掲げ、益子焼を世界に知らしめた濱田の原点が、この地にあることは、意外にも広く知られてはいない。主催する「まちの企画室」は、この地域に眠る文化の記憶を、展示や解説ではなく体験として現代に手渡すことを目的に、2022年より陶芸イベントを継続してきた。その第4回目となる「陶芸匠フェスタin 高津」を、2026年3月8日（日）、川崎市大山街道ふるさと館にて開催する。
                        </p>
                        <hr className={styles.content_hr} />
                        <img
                            src="/images/press_release/S__65839119_1.png"
                            alt="press release image"
                            className={styles.content_center_image}
                        />
                        <div className={styles.side_image_container}>
                            <h3>文化を「展示」でなく「体験」として継承する取り組み</h3>
                            <div
                                className={styles.side_image_link_container}
                            >
                                <a href="/pdf/2026_flyer.pdf" target="_blank">
                                    <img
                                        src="/images/press_release/2026_flyer.png"
                                        alt="2026 flyer image"
                                        className={styles.side_image}
                                    />
                                </a>
                                <div className={styles.side_image_link_text}>
                                    pdfダウンロード
                                </div>
                            </div>
                            <p className={styles.content_paragraph}>
                            まちの企画室がこの陶芸イベントで一貫して大切にしてきたのは、地域に残る文化を、知識や解説として伝えるのではなく、実際に体験することで身体感覚として受け取ってもらうことである。
                            </p>
                            <p className={styles.content_paragraph}>
                            人間国宝・濱田庄司が生涯を通して向き合った益子焼は、鑑賞の対象ではなく、日々の暮らしの中で使われることで価値を深める器だった。その思想に立ち返り、本イベントでは毎年、栃木県益子町より熟練の伝統工芸士を高津区に招き、参加者自身が土に触れ、器を成形する陶芸体験を中心に据えている。子どもから大人まで、世代や経験を問わず参加できるこの体験は、地域の歴史を「知る」ものから「自分ごととして感じる」ものへと変えていく入口となっている。
                            </p>
                        </div>

                        <div>
                            <h3>第4回目となる今回は、新たな体験価値を加えて実施</h3>
                            <p className={styles.content_paragraph}>
                            例年好評を博してきた手回しロクロ体験に加え、新たな試みとして「電動ロクロプレミアム体験」を実施する。一度は挑戦してみたいと感じながらも、難易度の高さから体験の機会が限られてきた電動ロクロを、伝統工芸士の直接指導のもとで体験できる内容となっている。限られた時間の中でも、参加者一人ひとりの手元を丁寧に見守りながら成形を行うため、初心者でも完成度の高い作品づくりが可能だ。
                            </p>
                            <p className={styles.content_paragraph}>
                            制作された作品は益子の窯で焼成され、約2～3か月後に自宅へ届けられる。一日限りの体験で終わるのではなく、日常の食卓で使い続けられる器として、暮らしの中に残っていく。
                            </p>
                        </div>

                        <div>
                            <h3>地域文化を未来へ手渡すために</h3>
                            <p className={styles.content_paragraph}>
                            まちの企画室は、この陶芸イベントを単発の催しではなく、地域文化を次世代へとつないでいくための継続的な実践の場と位置づけている。濱田庄司の思想と、その原点である高津の地を結び直すことで、地域に根差した文化資源の価値を、現代の生活の中に再発見していく試みだ。
                            </p>
                        </div>

                        <div>
                            <h3>まちの企画室について</h3>
                            <p className={styles.content_paragraph}>
                            まちの企画室は、2022年に川崎市高津区を拠点とし、地域の歴史・文化・アートをテーマに、人とまちの関係性をつなぐ市民提案型事業として発足した。2025年には任意団体となり、コミュニティの創出やWebメディアの立ち上げなど、多角的なまちづくりに取り組んでいる。
                            </p>
                        </div>

                        <div>
                            <h3>開催概要</h3>
                            <div>
                                <dl className={styles.event_details}>
                                    <div className={styles.event_detail_row}>
                                        <dt>名称</dt>
                                        <dd>陶芸匠フェスタin 高津</dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>開催期間</dt>
                                        <dd>2026年3月8日(日) 10:00～16:00</dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>会場</dt>
                                        <dd>
                                            <a href="https://www.furusatokan.info/" target="_blank">川崎市大山街道ふるさと館</a><br />
                                            〒213-0001 川崎市高津区溝口3-13-3
                                        </dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>入場料</dt>
                                        <dd>無料</dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>体験料</dt>
                                        <dd>手回しロクロ体験：4,800円/名<br />電動ロクロ体験：6,800円/名</dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>公式ホームページ</dt>
                                        <dd><a href="https://takatsu-tougei.netlify.app/" target="_blank">https://takatsu-tougei.netlify.app/</a></dd>
                                    </div>
                                    <div className={styles.event_detail_row}>
                                        <dt>体験チケット販売サイト</dt>
                                        <dd><a href="https://takatsu-mashiko.stores.jp/" target="_blank">https://takatsu-mashiko.stores.jp/</a></dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <h3>お問合せ先</h3>
                            <div>
                                まちの企画室/高津陶芸イベント実行委員会<br />
                                担当：古川、柴田<br />
                                Mail：takatsu.mashiko@gmail.com<br />
                                Tel：080-7132-1166（古川）
                            </div>
                        </div>

                        <div>
                            <h3>ダウンロード</h3>
                            <div className={styles.pdf_download_container}>
                                <a href="/pdf/2026_flyer.pdf" target="_blank">
                                    <img src="/images/pdf_file.png" alt="pdf file" className={styles.pdf_file_icon} />
                                    <span>2026_flyer.pdf</span>
                                </a>
                                <a href="/pdf/2026_press_release.pdf" target="_blank">
                                    <img src="/images/pdf_file.png" alt="pdf file" className={styles.pdf_file_icon} />
                                    <span>2026_press_release.pdf</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
