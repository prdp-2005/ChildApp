import Stories from "@/components/HomeComponents/Stories";
import Banner from "../components/HomeComponents/Banner";
import TabBanners from "../components/HomeComponents/TabBanners";
import Whychild from "../components/HomeComponents/Whychild";
import Planes from "@/components/HomeComponents/Planes";
import Faq from "@/components/HomeComponents/Faq";
export default function Home() {
  return (
    <>
      <Banner />
      <TabBanners />
      <Whychild />
      <Stories />
      <Planes />
      <Faq />
    </>
  );
}
