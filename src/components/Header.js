import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className="flex justify-center py-8  px-[350px] gap-[118px]
    ">
      <img className="mr-36 h-8 w-40" src="/Logo.png" />
      <div className="flex gap-10 w-[667px] justify-center items-center ">
        <p>Home</p>

        <p>Blog</p>

        <p>Contant</p>
      </div>
      <div className="relative">
        <input placeholder=" search " className="bg-gray-100 ml-5 rounded-md" />
        <AiOutlineSearch className="absolute right-2 bottom-3" />
      </div>
    </div>
  );
};
export default Header;
