const Footer = () => {
  return (
    <div className="flex flex-col gap-[25px]  bg-gray-50">
      <div className="  w-[1200px] mx-auto">
        <div className=" flex flex-1 gap-5  bg-gray-50 w-[1200px]  ">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-semibold">About</p>
            <p className="text-gray-500 font-normal w-[289px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <p className="text-base font-normal">
                Email : info@jstemplate.net
              </p>
              <p className="text-base font-normal">Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className=" flex flex-col gap-2 w-[576px] items-center ">
            <p className="text-base font-normal">Home</p>
            <p className="text-base font-normal">Blog</p>
            <p className="text-base font-normal">Contant</p>
          </div>
          <div className="flex">
            <div>
              {" "}
              <img src="Negative.png" />
              <img src="tie.png" />
              <img src="" />
            </div>
          </div>
        </div>

        <p className="border solid max-w-[1200px]"></p>
        <div className="flex justify-between ">
          <div className="flex p-8 ">
            <div>
              {" "}
              <img src="gogo.png" />
            </div>
            <div>
              {" "}
              <div className="flex">
                {" "}
                <p className="text-xl font-normal text-gray-900">Meta</p>
                <p className="text-xl text-gray-900 font-extrabold">Blog</p>
              </div>
              <div>
                <p className="text-base text-gray-600">
                  © All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <p className="text-base font-normal text-gray-600">Terms of Use</p>
            <p className="border solid h-8"></p>
            <p className="text-base  text-gray-600 font-normal">
              Privacy Policy
            </p>
            <p className="border solid h-8"></p>
            <p className="text-base  text-gray-600 font-normal">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
