import Hero from "@/app/contents/Hero";
import EventOverview from "@/app/contents/EventOverview";
import { EventMap } from "@/app/contents/EventMap";
import SubmitButtonArea from "@/app/contents/SubmitButtonArea";
import HeaderLine from "@/app/contents/HeaderLine";
import TextDescription from "@/app/contents/TextDescription";
import TextDescription2, { TextDescription2Props } from "@/app/contents/TextDescription2";
import WorkshopContent, { WorkshopContentProps } from "@/app/contents/WorkshopContent";
import PhotoAndTextDescription, { PhotoAndTextDescriptionProps } from "@/app/contents/PhotoAndTextDescription";
import Flyers from "@/app/contents/Flyers";

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
  const textDescriptoin2 = [
    "本イベントで益子焼を扱うのは、**この陶芸が持つ考え方が、高津というまちの歴史と深くつながっているから** です。",
    "益子焼を代表する陶芸家であり、人間国宝でもある **濱田庄司** は、現在の川崎市高津区溝口に生まれ、幼少期をこの地で過ごしました。",
    "彼が後に大切にした **「用の美」や「健やかな暮らしの中にある美しさ」** は、この土地での生活体験を原点として形づくられたものだと言われています。",
    "その思想を受け継ぐ益子焼を、ゆかりのある高津の地で体験してもらうこと。**それが、このフェスタの大きなテーマのひとつです。** ",
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
      description: "大人数で気軽に陶芸の楽しさを味わえる、手回しロクロ体験です。初めての方でも、完成度を気にせず、陶芸そのものを楽しんでいただけます。",
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

  const whyTakatsuContent = [
    {
      description: [
        "私たちがこの場所でイベントを開催するのには、特別な理由があります。それは、この会場である大山街道ふるさと館は、世界的な陶芸家であり、初の人間国宝となった **濱田庄司（1894-1978）が生まれ育った家（菓子屋「大和屋」）** があった場所のすぐ隣にあたり、 彼の原点と深く関わる土地だからです。",
        "濱田は幼少期を高津の豊かな自然の中で過ごし、後に **「田舎は健康な心の根づくところ」** と振り返っています。かつてこの地で濱田が育んだ「創る楽しさ」を、現代の大人や子供たちにも肌で感じてほしい。そんな願いから、この体験イベントは企画されました。",
      ],
      useImage: false,
    },
    {
      subTitle: "日常を彩る「用の美」を、自分の手で",
      description: [
        "濱田庄司が一生をかけて大切にしたのが **「用の美」** という考え方です。",
        "これは、美術館に飾るような特別なものではなく、**「毎日の暮らしの中で、実際に使われる道具の中にこそ、本当の美しさが宿る」** という教えです。",
        "* 自分でお茶を飲むためのカップ",
        "* 家族でごはんを食べるための取り皿",
        "自分で作った不格好な器でも、実際に暮らしの中で使ってみることで、道具への愛着や「用の美」の本質が見えてきます。",
      ],
      useImage: true,
      imagePath: "/images/hamada4.jpeg",
      imageAlt: "濱田窯の益子焼",
      floatDirection: "left",
    },
    {
      subTitle: "「手」が教えるものづくりの喜び",
      description: [
        "濱田は **「いいものは頭ではなく手が作る」** と考え、生涯、手仕事の力を信じ続けました。",
        "このフェスタにプロの職人の器は並びません。主役は、参加する皆さん一人ひとりの「手」です。",
        "濱田庄司を生んだこのゆかりの地で、土に触れ、自分だけの「暮らしの道具」を創り出す。そんな健やかでクリエイティブな時間を、親子で、そして地域の皆で楽しんでみませんか？",
      ],
      useImage: true,
      imagePath: "/images/hamada5.png",
      imageAlt: "ろくろで作る器",
      floatDirection: "right",
    }
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
        <TextDescription2
          subTitle="なぜ益子焼なのか、なぜ高津なのか"
          description={textDescriptoin2}
          imagePath="/images/hamada_shoji2.png"
          imageAlt="濱田庄司"
          floatDirection="left"
          useImage={true}
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

        <HeaderLine title="濱田庄司が育んだ「暮らしの美」を体験する" />
        {whyTakatsuContent.map((item, i) => (
          <TextDescription2
            key={i}
            {...item as TextDescription2Props}
          />
        ))}
        
        <HeaderLine title="クラフトほっこりマーケット" />
        <PhotoAndTextDescription
          {...hokkoriMarketContent}
        />

        <HeaderLine title="広報用チラシ" description="pdfをダウンロードできます" />
        <Flyers />
      </main>
    </div>
  );
}
