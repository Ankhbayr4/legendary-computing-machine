import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Blogcard from "@/components/Blogcard";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className=" flex flex-col gap-[100px]">
      <Header />
      <div className="mx-w-[1925px] mx-auto flex flex-col gap-[100px]">
        {" "}
        <Hero />
        <Trending />
        <Blogcard />
      </div>
    </div>
  );
}
