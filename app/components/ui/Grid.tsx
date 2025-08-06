import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const Grid = () => (
  <section id="about">
    <BentoGrid className="w-full py-20">
      {gridItems.map((item) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  </section>
);

export default Grid;