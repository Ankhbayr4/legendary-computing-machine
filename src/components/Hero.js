import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Content = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [count, setCount] = useState(1);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const selectedBlog = data[count];

  const handleNext = () => {
    setCount((nextCount) => nextCount + 1);
  };
  const handlePrev = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="max-w-[1200px] ">
        <div className="w-full flex flex-col">
          <img
            src={selectedBlog.cover_image}
            className="h-[600px] rounded-xl relative  "
          />
          <div className="w-[598px] h-[252px] bg-gray-50 rounded-xl p-8 absolute bottom-6 left-50">
            <button className="btn btn-primary px-[10px ] py-1">
              Technology
            </button>
            <p className="text-4xl font-semibold mt-4">
              Grid system for better Design User Interface
            </p>
            <p className="mt-5">August 20, 2022</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end gap-[9px]">
        <button
          onClick={handlePrev}
          className="border solid w-10 h-10 rounded-md flex items-center justify-center">
          <img src="icon (1).png" />
        </button>
        <button
          onClick={handleNext}
          className="border solid w-10 h-10 rounded-md flex items-center justify-center">
          {" "}
          <img src="icon.png" />
        </button>
      </div>
    </div>
  );
};
export default Content;
