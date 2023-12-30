import Image, { StaticImageData } from "next/image";
import portfolioThumbnail from "/public/portfolio_thumbnail.png";

const ProjectCarousel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <section className="aspect-[1.5] w-full overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="sample"
          className="aspect-[1.5] w-full object-cover"
        />
      ))}
    </section>
  );
};

export default ProjectCarousel;
