import LandingPage from "../components/profilpage/LandingPage";
import Definition from "../components/profilpage/Definition";
import Amount from "../components/profilpage/Amount";
import Definition2 from "../components/profilpage/Definition2";
import Product from "../components/profilpage/Products";
import Video from "../components/profilpage/Video";
import Blog from "../components/profilpage/OurBlog";

export default function Main() {
  return (
    <>
      <LandingPage />  
      <Definition />
      <Amount />
      <Definition2 />
      <Product />
      <Video />
      <Blog />
    </>
  );
}
