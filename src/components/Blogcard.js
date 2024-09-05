import useSWR from "swr";
import moment from "moment";
import Link from "next/link";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        {" "}
        <p className="text-2xl font-extrabold">All Blog Post</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p className="text-xs font-bold">All</p>
          <p className="text-xs font-bold">Design</p>
          <p className="text-xs font-bold">Travel</p>
          <p className="text-xs font-bold">Technology</p>
          <p className="text-xs font-bold">Branding</p>
        </div>

        <div>
          <p className="text-xs font-bold">View All</p>
        </div>
      </div>

      <div className="max-w-[1200px] grid grid-cols-3 mx-auto gap-12">
        {data.map((blog) => {
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
