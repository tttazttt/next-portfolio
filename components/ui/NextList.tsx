import React from "react";
import WorkCell from "./WorkCell";

const NextList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 pt-5">
      <WorkCell
        link="https://anime-manager-rho.vercel.app/"
        fileName="anime-manager.png"
        title="Anime Manager"
      />
      <WorkCell
        link="https://xlike.vercel.app/"
        fileName="xlike.png"
        title="マルチユーザーメモアプリ"
      />
      <WorkCell
        link="https://realtime-chat-xi-eosin.vercel.app/"
        fileName="realtime-chat.png"
        title="○INE with socket.io"
      />
      <WorkCell
        link="https://whiteboard-ten-phi.vercel.app/"
        fileName="whiteboard.png"
        title="リアルタイムホワイトボードアプリ"
      />
    </div>
  );
};

export default NextList;
