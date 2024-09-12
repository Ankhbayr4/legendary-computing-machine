import useSWR from "swr";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [more, setMore] = useState(12);

  const addTask = () => {
    setMore(more + 3);
  };

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const Blogcarddata = [...data].slice(0, more);

  return (
    <div className="flex flex-col gap-8 w-[1200px] mx-auto">
      <div>
        {" "}
        <p className="text-2xl font-extrabold">All Blog Post</p>
      </div>

      <div className="max-w-[1200px] grid grid-cols-3 mx-auto gap-5 ">
        {Blogcarddata.map((blog) => {
          return (
            <Link href={`blog/${blog.id}`}>
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        {" "}
        <button
          onClick={addTask}
          className="border solid flex items-center justify-center px-5 py-3 rounded-md text-base font-medium text-gray-500"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Page;

const BlogCard = (props) => {
  const { image, title, date } = props;
  const formatedDate = moment(date).format("LL");

  return (
    <div>
      <div className="px-4 py-2 border border-solid  w-fit rounded-xl p-4 ">
        <div
          className="rounded-xl"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            height: 240,
            width: 360,
            marginBottom: 16,
          }}
        />

        <h2>{title}</h2>
        <p>{formatedDate}</p>
      </div>
    </div>
  );
};
