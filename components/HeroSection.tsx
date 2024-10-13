"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
 return (
  <section className="lg:py-16">
   <div className=" grid grid-cols-1 sm:grid-cols-12">
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}
     className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    >
     <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
      اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ
      لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا
      بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ
      مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا
      يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
     </p>
     <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-8xl  font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
       Welcome to my Portfolio
      </span>
     </h1>

     <div>
      <Link
       href="/#contact"
       className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
      >
       Hire Me
      </Link>
      <Link
       download="Abdullah.pdf"
       href="/Abdullah.pdf"
       className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
      >
       <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        Download CV
       </span>
      </Link>
     </div>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}
     className="col-span-4 place-self-center mt-4 lg:mt-0"
    >
     <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative flex justify-center items-center">
      <Image
       src="/images/1.png"
       alt="hero image"
       className="absolute inset-0 m-auto"
       width={350}
       height={350}
      />
     </div>
    </motion.div>
   </div>
  </section>
 );
};

export default HeroSection;
