import LandingPage from "../components/profilpage/LandingPage";
import AboutUs from "../components/profilpage/AboutUs";
import WhyUs from "../components/profilpage/why";
import Product from "../components/profilpage/Products";
import Video from "../components/profilpage/Video";
import Blog from "../components/profilpage/OurBlog";
import Whatsapp from "../components/profilpage/whatsapp";
import Faq from "../components/profilpage/Faq";

export default function Main() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <WhyUs />
      <Product />
      <Video />
      <Blog />
      <Faq />
      <Whatsapp />
    </>
  );
}
