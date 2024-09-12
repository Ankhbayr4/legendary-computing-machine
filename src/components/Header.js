import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className="flex justify-center py-8  px-[350px] gap-[118px]
    ">
      <img className="mr-36 h-8 w-40" src="/Logo.png" />
      <div className="flex gap-10 w-[667px] justify-center items-center ">
        <Link href={"/home"}>
          <p>Home</p>
        </Link>

        <Link href={"/blog"}>
          {" "}
          <p>Blog</p>
        </Link>
        <Link href={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
      <div className="relative">
        <input placeholder=" search " className="bg-gray-100 ml-5 rounded-md" />
        <AiOutlineSearch className="absolute right-2 bottom-3" />
      </div>
    </div>
  );
};
export default Header;
