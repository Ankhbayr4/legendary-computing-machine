const Header = () => {
  return (
    <div
      className="flex justify-center py-8  px-96
    "
    >
      <img className="mr-36 h-8 w-40" src="/Logo.png" />
      <div className="flex gap-10 w-[667px] justify-center items-center ">
        <p>Home</p>
        <p>Blog</p>
        <p>Contant</p>
      </div>
      <input
        placeholder="search"
        className="bg-slate-200 ml-5 rounded-md"
      ></input>
    </div>
  );
};
export default Header;
