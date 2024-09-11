import Header from "@/components/Header";

import Hero from "@/components/Hero";

import Blogcard from "@/components/Blogcard";
import Trending from "@/components/Trending";
import Footer from "@/components/Footer";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

export default function Home() {
  const light = useContext(ThemeContext);
  console.log(light);
  return (
    <div className=" flex flex-col gap-[100px] ">
      <div className="">
        <Header />
      </div>

      <div className="mx-w-[1200px] mx-auto flex flex-col gap-[100px]">
        {" "}
        <Hero />
        <Trending />
        <Blogcard />
      </div>
      <div className="flex flex-col items-center bg-gray-50">
        <Footer />
      </div>
    </div>
  );
}
