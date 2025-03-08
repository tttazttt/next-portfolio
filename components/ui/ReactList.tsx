import React from "react";
import WorkCell from "./WorkCell";

const ReactList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 pt-10">
      <WorkCell
        link="https://portfolio-rho-eight-38.vercel.app/"
        fileName="vs-portfolio.png"
        title="初制作ポートフォリオ"
      />
      <WorkCell
        link="https://a-cat-of-today.vercel.app/"
        fileName="cat-of-today.png"
        title="今日のにゃんこ"
      />
      <WorkCell
        link="https://pastel-color-picker.vercel.app/"
        fileName="pastel-color-picker.png"
        title="今だに使ってるカラーピッカー"
      />
      <WorkCell
        link="https://primitive-pachinko.vercel.app/"
        fileName="primitive-pachinko.png"
        title="原始的な遊び"
      />
      <WorkCell
        link="https://quiz-app-sand-ten.vercel.app/"
        fileName="quiz-app.png"
        title="進撃クイズApp"
      />
      <WorkCell
        link="https://hayauti-app.vercel.app/"
        fileName="hayauti.png"
        title="早打ちゲームってこと"
      />
      <WorkCell
        link="https://todo-app-liart-iota-48.vercel.app/"
        fileName="todo-app.png"
        title="The Todo App"
      />
      <WorkCell
        link="https://typing-app-six-eosin.vercel.app/"
        fileName="typing-app.png"
        title="力作タイピングApp"
      />
      <WorkCell
        link="https://portfolio2503.vercel.app/"
        fileName="portfolio2503.png"
        title="トップ重いポートフォリオサイト"
      />
      <WorkCell
        link="https://reversi-app.vercel.app/"
        fileName="reversi-app.png"
        title="過去一苦戦の不完全リバーシ"
      />
      <WorkCell
        link="https://bingo-app-rho.vercel.app/"
        fileName="bingo-app.png"
        title="需要無視のビンゴゲーム"
      />
      <WorkCell
        link="https://portfolio-latest-psi.vercel.app/"
        fileName="prevPortfolio.png"
        title="先代ポートフォリオ"
      />
    </div>
  );
};

export default ReactList;
