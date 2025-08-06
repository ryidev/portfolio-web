"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-550, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col antialiased overflow-hidden h-[230vh] bg-gradient-to-b from-black via-[#0d0519] to-black [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* === TOP SHADOW === */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-50" />

      {/* === BOTTOM SHADOW === */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-50" />

      {/* === HEADER === */}
      <Header />

      {/* === PRODUCT ROWS === */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 shadow-[0_0_60px_#410BAA]/20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row py-20 space-x-20 shadow-[0_0_60px_#410BAA]/20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 shadow-[0_0_60px_#410BAA]/20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-2 w-full left-0 top-0">
     <h1 className="text-xl md:text-7xl font-bold text-white leading-tight md:leading-[1.1]">
        The Ultimate <br />
        <span className="text-[#410BAA] md:text-5xl text-3xl drop-shadow-[0_0_10px_#410BAA] relative -top-2 inline-block">
          Libraries to Power Modern Web Design
        </span>
      </h1>
      <p className="max-w-2xl text-base md:text-l text-neutral-300">
        Here’s a curated collection of libraries, frameworks, and tools that I use to build fast, beautiful, and responsive websites. Each one helps streamline development and push design quality to the next level.
      </p>

    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block transition-shadow duration-300 group-hover/product:shadow-[0_0_40px_#410BAA]"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-b from-black via-[#410BAA]/40 to-black pointer-events-none transition-all duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-bold drop-shadow-[0_0_10px_#410BAA] transition-all duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
