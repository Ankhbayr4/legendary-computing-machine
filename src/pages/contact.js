import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contant = () => {
  return (
    <div className="flex flex-col gap-[100px] ">
      <Header />
      <div className="w-[895px] h-[895px] mx-auto">
        <div className="w-[719px] mx-auto flex flex-col gap-5 ">
          <div>
            {" "}
            <p className="text-4xl font-semibold">Contact Us</p>
          </div>
          <div>
            <p className="text-base font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex-1 flex  gap-[50px]">
            <div className=" h-[133px] rounded-xl bg-gray-50 p-4 flex flex-col gap-[10px]">
              <p className="text-2xl font-semibold ">Address</p>
              <p className="text-lg font-normal  text-gray-500">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-[294px] h-[133px] rounded-xl bg-gray-50 p-4 flex flex-col gap-[10px]">
              <p className="text-2xl font-semibold ">Contact</p>
              <div>
                <p className="text-lg font-normal  text-gray-500">
                  313-332-8662
                </p>
                <p className="text-lg font-normal  text-gray-500">
                  info@email.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-[643px ] h-[440px] bg-gray-100 pl-[35px] pt-[29px] pr-[130px] pb-[26px] rounded-md">
            <div className=" flex  flex-col gap-5 ">
              <div>
                <p className="text-lg font-semibold">Leave a Message</p>
              </div>
              <div className="flex gap-7">
                <input
                  placeholder="Your Name "
                  className=" w-[225px] h-[38px] rounded-md pl-5 py-[14px] pr-[14px]"
                ></input>
                <input
                  placeholder="Your Email "
                  className=" w-[225px] h-[38px] rounded-md pl-5 py-[14px] pr-[14px]"
                ></input>
              </div>
              <div className="flex flex-col gap-5">
                <input
                  placeholder="your name "
                  className="w-[478px] h-[35px] rounded-md pl-5 py-[14px]"
                ></input>
                <input
                  placeholder="your name "
                  className=" w-[478px] h-[134px] rounded-md pl-5 py-[14px]"
                ></input>
              </div>
              <div>
                <button className="btn btn-primary px-[10px ] py-4">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Contant;
