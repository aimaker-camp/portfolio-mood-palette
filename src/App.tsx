import { useState, useEffect } from "react";
import "./App.css";

type Mood = {
  key: string;
  label: string;
  emoji: string;
  gradient: string;
  textColor: string;
  chip: string;
  quotes: string[];
};

const MOODS: Mood[] = [
  {
    key: "happy", label: "開心", emoji: "😊",
    gradient: "linear-gradient(135deg, #ffd89b 0%, #fab1a0 50%, #ff7675 100%)",
    textColor: "#5a2e2e", chip: "rgba(255,255,255,0.6)",
    quotes: [
      "今天的心情像剛烤好的麵包,熱熱軟軟。",
      "笑得有點傻沒關係,那是真的開心。",
      "把這個感覺記住,以後低潮時可以回來找。",
      "天空也跟著你一起亮起來。",
    ],
  },
  {
    key: "calm", label: "平靜", emoji: "🌿",
    gradient: "linear-gradient(135deg, #a8e6cf 0%, #88d8c0 50%, #74c0a0 100%)",
    textColor: "#1f4d3a", chip: "rgba(255,255,255,0.55)",
    quotes: [
      "深呼吸,世界突然有點慢。",
      "今天什麼都沒發生,但什麼都剛剛好。",
      "靜下來才聽得到自己的聲音。",
      "像湖面一樣,看起來什麼也沒在做,其實一直在反射光。",
    ],
  },
  {
    key: "excited", label: "興奮", emoji: "✨",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #ffdde1 100%)",
    textColor: "#8b2c4d", chip: "rgba(255,255,255,0.65)",
    quotes: [
      "心跳比平常快一點,那是好事要發生的訊號。",
      "有事情你等不及要去做了,記得享受這個瞬間。",
      "今天的你,連空氣都覺得閃閃發亮。",
      "把這份能量收好,明天還用得到。",
    ],
  },
  {
    key: "sad", label: "難過", emoji: "😢",
    gradient: "linear-gradient(135deg, #a8b8d8 0%, #8a9cc4 50%, #6c7fb8 100%)",
    textColor: "#f0f4ff", chip: "rgba(255,255,255,0.22)",
    quotes: [
      "難過就讓它在,不用裝沒事。",
      "今天哭一場也沒關係,眼淚是身體在自己幫忙。",
      "現在覺得很重,但你撐過去過比這還重的。",
      "晚一點再做決定,先讓自己過完今天。",
    ],
  },
  {
    key: "tired", label: "累", emoji: "😴",
    gradient: "linear-gradient(135deg, #c9b6e4 0%, #a78bfa 50%, #8b5cf6 100%)",
    textColor: "#fefbff", chip: "rgba(255,255,255,0.25)",
    quotes: [
      "累的時候就允許自己什麼都不做。",
      "你今天已經做得很多了,允許停下來。",
      "睡覺不是逃避,是身體在說它需要。",
      "明天的你會謝謝今天放過自己的你。",
    ],
  },
  {
    key: "angry", label: "生氣", emoji: "🔥",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 50%, #c44569 100%)",
    textColor: "#fff",
    chip: "rgba(255,255,255,0.28)",
    quotes: [
      "生氣不是壞事,是身體在保護你的界線。",
      "在做任何回應前,先離開現場走 10 分鐘。",
      "你的感受是真的,但反應可以慢一點。",
      "寫下來會比說出來輕鬆,試試看。",
    ],
  },
  {
    key: "anxious", label: "焦慮", emoji: "😰",
    gradient: "linear-gradient(135deg, #fffacc 0%, #ffd89b 50%, #ffc580 100%)",
    textColor: "#664d1a", chip: "rgba(255,255,255,0.6)",
    quotes: [
      "焦慮是因為你在乎,不是因為你弱。",
      "把擔心的事一條一條寫下來,腦袋就會清楚。",
      "現在不需要解決所有事,只要做下一件就好。",
      "深呼吸 4 拍 ・ 停 7 拍 ・ 吐氣 8 拍。試三次。",
    ],
  },
  {
    key: "loved", label: "被愛", emoji: "💗",
    gradient: "linear-gradient(135deg, #ffc4d6 0%, #ff9ec4 50%, #ff7eb8 100%)",
    textColor: "#7a1a4a", chip: "rgba(255,255,255,0.55)",
    quotes: [
      "有人在乎你,而你也允許自己被在乎。",
      "今天的暖會留在你身體裡很久。",
      "記得 — 你也是別人覺得『很在乎』的那個人。",
      "把這份感覺寫下來,哪天忘了可以回來看。",
    ],
  },
];

export default function App() {
  const [mood, setMood] = useState<Mood>(MOODS[0]);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(
      `${today.getFullYear()} / ${String(today.getMonth() + 1).padStart(2, "0")} / ${String(today.getDate()).padStart(2, "0")}`
    );
  }, []);

  // Apply mood gradient to body
  useEffect(() => {
    document.body.style.background = mood.gradient;
    document.body.style.minHeight = "100vh";
  }, [mood]);

  function pickMood(m: Mood) {
    setMood(m);
    setQuoteIdx(Math.floor(Math.random() * m.quotes.length));
  }

  function nextQuote() {
    setQuoteIdx((i) => (i + 1) % mood.quotes.length);
  }

  return (
    <div className="app" style={{ color: mood.textColor }}>
      <header className="top">
        <a
          href="https://themakerscamp.com/portfolio"
          className="back"
          style={{ color: mood.textColor }}
        >
          ← 回作品集
        </a>
        <span className="brand">AI 造物營</span>
      </header>

      <main className="main">
        <h1 className="brand-title">
          Mood<br/>
          <span className="title-thin">Palette.</span>
        </h1>
        <p className="sub">今天的你,比較像哪一個?</p>

        <div className="mood-grid">
          {MOODS.map((m) => (
            <button
              key={m.key}
              onClick={() => pickMood(m)}
              className={`mood-btn ${mood.key === m.key ? "mood-active" : ""}`}
              style={{
                background: mood.key === m.key ? mood.chip : "rgba(255,255,255,0.2)",
                color: mood.textColor,
                borderColor: mood.key === m.key ? mood.textColor : "transparent",
              }}
            >
              <span className="mood-emoji">{m.emoji}</span>
              <span className="mood-label">{m.label}</span>
            </button>
          ))}
        </div>

        <div
          className="quote-card"
          style={{ background: mood.chip, color: mood.textColor }}
        >
          <div className="quote-meta">
            <span>{mood.emoji} {mood.label.toUpperCase()}</span>
            <span>{date}</span>
          </div>
          <p className="quote-text">
            &ldquo;{mood.quotes[quoteIdx]}&rdquo;
          </p>
          <button
            onClick={nextQuote}
            className="quote-btn"
            style={{ color: mood.textColor, borderColor: mood.textColor }}
          >
            ↻ 再來一句
          </button>
        </div>
      </main>

      <footer className="bot">
        <p>這個作品是 AI 做的・你的孩子上完 4 週課,也能做出自己的版本</p>
        <a
          href="https://themakerscamp.com/#register"
          className="cta"
          style={{ background: mood.textColor, color: mood.gradient.includes("0.22") ? "#fff" : "#fff" }}
        >
          AI 造物營 →
        </a>
      </footer>
    </div>
  );
}
