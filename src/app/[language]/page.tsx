import Stories from "@/components/HomeComponents/Stories";
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import Whychild from "@/components/HomeComponents/Whychild";
import Planes from "@/components/HomeComponents/Planes";
import Contact from "@/components/HomeComponents/contact";
import Tabs from "@/components/HomeComponents/HomeTabs";
import Faq from "@/components/Faq";
import Ecosystem from "@/components/HomeComponents/Ecosystem";
export default function Home() {
  return (
    <>
      <HomeBanner />
      <Ecosystem />
      <Tabs />
      <Whychild />
      <Stories text='Real Stories from Satisfied Customers' gtext='Echte Geschichten von zufriedenen Kunden' />
      <Planes text='Pick Your Chilld Plan' gtext='Wählen Sie Ihren Chilld-Plan' />
      <Faq />
      <Contact />
    </>
  );
}
