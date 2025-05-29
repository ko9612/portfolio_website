import { AboutArr } from "@/data/AboutArray";
import React from "react";
import ReactWordcloud, { OptionsProp, Word } from "react-wordcloud";

const AboutWord = React.memo(() => {
  const options: OptionsProp = {
    colors: ["#ffffff"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "pretendard",
    fontSizes: [10, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 10,
    rotations: 0,
    rotationAngles: [0, 0],
    scale: "log",
    spiral: "archimedean",
    transitionDuration: 500,
  };

  const callbacks = {
    onWordMouseOver: (word: Word, event?: MouseEvent) => {
      const el = event?.target as SVGTextElement;
      const originalSize = parseFloat(el.getAttribute("font-size") || "0");
      el.setAttribute("data-original-size", originalSize.toString());
      el.setAttribute("fill", "#a855f7");
      el.setAttribute("font-size", (originalSize * 1.2).toString());
    },
    onWordMouseOut: (word: Word, event?: MouseEvent) => {
      const el = event?.target as SVGTextElement;
      const originalSize = el.getAttribute("data-original-size");
      el.setAttribute("fill", "#ffffff");
      if (originalSize) {
        el.setAttribute("font-size", originalSize);
      }
    },
  };

  return (
    <ReactWordcloud callbacks={callbacks} options={options} words={AboutArr} />
  );
});

AboutWord.displayName = "AboutWord";

export default AboutWord;
