import Header from "@/components/Header";
import Blogcarda from "@/components/Blogcarda";
import Footer from "@/components/Footer";
const Page = () => {
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
