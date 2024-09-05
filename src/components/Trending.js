import Link from "next/link";
import useSWR from "swr";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Trending = () => {
  const { data: blogs = {}, isLoading } = useSWR(url, fetcher);
  if (isLoading) return <div>loading</div>;
  return (
    <div className="flex flex-col gap-[30px]">
      {blogs.map((blog) => {
        <Link href={`blog/${blog.id}`}>
          <div>{blog.title}</div>
        </Link>;
      })}
      <h3 className="text-2xl ">Trending</h3>
      <div
        className="card bg-base-100 image-full w-[289px]
       h-[320px] shadow-xl"
      >
        <figure>
          <img src="image.png" alt="Shoes" />
        </figure>
        <div className="card-body flex gap-4">
          <button className="btn btn-primary flex justify-start ">
            Technology{" "}
          </button>

          <p className="text-lg">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
