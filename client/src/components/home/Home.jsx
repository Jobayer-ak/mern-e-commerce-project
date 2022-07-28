//compnents
import { Box, styled} from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";

import {useDispatch, useSelector} from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slider";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


const Component = styled(Box)`
  padding: 10px 10px;
  background: #F2F2F2;
`;

const Home = () => {

  const {products} =  useSelector(state => state.getProducts)

  console.log(products);

  

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])
  return (
    <> 
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal fo the Day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Descount for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending Offers" timer={false}/>
        <Slide products={products} title="Season's top pics" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/>
      </Component>
    </>
  );
};

export default Home;
