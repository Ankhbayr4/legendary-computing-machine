import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Content = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [count, setCount] = useState(0);

  if (isLoading) {
    return <p>...loading</p>;
  }
  console.log(count);
  if (error) {
    return <p>...oh sorry error</p>;
  }
  return (
    <div>
      <div className="carousel max-w-[1200px] ">
        {data.map((content, index) => (
          <div
            id={`${index}`}
            className="carousel-item relative w-full flex flex-col"
          >
            <img src={content.cover_image} className="h-[600px]" />
          </div>
        ))}
      </div>
      <div className=" flex justify-end ">
        <a href={`#${count - 1}`} className="btn btn-circle">
          hasah
        </a>
        <a href={`#${count + 1}`} className="btn btn-circle">
          nemeh
        </a>
      </div>
    </div>
  );
};
export default Content;
