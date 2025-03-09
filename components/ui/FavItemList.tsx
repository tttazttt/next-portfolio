"use client";

import React from "react";
import FavItem from "./FavItem";
import { motion } from "framer-motion";

const FavItemList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 2 }}
      className="container mx-auto grid grid-cols-2 gap-y-4 md:grid-cols-3 md:gap-y-15 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-2  px-5 pt-10"
    >
      <FavItem
        imagePath={"/favItem/your-story.png"}
        description={"お前が始めた物語だろ"}
      />
      <FavItem
        imagePath={"/favItem/themonster.jpg"}
        description={"The monster!!!"}
      />
      <FavItem
        imagePath={"/favItem/psycho-pass.jpg"}
        description={"過小評価されてる作品"}
      />
      <FavItem imagePath={"/favItem/jin.jpg"} description={"ペニシリン"} />
      <FavItem
        imagePath={"/favItem/tanuki.png"}
        description={"たぬきとさかな"}
      />
      <FavItem
        imagePath={"/favItem/tank.jpg"}
        description={"Gervonta Tank Davis!"}
      />
      <FavItem imagePath={"/favItem/clannad.jpg"} description={"人生？"} />
      <FavItem imagePath={"/favItem/yamada.jpg"} description={"神？"} />
      <FavItem
        imagePath={"/favItem/cyberpunk.jpg"}
        description={"隠れた名作"}
      />
      <FavItem imagePath={"/favItem/itewon.jpg"} description={"ウォ"} />
      <FavItem imagePath={"/favItem/messi.jpg"} description={"Leo Messi!!"} />
      <FavItem imagePath={"/favItem/minagawa.jpg"} description={"本懐"} />
      <FavItem imagePath={"/favItem/apex.jpg"} description={"プラチナです^^"} />
      <FavItem
        imagePath={"/favItem/valorant.jpg"}
        description={"ヴァンダルです^^"}
      />
      <FavItem
        imagePath={"/favItem/onepiece.jpg"}
        description={"最近までNo1作品"}
      />
      <FavItem
        imagePath={"/favItem/justin.jpg"}
        description={"Love yourself"}
      />
      <FavItem
        imagePath={"/favItem/gingerale.jpg"}
        description={"CANADADRY派です"}
      />
      <FavItem
        imagePath={"/favItem/sac.jpg"}
        description={"Stand Alone Complex"}
      />
      <FavItem
        imagePath={"/favItem/dazai.jpg"}
        description={"恥の多い生涯を送って来ました。"}
      />
      <FavItem imagePath={"/favItem/darvish.jpg"} description={"すごい"} />
      <FavItem imagePath={"/favItem/shimofuri.jpg"} description={"イニミニ"} />
      <FavItem
        imagePath={"/favItem/confidenceman.jpg"}
        description={"ダー子の本質"}
      />
      <FavItem
        imagePath={"/favItem/legalhigh.jpg"}
        description={"古美門の本質"}
      />
      <FavItem
        imagePath={"/favItem/ugaki.jpg"}
        description={"人には人の地獄がある"}
      />
      <FavItem imagePath={"/favItem/ariyoshi.jpg"} description={"サンドリ"} />
      <FavItem imagePath={"/favItem/spec.jpg"} description={"save me takeru"} />
      <FavItem
        imagePath={"/favItem/tensin.jpg"}
        description={"関係ないっしょ気持ちっしょ"}
      />
      <FavItem
        imagePath={"/favItem/bohemian.jpg"}
        description={"男性に見て欲しい作品"}
      />
      <FavItem
        imagePath={"/favItem/sakurai.jpg"}
        description={"なぁになぁにの人"}
      />
      <FavItem imagePath={"/favItem/hanabi.jpg"} description={"基本Aタイプ"} />
      <FavItem
        imagePath={"/favItem/snowoflondon.png"}
        description={"Snow of London"}
      />
      <FavItem
        imagePath={"/favItem/lalaland.jpg"}
        description={"元祖Snow of London"}
      />
      <FavItem imagePath={"/favItem/annatural.jpg"} description={"１話が神"} />
    </motion.div>
  );
};

export default FavItemList;
