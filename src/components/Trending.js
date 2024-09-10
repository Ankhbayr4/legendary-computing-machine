import Link from "next/link";
import useSWR from "swr";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const trendingBlog = [...data].slice(0, 4);

  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-2xl ">Trending</h3>
      <div className="flex gap-5">
        {trendingBlog.map((trending, index) => (
          <div id={`${index}`}>
            <div className="card bg-base-100 image-full w-[289px] shadow-xl">
              <img
                src={trending.cover_image}
                className="h-[320px] w-[289px] rounded-xl"
              />

              <div className="card-body mt-20">
                <div className="card-actions justify-start">
                  <button className="btn btn-primary py-2 text-white">
                    Technology{" "}
                  </button>
                </div>

                <p className="text-lg font-semibold text-white">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Trending;

const blogs = [
  { title: "title", date: "2024.01.01" },
  { title: "title", date: "2024.01.01" },
];

const selectedBlogIndex = 1;

const selectedBlog = blogs[selectedBlogIndex];
