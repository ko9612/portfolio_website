import Image, { StaticImageData } from "next/image";
import portfolioThumbnail from "/public/portfolio_thumbnail.png";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";

const ProjectCarousel = ({ images }: { images: StaticImageData[] }) => {
  const [current, setCurrent] = useState<number>(0);

  const prevButtonHandler = () => {
    current > 0 ? setCurrent(current - 1) : setCurrent(images.length - 1);
    console.log(current);
  };

  const nextButtonHandler = () => {
    current < images.length - 1 ? setCurrent(current + 1) : setCurrent(0);
    console.log(current);
  };

  return (
    <section>
      <div className="aspect-[1.5] w-full overflow-hidden relative flex">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="sample"
            className="aspect-[1.5] w-full object-fill transition ease-in-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          />
        ))}
        <div className="absolute flex justify-between top-0 items-center w-full h-full">
          <button
            onClick={prevButtonHandler}
            className="p-1 bg-slate-400/60 hover:bg-slate-200 hover:text-black rounded-full shadow-sm shadow-black/50 transition-colors"
          >
            <BsArrowLeftShort className="w-5 h-5 min-[500px]:w-8 min-[500px]:h-8" />
          </button>
          <button
            onClick={nextButtonHandler}
            className="p-1 bg-slate-400/60 hover:bg-slate-200 hover:text-black rounded-full shadow-sm shadow-black/50 transition-colors"
          >
            <BsArrowRightShort className="w-5 h-5 min-[500px]:w-8 min-[500px]:h-8" />
          </button>
        </div>
      </div>
      <div className="text-center mt-2">
        {current + 1} / {images.length}
      </div>
    </section>
  );
};

export default ProjectCarousel;
