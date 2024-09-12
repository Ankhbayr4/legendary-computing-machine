import Header from "@/components/Header";
import Blogcarda from "@/components/Blogcarda";
import Footer from "@/components/Footer";

const Page = (props) => {
  const { articles } = props;

  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Blogcarda />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Page;
export async function getServerSideProps() {
  try {
    const response = await fetch(`https://dev.to/api/articles`);
    const articles = await response.json();

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
