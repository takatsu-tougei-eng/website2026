import Hero from "@/app/contents/Hero";
import EventOverview from "@/app/contents/EventOverview";
import { EventMap } from "@/app/contents/EventMap";
import SubmitButtonArea from "@/app/contents/SubmitButtonArea";
import HeaderLine from "@/app/contents/HeaderLine";
import TextDescription from "@/app/contents/TextDescription";
import WorkshopContent, { WorkshopContentProps } from "@/app/contents/WorkshopContent";
import PhotoAndTextDescription, { PhotoAndTextDescriptionProps } from "@/app/contents/PhotoAndTextDescription";

import styles from "./page.module.css";


export default function Home() {
  const textDescription = [
    "高津のまちで、益子焼の魅力に触れる陶芸イベント\n" +
    "「陶芸匠フェスタ in 高津」。"
    ,
    "電動ロクロや手回しロクロを使った\n" +
    "体験型ワークショップを開催します。\n" +
    "初心者の方や親子での参加も大歓迎です。"
    ,
    "当日は、クラフトや雑貨、フードが集まる\n" +
    "「クラフトほっこりマーケット」も同時開催。\n" +
    "陶芸だけでなく、ものづくりや人との出会いを\n" +
    "ゆったりと楽しめる一日です。"
  ];

  const workshopContent: WorkshopContentProps[] = [
    {
      title: "【新企画】電動ロクロ プレミアム体験",
      description: [
        "匠のサポートで、理想の器を仕上げる約10分間。一度はやってみたかった「電動ロクロ」に挑戦！",
        "グループ交代制のため実際に作る時間は短いですが、伝統工芸士が補助しますので、短時間でも立派な形に仕上がります。",
      ],
      date: "2026年3月8日(日)",
      timeSchedule: [
        ["10:00", "11:00"],
        ["11:15", "12:15"],
        ["13:30", "15:00"],
      ],
      place: "ふるさと館 ３階 会議室",
      capacity: [8, 8, 14],
      price: "6,800円/名",
      deadline: "3月6日(金)",
      applicationTitle: "電動ロクロ体験 登録",
      applicationURL: "https://takatsu-mashiko.stores.jp/?category_id=697e03a6d648d1e6f7980159",
      notes: [
        "4歳から小学校低学年までは保護者同伴",
        "作品は一人一品まで",
        "完成品は着払いにて発送いたします",
      ],
      imagePaths: ["/images/dendou1.png", "/images/dendou2.png"],
    },
    {
      title: "手回しロクロ体験",
      description: "大人数で気軽に陶芸の楽しさを味わえる、手回しロクロ体験です。",
      date: "2026年3月8日(日)",
      timeSchedule: [
        ["10:00","11:00"],
        ["11:20","12:20"],
        ["13:20","14:20"],
        ["14:40","15:40"],
        ["16:00","17:00"],
      ],
      place: "ふるさと館 ２階 イベントホール",
      capacity: [50, 50, 50, 50, 50],
      price: "4,800円/名",
      deadline: "3月6日(金)",
      applicationTitle: "手回しロクロ体験 登録",
      applicationURL: "https://takatsu-mashiko.stores.jp/?category_id=697e03b1e8c4f832621a74ca",
      notes: [
        "4歳から小学校低学年までは保護者同伴",
        "作品は一人一品まで",
        "完成品は着払いにて発送いたします",
      ],
      imagePaths: [
        "/images/temawashi1.png",
        "/images/temawashi2.png",
        "/images/temawashi3.png",
        "/images/temawashi4.png",
        "/images/temawashi5.png",
      ],
    },
  ];

  const hokkoriMarketContent: PhotoAndTextDescriptionProps = {
    descriptions: [
        "「ほっこり温かな気持ちで家路についてほしい」という想いを持つ、" +
          "こだわりの店舗が集結します。",
        "家族みんなで心温まるひとときをお過ごしください。"
    ],
    imagePath: "/images/craft_hokkori_market.png",
    imageAlt: "クラフトほっこりマーケット",
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Hero />
        <EventOverview />
      </header>
      <main className={styles.main}>
        <SubmitButtonArea targetId="workshop" />

        <HeaderLine title="イベント概要" />
        <TextDescription
          description={textDescription}
          imagePath="/images/experience_image.png"
        />
        <EventMap />

        <a id="workshop" />
        <HeaderLine
          title="体験ワークショップ"
          description="選べる2つの陶芸体験！本格的な『電動ロクロ』と、じっくり向き合う『手回しロクロ』、それぞれのコースをご用意しました。"
        />
        <WorkshopContent
          {...workshopContent[0]}
        />
        <WorkshopContent
          {...workshopContent[1]}
        />
        
        <HeaderLine title="クラフトほっこりマーケット" />
        <PhotoAndTextDescription
          {...hokkoriMarketContent}
        />
      </main>
    </div>
  );
}
