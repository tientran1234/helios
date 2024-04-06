
import "../assets/style.scss"
import Navbar from '../component/home/Navbar';
import Banner from '../component/home/Banner';
import useStore from '../zustand/changeToggle';
import ListProduct from '../component/home/ListProduct';
import Introduction from '../component/home/Introduction';
import TopCollection from "../component/home/TopCollection";
import Collab from "../component/home/Collab";
import Footer from "../component/home/Footer";

function Home() {
  const { isMenuVisible } = useStore();
  console.log(isMenuVisible);
  return (
    <>
      <Navbar></Navbar>
      {isMenuVisible ? <>
        <Banner />
        <ListProduct/>
        <Introduction/>
        <TopCollection/>
        <Collab/>
        <Footer/>
      </>
        : <>
        </>}
    </>
  )
}

export default Home
