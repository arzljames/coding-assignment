import React from "react";
import parse from "html-react-parser";

interface ICard {
  key: number;
  itemData: any;
  textContent: string;
}

const Card = ({ key, itemData, textContent }: ICard) => {
  return (
    <>
      <div
        className="bg-white mb-6 text-gray-900 border p-4 rounded-lg shadow-sm"
        key={key}
      >
        <h1 className="font-bold text-lg">{itemData.title}</h1>
        {/* used third party library since I noticed that its content is a string of html tags */}
        <div className="card text-base ">{parse(textContent ?? "")}</div>
      </div>
    </>
  );
};

export default Card;
