import Header from "@/components/Header";

import Hero from "@/components/Hero";

import Blogcard from "@/components/Blogcard";
import Trending from "@/components/Trending";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className=" flex flex-col gap-[100px] w-[1900px] mx-auto">
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
};
export default Home;
