"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import galleryImg1 from "@/assets/gallery-img-1.png";
import galleryImg2 from "@/assets/gallery-img-2.png";
import galleryImg3 from "@/assets/gallery-img-3.png";
import galleryImg4 from "@/assets/gallery-img-4.png";
import galleryImg5 from "@/assets/gallery-img-5.png";

const images = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
];

const Gallery = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative max-w-7xl mx-auto rounded-lg overflow-hidden">
         {/* Right Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-4 py-2 text-sm bg-white/80 backdrop-blur-md rounded-full shadow-md">
            Cancel anytime
          </span>
        </div>

        {/* BOTTOM LEFT BADGE */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="px-4 py-2 text-sm bg-white/80 backdrop-blur-md rounded-full shadow-md">
            Monthly membership
          </span>
        </div>

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-75
              h-65
              relative rounded-lg overflow-hidden"
            >
              <Image src={src} alt="gallery" fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
