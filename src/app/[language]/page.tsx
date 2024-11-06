import Stories from "@/components/HomeComponents/Stories";
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import Whychild from "@/components/HomeComponents/Whychild";
import Planes from "@/components/HomeComponents/Planes";
import Faq from "@/components/HomeComponents/Faq";
import Tabs from "@/components/HomeComponents/HomeTabs";
export default function Home() {
  return (
    <>
      <HomeBanner />
      <Tabs />
      <Whychild />
      <Stories />
      <Planes />
      <Faq />
    </>
  );
}
