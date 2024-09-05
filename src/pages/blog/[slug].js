import parse from "html-react-parser";
import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Page = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const url = `https://dev.to/api/articles/${slug}`;
  const { data: blogDefualt = {}, isLoading } = useSWR(url, fetcher);
  if (isLoading) return <div>loading</div>;
  const body_html = blogDefualt?.body_html;
  {
  }
  return <div>{parse(body_html)}</div>;
};

export default Page;
